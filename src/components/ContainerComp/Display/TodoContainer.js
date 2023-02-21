/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { Box, ListItem } from '@mui/material';
import React from 'react';
import CheckBox from './CheckBox';
import Delete from './Delete';
import Edit from './Edit';

const TodoContainer = (context) => {
	const { state: { todoList }} = context;

	return (
		todoList.map((todo, key) =>
			<Box
				key={ key }
				className="container"
				style={ { top: `${ key * 40 + 130 }px` } }
			>
				<ListItem>
					<CheckBox { ...{ ...context, data: todo } }/>
					<Edit { ...{ ...context, data: todo } }/>
					<Delete { ... { ...context, data: todo } }/>
				</ListItem>
			</Box>));
};

export default TodoContainer;
