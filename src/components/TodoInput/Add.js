import { Button } from '@mui/material';
import { React } from 'react';
import todoFunction from '../../services/todoFunction';

const Add = (context) => {
	const { setState, state } = context;
	const { todoList, currentState } = state;

	return (
		<Button
			className="button"
			variant="contained"
			disabled={ currentState === ' ' }
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
