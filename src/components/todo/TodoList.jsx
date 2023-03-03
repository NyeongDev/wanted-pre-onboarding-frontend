import { useContext, useEffect } from "react";
import { getTodosApi } from "../../api/todo";
import { TodoContext } from "../../pages/TodoPage";
import { Flex } from "../common";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todoState, dispatch } = useContext(TodoContext);

  useEffect(() => {
    requestGetTodos();
  }, []);

  const requestGetTodos = async () => {
    const response = await getTodosApi();
    if (response.status === 200) {
      dispatch({ type: "READ", data: response.data });
    } else return window.alert("알 수 없는 에러가 발생했습니다.");
  };

  return (
    <ol style={{ width: "100%" }}>
      <Flex
        gap="15px"
        wd="100%"
        dir="column"
        ht="100%"
        jc="flex-start"
        overflowY="auto"
      >
        {todoState.map(todoItem => (
          <TodoItem key={todoItem.id} todoItem={todoItem} />
        ))}
      </Flex>
    </ol>
  );
};

export default TodoList;
