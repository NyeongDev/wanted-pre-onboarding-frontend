import { instance } from './instance';

export const addTodoApi = todoContent => instance.post(`/todos`, todoContent);

export const getTodosApi = () => instance.get(`/todos`);

export const delTodoApi = todoId => instance.delete(`/todos/${todoId}`);

export const updateTodoApi = todoItem =>
	instance.put(`/todos/${todoItem.id}`, todoItem.todo);
