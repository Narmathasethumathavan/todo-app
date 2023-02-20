import { peek } from '@laufire/utils/debug';
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
	peek(todoList.map((todoItem) => (todoItem.id === todo.id
		? { ...todo, isChecked: !todo.isChecked }
		: todoItem
	)));

const toSelectAllTodo = ({ state: { todoList }}) => todoList.every((todo) =>
	todo.isChecked === true);

const clearTodo = ({ state: { todoList }, check: todo }) =>
	todoList.filter((oneTodo) => oneTodo.isChecked !== todo.isChecked);

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
