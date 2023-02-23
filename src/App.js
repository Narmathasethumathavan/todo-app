import { Box } from '@mui/material';
import { React, useState } from 'react';
import './App.scss';
import TodoDisplay from './components/ContainerComp';
import TodoInput from './components/TodoInput';

const getState = () => ({
	todoInput: '',
	todoList: [],
	edit: '',
	filter: 'All',
});

const App = (context) => {
	const [state, setState] = useState(getState(context));
	const extendedContext = { ...{ ...context, state, setState }};
	const { state: { todoList }} = extendedContext;

	return (
		<Box className="App">
			<TodoInput { ...extendedContext }/>
			{Boolean(todoList.length) && <TodoDisplay { ...extendedContext }/>}
		</Box>);
};

export default App;
