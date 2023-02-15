import { Button } from '@mui/material';
import { React } from 'react';

const Add = (context) => {
	const { state: { todoList, currentState }, setState, state } = context;

	return (
		<Button
			className="add"
			variant="contained"
			onClick={ () => setState({
				...state,
				todoList: [...todoList, currentState],
				currentState: '',
			}) }
		>
			Add
		</Button>);
};

export default Add;
