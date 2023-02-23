import { Box, Button } from '@mui/material';
import { React } from 'react';
import todoFunction from '../../services/todoFunction';

const Clear = (context) => {
	const { setState, state } = context;

	return <Box>
		<Button
			className="clear"
			variant="outlined"
			disabled={ !todoFunction.isAnyTodoChecked(context) }
			onClick={ () => setState({
				...state,
				todoList: todoFunction.clearTodo(context),
			}) }
		>
			Clear Completed</Button>
	</Box>;
};

export default Clear;
