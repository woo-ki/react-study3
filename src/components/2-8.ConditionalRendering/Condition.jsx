import React from 'react';

const Condition = () => {
	const isLoggedIn = true;
	return (
		<div>
			<Greeting isLoggedIn={isLoggedIn}/>
		</div>
	);
};

const Greeting = (props) => {
	// if(props.isLoggedIn) {
	// 	return <UserGreeting name={"jimmy"} count={0}/>
	// } else {
	// 	return <GuestGreeting/>
	// }
	return props.isLoggedIn ? <UserGreeting name={"jimmy"} count={0}/> : <GuestGreeting/>
};

const UserGreeting = (props) => {
	return <h1>{props.name && `${props.name}, `}Welcome{Boolean(props.count) && ` It's ${props.count} times`}</h1>
}

const GuestGreeting = () => {
	return <h1>Please sign up.</h1>
}

export default Condition;
