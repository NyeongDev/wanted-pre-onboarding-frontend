import { createContext, useReducer } from 'react';
import { Flex, H1 } from '../components/common';
import TodoForm from '../components/todo/TodoForm';
import TodoList from '../components/todo/TodoList';
import { initialStateTodo, todoReducer } from '../reducers/todoReducer';

export const TodoContext = createContext({});

const TodoPage = () => {
	const [todoState, dispatch] = useReducer(todoReducer, initialStateTodo);

	return (
		<Flex dir="column" gap="37px" ht="100%" wd="100%" jc="flex-start">
			<H1>TODO</H1>
			<TodoContext.Provider value={{ todoState, dispatch }}>
				<TodoForm />
				<TodoList />
			</TodoContext.Provider>
		</Flex>
	);
};

export default TodoPage;
