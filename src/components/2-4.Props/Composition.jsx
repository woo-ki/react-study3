import React from 'react';

const Welcome = (props) => {
	return <h1>Hello, {props.name}</h1>
}

const Composition = () => {
	return (
		<div>
			<Welcome name={"Jimmy"} />
			<Welcome name={"Amy"} />
			<Welcome name={"Mike"} />
		</div>
	);
};

export default Composition;