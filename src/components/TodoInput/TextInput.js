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
				value={ state.currentState }
				onChange={ (event) => setState({
					...state,
					currentState: event.target.value,
					addDisabled: false,
				}) }
			/>
		</Box>);
};

export default TextInput;
