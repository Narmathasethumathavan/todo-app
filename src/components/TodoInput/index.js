import { Box } from '@mui/material';
import { React } from 'react';
import Button from './Button';
import TextInput from './TextInput';

const TodoInput = (context) =>
	<Box>
		<TextInput { ...context }/>
		<Button { ...context }/>
	</Box>;

export default TodoInput;
