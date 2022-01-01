import React from 'react';
import CustomDialog from './CustomDialog';

const WelcomeDialog = () => {
	return (
		<div>
			{/*<Dialog>*/}
			{/*	<h1>Welcome</h1>*/}
			{/*	<h5>Thank you</h5>*/}
			{/*</Dialog>*/}
			<CustomDialog title={"Welcome"} description={"Thanks"}/>
		</div>
	);
};

export default WelcomeDialog;
