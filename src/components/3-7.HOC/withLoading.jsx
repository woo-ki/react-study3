import React, {useEffect, useState} from 'react';

const withLoading = (Component) => {
	return (props) => {
		const [loading, setLoading] = useState(true);

		useEffect(() => {
			const timer = setTimeout(() => {setLoading(false)}, 3000);
			return () => {
				clearTimeout(timer);
			};
		}, []);

		return loading ? <p>Loading...</p> : <Component {...props}/>;
	};
}

export default withLoading;
