import { Box, Checkbox } from '@mui/material';
import { React } from 'react';
import todoFunction from '../../../services/todoFunction';

const CheckBox = (context) => {
	const { setState, state, data: todo } = context;

	return (
		<Box>
			<Checkbox
				checked={ todo.isChecked }
				onClick={ () => setState({
					...state,
					todoList: todoFunction.selectItems({ ...{ ...context,
						data: todo }}),
				}) }
			/>
		</Box>);
};

export default CheckBox;
