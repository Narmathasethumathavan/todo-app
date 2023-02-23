import { Button } from '@mui/material';
import { React } from 'react';

const Actions = ({ state, setState, data }) =>

	<Button
		onClick={ () => setState({
			...state,
			filter: data,
		}) }
	>{data}
	</Button>;

export default Actions;
