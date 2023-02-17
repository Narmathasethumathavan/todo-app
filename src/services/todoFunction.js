import { rndString } from '@laufire/utils/random';

const idLength = 4;
const addTodo = ({ state: { currentState }}) =>
	({
		id: rndString(idLength),
		name: currentState,
	});

const removeTodo = ({ state: { todoList }, data: todo }) =>
	todoList.filter((oneTodo) => oneTodo.id !== todo.id);

const UpdatedTodo = ({ state: { currentState, todoList, edit: todo }}) =>
	todoList.map((todoItem) =>
		(todoItem.id === todo.id
			? { ...todoItem, name: currentState }
			: todoItem));

const todoFunction = {
	addTodo,
	removeTodo,
	UpdatedTodo,
};

export default todoFunction;
