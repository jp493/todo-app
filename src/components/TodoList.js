import React from 'react';

	const showTodoList = (props) => {
		const items = (props["items"] !== undefined) ? Array.from(props.items) : props;
		return items.map((item, i) => {
			return (
				<li key={i}>
					{item.description}
				</li>
		)
		})
	}

	const List = (props) => {
		return (
			<div>
				<h1>My Todo list</h1>
				<ul>
				 {showTodoList(props.items)}
				</ul>
			</div>
		)
	}

export default List;
