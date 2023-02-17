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
				<ListItem>
					<Checkbox/>
					<Box onClick={ () => setState({ ...state,
						edit: todo,
						currentState: todo.name }) }
					>
						{todo.name}
					</Box>
					<Delete { ... { ...context, data: todo } }/>
				</ListItem>
			</Box>));
};

export default TodoContainer;
