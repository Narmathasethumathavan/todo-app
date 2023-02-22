import { Button } from '@mui/material';
import { React } from 'react';
const Active = ({ state, setState }) =>
	<Button
		onClick={ () => setState({
			...state,
			filter: 'Active',
		}) }
	>Active</Button>;

export default Active;
