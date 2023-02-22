/* eslint-disable max-lines-per-function */
import { Box, ButtonGroup } from '@mui/material';
import { React } from 'react';
import Active from './Active';
import All from './All';
import Completed from './Completed';

const Filter = (context) =>
	<Box>
		<ButtonGroup
			className="filter"
			variant="outlined"
		>
			<All { ...context }/>
			<Active { ...context }/>
			<Completed { ...context }/>
		</ButtonGroup>
	</Box>;

export default Filter;
