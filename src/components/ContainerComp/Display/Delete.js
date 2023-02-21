import { Box, Button } from '@mui/material';
import { React } from 'react';
import todoFunction from '../../../services/todoFunction';
import DeleteIcon from '@mui/icons-material/Delete';

const Delete = (context) => {
	const { setState, state } = context;

	return <Box>
		<Button
			startIcon={ <DeleteIcon/> }
			onClick={ () => setState({
				...state,
				todoList: todoFunction.removeTodo(context),
			}) }
		/>
	</Box>;
};

export default Delete;
