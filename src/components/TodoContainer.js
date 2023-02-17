/* eslint-disable no-magic-numbers */
import { Box, Checkbox, ListItem } from '@mui/material';
import React from 'react';
import DeleteTodo from './Delete';

const Container = (context) => {
	const { state: { todoList }} = context;

	return (
		todoList.map((todo, key) =>
			<Box
				key={ key }
				className="container"
				style={ { top: `${ key * 40 + 130 }px` } }
			>
				<ListItem>
					<Checkbox/>
					{todo.todoName}
					<DeleteTodo { ... { ...context, data: todo } }/>

				</ListItem>
			</Box>));
};

export default Container;
