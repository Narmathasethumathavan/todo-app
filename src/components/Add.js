import { Button } from '@mui/material';
import { React } from 'react';
import todoFunction from '../services/todoFunction';

const Add = (context) => {
	const { setState, state } = context;
	const { todoList, addDisabled } = state;

	return (
		<Button
			className="button"
			variant="contained"
			disabled={ addDisabled }
			onClick={ () => setState({
				...state,
				todoList: [...todoList, todoFunction.addTodo(context)],
				currentState: ' ',
				addDisabled: true,
			}) }
		>
			Add
		</Button>);
};

export default Add;
