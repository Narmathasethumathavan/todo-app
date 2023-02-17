/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { Box, Checkbox, ListItem } from '@mui/material';
import React from 'react';
import Delete from './Delete';

const TodoContainer = (context) => {
	const { setState, state, state: { todoList }} = context;

	return (
		todoList.map((todo, key) =>
			<Box
				key={ key }
				className="container"
				style={ { top: `${ key * 40 + 130 }px` } }
			>
				<ListItem
					onClick={ () => setState({ ...state,
						added: true,
						edit: todo,
						currentState: todo.name }) }
				>
					<Checkbox/>
					{todo.name}
					<Delete { ... { ...context, data: todo } }/>
				</ListItem>
			</Box>));
};

export default TodoContainer;
