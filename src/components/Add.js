import { Button } from '@mui/material';
import { React } from 'react';
import todoFunction from '../services/todoFunction';

const Add = (context) => {
	const { setState, state } = context;
	const { todoList, addDisabled } = state;

	return (
		<Button
			className="add"
			variant="contained"
			disabled={ addDisabled }
			onClick={ () => setState({
				...state,
				todoList: [...todoList, todoFunction.addTodo(context)],
				currentState: ' ',
			}) }
		>
			Add
		</Button>);
};

export default Add;
