import { Box, Checkbox } from '@mui/material';
import { React } from 'react';
import todoFunction from '../../services/todoFunction';

const ToggleAll = (context) => {
	const { state, setState } = context;
	const isAllTodoSelected = todoFunction.toSelectAllTodo(context);

	return (
		<Box className="selectAll">
			<Checkbox
				checked={ isAllTodoSelected }
				onChange={ (event) => setState({
					...state,
					todoList: todoFunction.selectAllTodo({ ...{ ...context,
						data: event.target.checked }}),
				}) }
			/>
			selectAll
		</Box>);
};

export default ToggleAll;
