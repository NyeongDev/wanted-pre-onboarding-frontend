import { useContext, useState } from "react";
import { delTodoApi, updateTodoApi } from "../../api/todo";
import { Flex, Form, Label, List, Span } from "../common";
import { TodoBtn, TodoCheckBox, TodoInput } from "../todo";
import { TodoContext } from "../../pages/TodoPage";

const TodoItem = ({ todoItem }) => {
  const { dispatch } = useContext(TodoContext);
  const [isEdit, setIsEdit] = useState(false);

  // 수정 상태 변경
  const handleUpdateStatus = () => {
    setIsEdit(!isEdit);
  };

  // 수정
  const handleUpdateTodo = async (type, todoContent) => {
    if (type === "modifyTodo" && todoContent.length === 0) {
      window.alert("내용을 입력하세요.");
    } else if (type === "modifyTodo" && todoContent === todoItem.todo) {
      setIsEdit(!isEdit);
    } else {
      const response = await updateTodoApi({
        id: todoItem.id,
        todo: {
          todo: type === "modifyTodo" ? todoContent : todoItem.todo,
          isCompleted:
            type === "checkTodo" ? !todoItem.isCompleted : todoItem.isCompleted,
        },
      });

      if (response.status === 200) {
        dispatch({ type: "UPDATE", data: response.data });
        if (type === "modifyTodo") setIsEdit(!isEdit);
      } else window.alert("알 수 없는 에러가 발생했습니다.");
    }
  };

  // 삭제
  const handleDeleteTodo = async () => {
    if (!window.confirm("삭제하시겠습니까?")) return;
    const response = await delTodoApi(todoItem.id);
    if (response.status === 204) {
      dispatch({ type: "DELETE", id: todoItem.id });
    } else window.alert("알 수 없는 에러가 발생했습니다.");
  };

  const onSubmit = e => {
    e.preventDefault();
    handleUpdateTodo("modifyTodo", e.target[1].value);
  };

  return (
    <List>
      <Flex wd="100%" gap="15px" jc="space-between">
        {isEdit ? (
          <Form wd="100%" onSubmit={onSubmit}>
            <Flex jc="space-between">
              <Flex gap="15px">
                <Label htmlFor={todoItem.id}>
                  <TodoInput
                    onClick={() => handleUpdateTodo("checkTodo")}
                    type="checkbox"
                    variant="checkTodo"
                    id={todoItem.id}
                  />
                  <TodoCheckBox variant={todoItem.isCompleted} />
                </Label>
                <input
                  data-testid="modify-input"
                  defaultValue={todoItem.todo}
                  maxLength="48"
                  autoFocus
                />
              </Flex>
              <Flex gap="2px">
                <TodoBtn
                  type="submit"
                  data-testid="submit-button"
                  variant="modTodo"
                >
                  저장
                </TodoBtn>
                <TodoBtn
                  onClick={handleUpdateStatus}
                  data-testid="cancel-button"
                  variant="modTodo"
                >
                  취소
                </TodoBtn>
              </Flex>
            </Flex>
          </Form>
        ) : (
          <>
            <Flex gap="15px">
              <Label htmlFor={todoItem.id}>
                <TodoInput
                  onClick={() => handleUpdateTodo("checkTodo")}
                  type="checkbox"
                  variant="checkTodo"
                  id={todoItem.id}
                />
                <TodoCheckBox variant={todoItem.isCompleted} />
              </Label>
              <Span>{todoItem.todo}</Span>
            </Flex>
            <Flex gap="2px">
              <TodoBtn
                onClick={handleUpdateStatus}
                data-testid="modify-button"
                variant="modTodo"
              >
                수정
              </TodoBtn>
              <TodoBtn
                onClick={handleDeleteTodo}
                data-testid="delete-button"
                variant="modTodo"
              >
                삭제
              </TodoBtn>
            </Flex>
          </>
        )}
      </Flex>
    </List>
  );
};

export default TodoItem;
