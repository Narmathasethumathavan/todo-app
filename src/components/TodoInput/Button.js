import { React } from 'react';
import todoFunction from '../../services/todoFunction';
import Add from './Add';
import Update from './Update';

const Button = (context) => {
	const { state: { edit }} = context;

	return (
		todoFunction.toSelect({ ...{ ...context, data: edit }})
			? <Add { ...context }/>
			: <Update { ...context }/>);
};

export default Button;
