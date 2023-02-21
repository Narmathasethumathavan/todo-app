
import { Box } from '@mui/material';
import { React } from 'react';

const Edit = ({ state, setState, data: todo }) =>
	<Box
		onClick={ () => setState({ ...state,
			edit: todo,
			currentState: todo.name }) }
	>
		{todo.name}
	</Box>;

export default Edit;
