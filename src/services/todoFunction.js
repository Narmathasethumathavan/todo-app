import { rndString } from '@laufire/utils/random';

const idLength = 4;
const addTodo = ({ state: { currentState }}) =>
	({
		id: rndString(idLength),
		name: currentState,
		isChecked: false,
	});

const removeTodo = ({ state: { todoList }, data: todo }) =>
	todoList.filter((todoItem) => todoItem.id !== todo.id);

const UpdatedTodo = ({ state: { currentState, todoList, edit: todo }}) =>
	todoList.map((todoItem) =>
		(todoItem.id === todo.id
			? { ...todoItem, name: currentState }
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

const isAllTodoSelected = ({ state: { todoList }}) => todoList.every((todo) =>
	todo.isChecked);

const clearTodo = ({ state: { todoList }}) =>
	todoList.filter((todoItem) => !todoItem.isChecked);

const todoFunction = {
	addTodo,
	removeTodo,
	UpdatedTodo,
	toggleAllTodo,
	clearTodo,
	selectItem,
	isAllTodoSelected,
};

export default todoFunction;
