import { Box, Checkbox } from '@mui/material';
import { React } from 'react';
import todoFunction from '../../services/todoFunction';

const ToggleAll = (context) => {
	const { state, setState } = context;
	const isAllTodoSelected = todoFunction.isAllTodoSelected(context);

	return (
		<Box className="selectAll">
			<Checkbox
				checked={ isAllTodoSelected }
				onClick={ (event) => setState({
					...state,
					todoList: todoFunction.toggleAllTodo({ ...{ ...context,
						data: event.target.checked }}),
				}) }
			/>
			selectAll
		</Box>);
};

export default ToggleAll;
