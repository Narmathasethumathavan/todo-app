import { Button } from '@mui/material';
import { React } from 'react';

const Completed = ({ state, setState }) =>
	<Button
		onClick={ () => setState({
			...state,
			filter: 'Completed',
		}) }
	>Completed</Button>;

export default Completed;
