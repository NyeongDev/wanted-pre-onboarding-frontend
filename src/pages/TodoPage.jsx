import { Flex, Form, H1, Label, List } from "../components/common";
import { TodoBtn, TodoCheckBox, TodoInput } from "../components/todo";

const Todo = () => {
  return (
    <Flex dir="column" gap="37px" ht="100%" wd="100%">
      <H1>TODO</H1>

      {/* 투두 작성 폼 */}
      <Form wd="100%">
        <Flex>
          <TodoInput
            data-testid="new-todo-input"
            maxLength="48"
            variant="addTodo"
          />
          <TodoBtn data-testid="new-todo-add-button" variant="addTodo">
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
        <Flex wd="100%" gap="15px">
          <TodoInput variant="checkTodo" id="checkTodo" type="checkbox" />
          <Label htmlFor="checkTodo" variant="checkedTodo">
            <TodoCheckBox variant="checkedTodo" />
          </Label>
          <List>화이팅</List>
          <Flex gap="2px">
            <TodoBtn variant="modTodo">수정</TodoBtn>
            <TodoBtn variant="modTodo">삭제</TodoBtn>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Todo;
