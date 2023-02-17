import { peek } from '@laufire/utils/debug';
import { rndString } from '@laufire/utils/random';

const idLength = 4;
const addTodo = ({ state: { currentState }}) =>
	({
		todoName: currentState,
		id: rndString(idLength),
	});
const removeTodo = ({ state: { todoList }, data: todo }) =>
	todoList.filter((oneTodo) => peek(oneTodo.id) !== peek(todo.id));

const todoFunction = {
	addTodo,
	removeTodo,
};

export default todoFunction;
