import { Box, ButtonGroup } from '@mui/material';
import { React } from 'react';
import Actions from './All';

const Filter = (context) => {
	const { config: { actions }} = context;

	return (
		<Box>
			<ButtonGroup
				className="filter"
				variant="outlined"
			>
				{actions.map((item, key) =>
					<Actions key={ key } { ...{ ...context, data: item } }/>)}
			</ButtonGroup>
		</Box>);
};

export default Filter;
