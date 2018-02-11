import React from 'react';

const AddTodo = (props) => {
	const { handleChange, addTodo, todo } = props; // props always return object
	return (
		<div className="col-md-4">
			<input
				onChange={handleChange}
				type="text"
				name="todo"
				placeholder="Type New Item..."
				value={todo}
			/>
			<button
				type="button"
				onClick={addTodo}
				className="btn btn-info">Add</button>
		</div>
	);
}

export default AddTodo;
