import React from 'react';

	const showTodoList = (props) => {
		const items = (props["items"] !== undefined) ? Array.from(props.items) : props;
		return items.map((item, i) => {
			return (
				<li key={i}>
					- {item.description} <i className="small">'createdBy: {item.createdBy}'</i>
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
