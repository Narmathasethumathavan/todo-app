import { Box, TextField } from '@mui/material';
import { React } from 'react';

const TextInput = (context) => {
	const { setState, state } = context;

	return (
		<Box
			className="input"
		>
			<TextField
				id="outlined-basic"
				value={ state.todoInput }
				onChange={ (event) => setState({
					...state,
					todoInput: event.target.value,
				}) }
			/>
		</Box>);
};

export default TextInput;
