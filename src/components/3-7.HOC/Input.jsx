import React from 'react';
import withLoading from './withLoading';

const Input = (props) => {
	return <input type="text" {...props}/>;
};

export default withLoading(Input);
