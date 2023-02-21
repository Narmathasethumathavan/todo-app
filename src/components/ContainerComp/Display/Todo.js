
import { Box } from '@mui/material';
import { React } from 'react';

const Todo = ({ state, setState, data: todo }) =>
	<Box
		onClick={ () => setState({ ...state,
			edit: todo,
			todoInput: todo.name }) }
	>
		{todo.name}
	</Box>;

export default Todo;
