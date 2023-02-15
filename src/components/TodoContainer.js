import { Box } from '@mui/material';
import React from 'react';

const Container = ({ state: { todoList }}) =>
	<Box className="container">
		<Box>{todoList}</Box>
	</Box>;

export default Container;
