import { rndString } from '@laufire/utils/random';

const idLength = 4;
const addTodo = ({ state: { todoInput }}) =>
	({
		id: rndString(idLength),
		name: todoInput,
		isChecked: false,
	});

const removeTodo = ({ state: { todoList }, data: todo }) =>
	todoList.filter((todoItem) => todoItem.id !== todo.id);

const UpdatedTodo = ({ state: { todoInput, todoList, edit: todo }}) =>
	todoList.map((todoItem) =>
		(todoItem.id === todo.id
			? { ...todoItem, name: todoInput }
			: todoItem));

const toggleAllTodo = ({ state: { todoList }, data }) =>
	todoList.map((todo) => ({
		...todo,
		isChecked: data,
	}));

const selectItem = ({ state: { todoList }, data: todo }) =>
	todoList.map((todoItem) => (todoItem.id === todo.id
		? { ...todo, isChecked: !todo.isChecked }
		: todoItem
	));

const isAllTodoSelected = ({ state: { todoList }}) =>
	todoList.length && todoList.every((todo) =>
		todo.isChecked);

const clearTodo = ({ state: { todoList }}) =>
	todoList.filter((todoItem) => !todoItem.isChecked);

const filters = {
	All: ({ state: { todoList }}) => todoList,
	Active: ({ state: { todoList }}) =>
		todoList.filter((todoItem) => !todoItem.isChecked),
	Completed: ({ state: { todoList }}) =>
		todoList.filter((todoItem) => todoItem.isChecked),

};
const getFilter = (context) =>
	filters[context.state.filter](context);

const todoFunction = {
	addTodo,
	removeTodo,
	UpdatedTodo,
	toggleAllTodo,
	clearTodo,
	selectItem,
	isAllTodoSelected,
	getFilter,
	filters,
};

export default todoFunction;
