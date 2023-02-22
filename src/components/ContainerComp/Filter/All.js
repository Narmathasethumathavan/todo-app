import { Button } from '@mui/material';
import { React } from 'react';

const All = ({ state, setState }) =>
	<Button
		onClick={ () => setState({
			...state,
			filter: 'All',
		}) }
	>All</Button>;

export default All;
