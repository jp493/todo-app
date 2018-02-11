import React from 'react';

const AddTodo = (props) => {
	const { handleChange, addTodo, todos } = props;
	return (
		<div>
			<input onChange={handleChange} type="text" placeholder="type in new item" value={todos} />
			<button onClick={addTodo}>Add</button>
		</div>
	);
}

export default AddTodo;
