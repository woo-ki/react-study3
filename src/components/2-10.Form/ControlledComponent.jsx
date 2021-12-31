import React, {useState} from 'react';

const ControlledComponent = () => {
	const [name, setName] = useState('');
	const [essay, setEssay] = useState('Please write an essay about your favorite DOM element.');
	const [flavor, setFlavor] = useState('coconut');
	// const handleNameChange = (e) => {
	// 	setName(e.target.value);
	// }
	// const handleEssayChange = (e) => {
	// 	setEssay(e.target.value);
	// }
	// const handleFlavorChange = (e) => {
	// 	setFlavor(e.target.value);
	// }
	const handleChange = (e) => {
		const name = e.target.name;
		const val = e.target.value;
		if(name === 'name') {
			setName(val);
		} else if(name === 'essay') {
			setEssay(val);
		} else if(name === 'flavor') {
			setFlavor(val);
		}
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`A name was submitted: ${name}, essay: ${essay}, flavor: ${flavor}`);
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input type="text" name="name" value={name} onChange={handleChange}/>
				</label>
				<br/>
				<br/>
				<label>
					Essay:
					<textarea name="essay" value={essay} onChange={handleChange}/>
				</label>
				<br/>
				<br/>
				<label>
					Pick your favorite flavor:
					<select name="flavor" value={flavor} onChange={handleChange}>
						<option value="grapefruit">Grapefruit</option>
						<option value="lime">Lime</option>
						<option value="coconut">Coconut</option>
						<option value="mango">Mango</option>
					</select>
				</label>
				<input type="submit" value={"Submit"}/>
			</form>
		</div>
	);
};

export default ControlledComponent;
