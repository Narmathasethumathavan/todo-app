import { React } from 'react';
import Add from './Add';
import Update from './Update';

const Button = (context) => {
	const { state: { added }} = context;

	return (
		added
			? <Update { ...context }/>
			: <Add { ...context }/>);
};

export default Button;
