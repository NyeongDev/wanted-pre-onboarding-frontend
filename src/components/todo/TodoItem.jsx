import { delTodoApi, updateTodoApi } from "../../api/todo";
import { Flex, Label, List, Span } from "../common";
import { TodoBtn, TodoCheckBox, TodoInput } from "../todo";

const TodoItem = ({
  todo,
  todoList,
  setTodoList,
  handleOnChangeTodo,
  updateTodoContent,
  setUpdateTodoContent,
}) => {
  // 수정 상태 변경
  const handleUpdateStatus = () => {
    const changedTodoList = todoList.map(todoItem => {
      return todoItem.id === todo.id
        ? {
            ...todoItem,
            isUpdateStatus: !todo.isUpdateStatus,
          }
        : { ...todoItem, isUpdateStatus: false };
    });
    setTodoList(changedTodoList);
    setUpdateTodoContent(todo.todo);
  };

  // 수정
  const handleUpdateTodo = async () => {
    if (updateTodoContent.length > 0) {
      const newTodo = { ...todo, todo: updateTodoContent };
      const response = await updateTodoApi(newTodo);

      if (response.status === 200) {
        const changedTodoList = todoList.map(todoItem => {
          return todoItem.id === todo.id
            ? {
                ...todoItem,
                todo: updateTodoContent,
                isUpdateStatus: false,
              }
            : todoItem;
        });
        setTodoList(changedTodoList);
      } else window.alert("알 수 없는 에러가 발생했습니다.");
    } else window.alert("내용을 입력하세요.");
  };

  // 삭제
  const handleDelTodo = async () => {
    const response = await delTodoApi(todo.id);
    if (response === 204) {
      const changedTodoList = todoList.filter(
        todoItem => todoItem.id !== todo.id
      );
      setTodoList(changedTodoList);
    } else window.alert("알 수 없는 에러가 발생했습니다.");
  };

  // 체크
  const handleCheckTodo = async () => {
    const changedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };
    const response = await updateTodoApi(changedTodo);
    if (response.status === 200) {
      const changedTodoList = todoList.map(todoItem => {
        return todoItem.id === todo.id
          ? {
              ...todoItem,
              isCompleted: !todo.isCompleted,
            }
          : todoItem;
      });
      setTodoList(changedTodoList);
    } else window.alert("알 수 없는 에러가 발생했습니다.");
  };

  return (
    <List>
      <Flex wd="100%" gap="15px" jc="space-between">
        <Label htmlFor={todo.id}>
          <Flex gap="15px">
            <TodoInput
              onClick={handleCheckTodo}
              type="checkbox"
              variant="checkTodo"
              id={todo.id}
            />
            <TodoCheckBox variant={todo.isCompleted} />
            {todo.isUpdateStatus ? (
              <input
                onChange={e => handleOnChangeTodo(e, todo.isUpdateStatus)}
                data-testid="modify-input"
                value={updateTodoContent}
                maxLength="48"
                autoFocus
              />
            ) : (
              <Span>{todo.todo}</Span>
            )}
          </Flex>
        </Label>
        <Flex gap="2px">
          {todo.isUpdateStatus ? (
            <TodoBtn
              onClick={handleUpdateTodo}
              data-testid="submit-button"
              variant="modTodo"
            >
              저장
            </TodoBtn>
          ) : (
            <TodoBtn
              onClick={handleUpdateStatus}
              data-testid="modify-button"
              variant="modTodo"
            >
              수정
            </TodoBtn>
          )}
          {todo.isUpdateStatus ? (
            <TodoBtn
              onClick={handleUpdateStatus}
              data-testid="cancel-button"
              variant="modTodo"
            >
              취소
            </TodoBtn>
          ) : (
            <TodoBtn
              onClick={handleDelTodo}
              data-testid="delete-button"
              variant="modTodo"
            >
              삭제
            </TodoBtn>
          )}
        </Flex>
      </Flex>
    </List>
  );
};

export default TodoItem;
