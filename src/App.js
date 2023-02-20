import { Box } from '@mui/material';
import { React, useState } from 'react';
import './App.scss';
import Button from './components/Button';
import SelectAll from './components/SelectAll';
import TextInput from './components/TextInput';
import TodoContainer from './components/TodoContainer';

const getState = () => ({
	currentState: ' ',
	todoList: [],
	addDisabled: true,
	edit: '',
});

const App = (context) => {
	const [state, setState] = useState(getState(context));
	const extendedContext = { ...{ ...context, state, setState }};

	return (
		<Box className="App">
			<TextInput { ...extendedContext }/>
			<Button { ...extendedContext }/>
			<SelectAll { ...extendedContext }/>
			<TodoContainer { ...extendedContext }/>

		</Box>);
};

export default App;
