import React from 'react';

	const showTodoList = (props) => {
		const items = Array.from(props.items);
		return items.map((item, i) => { // For loop is statement, cannot write in JSX. Map is an expression which is allowed
			return (
				<li key={i}>
					- {item.description} <i className="small">'createdBy: {item.createdBy}'</i>
					<div><button
						type="button"
						onClick={() => this.removeTodo(i)}>Remove</button></div>
				</li>
		)
		})
	}

	const List = (props) => {
		return (
			<div className="col-md-4">
				<h4>My Todo List</h4>
				<ul className="list-unstyled item-list">
				 {showTodoList(props.items)}
				</ul>
			</div>
		)
	}

export default List;
