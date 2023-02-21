import { Button } from '@mui/material';
import { React } from 'react';
import todoFunction from '../../services/todoFunction';

const Add = (context) => {
	const { setState, state } = context;
	const { todoList, todoInput } = state;

	return (
		<Button
			className="button"
			variant="contained"
			disabled={ todoInput === '' }
			onClick={ () => setState({
				...state,
				todoList: [...todoList, todoFunction.addTodo(context)],
				todoInput: '',
			}) }
		>
			Add
		</Button>);
};

export default Add;
