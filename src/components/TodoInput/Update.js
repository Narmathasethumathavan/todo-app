import { Button } from '@mui/material';
import { React } from 'react';

import todoFunction from '../../services/todoFunction';

const Update = (context) => {
	const { setState, state } = context;

	return (
		<Button
			className="button"
			variant="contained"
			onClick={ () => setState({
				...state,
				todoList: todoFunction.UpdatedTodo(context),
				edit: '',
				todoInput: '',
			}) }
		>
			Update
		</Button>
	);
};

export default Update;
