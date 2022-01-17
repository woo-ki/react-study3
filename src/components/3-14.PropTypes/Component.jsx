import React from 'react';
import PropTypes from 'prop-types';

const PropComponent = (props) => {
	return <div>{props.name}</div>
}

PropComponent.defaultProps = {
	name: 'jimmy',
	age: 8
}

PropComponent.propTypes = {
	name: PropTypes.string,
	age: function(props, propName, componentName) {
		if (!/7/.test(props[propName])) {
			return new Error(
				`Invalid prop \`${propName}\` ${props[propName]} supplied to \`${componentName}\`. Validation failed.`
			);
		}
	}
}

const Component = () => {
	return (
		<div>
			<PropComponent/>
		</div>
	);
};

export default Component;
