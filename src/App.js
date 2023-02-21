import { Box } from '@mui/material';
import { React, useState } from 'react';
import './App.scss';
import Button from './components/TodoInput/Button';
import ToggleAll from './components/ContainerComp/ToggleAll';
import TextInput from './components/TodoInput/TextInput';
import TodoContainer from './components/ContainerComp/Display/TodoContainer';
import Clear from './components/ContainerComp/Clear';

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
			<ToggleAll { ...extendedContext }/>
			<TodoContainer { ...extendedContext }/>
			<Clear { ...extendedContext }/>

		</Box>);
};

export default App;
