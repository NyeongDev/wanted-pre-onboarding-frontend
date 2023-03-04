import { useContext } from 'react';
import { addTodoApi } from '../../api/todo';
import { TodoContext } from '../../pages/TodoPage';
import { Flex, Form } from '../common';
import { TodoBtn, TodoInput } from '../todo';

const TodoForm = () => {
	const { dispatch } = useContext(TodoContext);

	const handleCreateTodo = async e => {
		e.preventDefault();
		const todoContent = {
			todo: e.target[0].value,
		};
		const response = await addTodoApi(todoContent);
		if (response.status === 201) {
			dispatch({ type: 'CREATE', data: response.data });
			e.target[0].value = '';
		} else return window.alert('알 수 없는 에러가 발생했습니다.');
	};

	return (
		<Form wd="100%" onSubmit={handleCreateTodo}>
			<Flex>
				<TodoInput
					data-testid="new-todo-input"
					maxLength="48"
					variant="addTodo"
				/>
				<TodoBtn
					type="submit"
					data-testid="new-todo-add-button"
					variant="addTodo"
				>
					추가
				</TodoBtn>
			</Flex>
		</Form>
	);
};

export default TodoForm;
