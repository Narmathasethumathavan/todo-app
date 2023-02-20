import { Button } from '@mui/material';
import { React } from 'react';
import todoFunction from '../services/todoFunction';

const Clear = (context) => {
	const { state, setState } = context;

	return (
		<Button
			className="clear"
			variant="contained"
			onClick={ () => setState({
				...state,
				todoList: todoFunction.clearTodo(context),
			}) }
		>
			clearCompleted
		</Button>);
};
