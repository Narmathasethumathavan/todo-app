import { Box } from '@mui/material';
import { React, useState } from 'react';
import './App.scss';
import Add from './components/Add';
import TextInput from './components/TextBox';
import Container from './components/TodoContainer';

const getState = () => ({
	currentState: ' ',
	todoList: [],
	addDisabled: true,
});

const App = (context) => {
	const [state, setState] = useState(getState(context));
	const extendedContext = { ...{ ...context, state, setState }};

	return (
		<Box className="App">
			<TextInput { ...extendedContext }/>
			<Add { ...extendedContext }/>
			<Container { ...extendedContext }/>
		</Box>);
};

export default App;
