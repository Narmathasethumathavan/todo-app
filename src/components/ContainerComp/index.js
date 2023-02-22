import { Box } from '@mui/material';
import { React } from 'react';
import Clear from './Clear';
import TodoContainer from './Display/TodoContainer';
import Filter from './Filter';
import ToggleAll from './ToggleAll';

const TodoDisplay = (context) =>
	<Box>
		<TodoContainer { ...context }/>
		<ToggleAll { ...context }/>
		<Clear { ...context }/>
		<Filter { ...context }/>
	</Box>;

export default TodoDisplay;
