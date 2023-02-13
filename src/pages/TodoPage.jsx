import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTodoApi, getTodosApi } from "../api/todo";
import { Flex, Form, H1 } from "../components/common";
import { TodoBtn, TodoInput, TodoItem } from "../components/todo";

const TodoPage = () => {
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState([]);
  const [todoContent, setTodoContent] = useState("");
  const [updateTodoContent, setUpdateTodoContent] = useState("");

  useEffect(() => {
    token ? requestGetTodos() : navigate("/signin");
  }, [token]);

  // 투두 조회
  const requestGetTodos = async () => {
    const response = await getTodosApi();
    if (response.status === 200) {
      const initialTodoList = response.data.map(todoItem => {
        return { ...todoItem, isUpdateStatus: false };
      });
      setTodoList(initialTodoList);
    } else return window.alert("알 수 없는 에러가 발생했습니다.");
  };

  // 투두 작성
  const handleOnChangeTodo = (e, isUpdateStatus) => {
    if (isUpdateStatus) {
      setUpdateTodoContent(e.target.value);
    } else {
      setTodoContent(e.target.value);
    }
  };

  // 투두 저장
  const handleAddTodo = async e => {
    e.preventDefault();
    if (todoContent.length > 0) {
      const response = await addTodoApi(todoContent);
      if (response.status === 201) {
        const newTodo = { ...response.data, isUpdateStatus: false };
        setTodoList([...todoList, newTodo]);
        setTodoContent("");
      } else return window.alert("알 수 없는 에러가 발생했습니다.");
    }
  };

  return (
    <Flex dir="column" gap="37px" ht="100%" wd="100%">
      <H1>TODO</H1>

      {/* 투두 작성 폼 */}
      <Form wd="100%">
        <Flex>
          <TodoInput
            onChange={e => handleOnChangeTodo(e)}
            data-testid="new-todo-input"
            maxLength="48"
            variant="addTodo"
            value={todoContent || ""}
          />
          <TodoBtn
            onClick={handleAddTodo}
            data-testid="new-todo-add-button"
            variant="addTodo"
          >
            추가
          </TodoBtn>
        </Flex>
      </Form>

      {/* 투두 리스트 */}
      <Flex
        gap="15px"
        wd="100%"
        dir="column"
        ht="100%"
        jc="flex-start"
        overflowY="auto"
      >
        {todoList.map(todo => (
          <TodoItem
            key={todo.id}
            setTodoList={setTodoList}
            todoList={todoList}
            todo={todo}
            handleOnChangeTodo={handleOnChangeTodo}
            updateTodoContent={updateTodoContent}
            setUpdateTodoContent={setUpdateTodoContent}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default TodoPage;
