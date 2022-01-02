import React from 'react';
import withLoading from './withLoading';

const Button = (props) => {
	return <button {...props}/>;
};

export default withLoading(Button);
