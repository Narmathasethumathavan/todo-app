import { rndString } from '@laufire/utils/random';

const idLength = 4;
const addTodo = ({ state: { currentState }}) =>
	({
		id: rndString(idLength),
		name: currentState,
		isChecked: false,
	});

const removeTodo = ({ state: { todoList }, data: todo }) =>
	todoList.filter((oneTodo) => oneTodo.id !== todo.id);

const UpdatedTodo = ({ state: { currentState, todoList, edit: todo }}) =>
	todoList.map((todoItem) =>
		(todoItem.id === todo.id
			? { ...todoItem, name: currentState }
			: todoItem));

const selectAllTodo = ({ state: { todoList }, data }) =>
	todoList.map((todo) => ({
		...todo,
		isChecked: data,
	}));

const selectItems = ({ state: { todoList }, data: todo }) =>
	todoList.map((todoItem) => (todoItem.id === todo.id
		? { ...todo, isChecked: !todo.isChecked }
		: todoItem
	));

const toSelectAllTodo = ({ state: { todoList }}) => todoList.every((todo) =>
	todo.isChecked === true);

const clearTodo = ({ state: { todoList }}) =>
	todoList.filter((todoItem) => todoItem.isChecked === false);

const todoFunction = {
	addTodo,
	removeTodo,
	UpdatedTodo,
	selectAllTodo,
	clearTodo,
	selectItems,
	toSelectAllTodo,
};

export default todoFunction;
