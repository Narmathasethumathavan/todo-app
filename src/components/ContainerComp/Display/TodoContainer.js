import { Box, ListItem } from '@mui/material';
import React from 'react';
import CheckBox from './CheckBox';
import Delete from './Delete';
import Todo from './Todo';
const todoMultiplier = 40;
const todoTopMargin = 130;

const TodoContainer = (context) => {
	const { state: { todoList }} = context;

	return (
		todoList.map((todo, key) =>
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
