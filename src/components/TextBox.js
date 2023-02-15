import { Box, TextField } from '@mui/material';
import { React } from 'react';

const TextInput = (context) => {
	const { state, setState } = context;

	return (
		<Box
			className="input"
		>
			<TextField
				id="outlined-basic"
				onChange={ (event) => setState({
					...state,
					currentState: event.target.value,
				}) }
			/>
		</Box>);
};

export default TextInput;
