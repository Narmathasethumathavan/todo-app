import { React } from 'react';
import Add from './Add';
import Update from './Update';

const Button = (context) => {
	const { state: { edit }} = context;

	return (
		edit === ''
			? <Add { ...context }/>
			: <Update { ...context }/>);
};

export default Button;
