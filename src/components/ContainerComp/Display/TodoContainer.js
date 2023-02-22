import { Box, ListItem } from '@mui/material';
import React from 'react';
import todoFunction from '../../../services/todoFunction';
import CheckBox from './CheckBox';
import Delete from './Delete';
import Todo from './Todo';
const todoMultiplier = 50;
const todoTopMargin = 180;

const TodoContainer = (context) => {
	const filterTodo = todoFunction.getFilter(context);

	return (
		filterTodo.map((todo, key) =>
			<Box
				key={ key }
				className="container"
				style={ { top: `${ key * todoMultiplier + todoTopMargin }px` } }
			>
				<ListItem>
					<CheckBox { ...{ ...context, data: todo } }/>
					<Todo { ...{ ...context, data: todo } }/>
					<Delete { ... { ...context, data: todo } }/>
				</ListItem>
			</Box>));
};

export default TodoContainer;
