import React from 'react';

const List = () => {
	// const numbers = [1, 2, 3, 4, 5];
	// return (
	// 	<ul>
	// 		{
	// 			numbers.map((item) => {
	// 				return <li key={item.toString()}>{item}</li>
	// 			})
	// 		}
	// 	</ul>
	// );
	const todos = [
		{id: 1, text: 'Drink Warter'},
		{id: 2, text: 'Wash Car'},
		{id: 3, text: 'Listen Lecture'},
		{id: 4, text: 'Go to bed'}
	]

	const Item = (props) => {
		return <li>{props.text}</li>
	}

	const todoList = todos.map(x => {
		return <Item key={x.id} {...x}/>
	})

	return (
		<>
			{todoList}
		</>
	)
};

export default List;
