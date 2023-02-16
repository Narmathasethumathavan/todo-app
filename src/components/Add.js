import { Button } from '@mui/material';
import { React } from 'react';

const Add = (context) => {
	const { setState, state } = context;
	const { todoList, currentState, addDisabled } = state;

	return (
		<Button
			className="add"
			variant="contained"
			disabled={ addDisabled }
			onClick={ () => setState({
				...state,
				todoList: [...todoList, currentState],
				currentState: ' ',
			}) }
		>
			Add
		</Button>);
};

export default Add;
