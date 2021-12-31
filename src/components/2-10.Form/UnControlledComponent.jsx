import React, {useRef} from 'react';

const UnControlledComponent = () => {
	const fileInputRef = useRef(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`Selected file - ${fileInputRef.current.files[0].name}`);
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Upload file:
					<input type="file" ref={fileInputRef} />
				</label>
				<br />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default UnControlledComponent;
