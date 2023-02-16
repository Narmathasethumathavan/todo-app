/* eslint-disable no-magic-numbers */
import { Delete } from '@mui/icons-material';
import { Box, Checkbox, ListItem } from '@mui/material';
import React from 'react';

const Container = ({ state: { todoList }}) =>
	todoList.map((todo, key) =>
		<Box
			key={ key }
			className="container"
			style={ { top: `${ key * 40 + 130 }px` } }
		>
			<ListItem>
				<Checkbox/>
				{todo}
				<Delete/>
			</ListItem>
		</Box>);

export default Container;
