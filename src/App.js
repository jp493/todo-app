import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

import items from './components/TodoItems'; //data

/*
 1. Show Todo list
 2. Add a Todo item
 			- input field to allow user to enter a new todo item
			- button to add the value to the list
			- clear the input
 3. Remove a Todo item
 - Button which says Remove Todo
 - When you click the button, we'll remove the todo item
 - use splice to remove the array
*/

class TodoApp extends Component {
	constructor() {
		super(); // invoke the super class
		var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
		this.state = { // initial state
			todo: '',
			date: date,
			todos: {items}
		}
	}
	/* remove constructor, then this. is optional
	state = { // initial state
		todo: '',
		date: date,
		todos: {items}
	}
	*/

	addTodo = () => {
		var _this = this;
		var val = _this.state.todo;
		var len = _this.state.todos.items.length + 1;
		var d = _this.state.date;
		/*
			Deep dive:
			const {todos, todo} = this.state;
			[...todos, todo] create a clone, problem here is create a refrence to an obj. ...spread
			solution: JSON.parse(JSON.sringify(this.state)), convert the obj to a string
		*/
		const nextTodos = Array.from(_this.state.todos.items);

		// debugger
		nextTodos.push({"id":len,"description":val, "createdBy":d});
		const next = Object.assign({}, {items:nextTodos});
		_this.setState(
			{ todos: next }
		);
		this.clearInput();
	}

	handleChange = (e) => {
		var _this = this;
		_this.setState({
			/*
				ES6 property, it can used for all components name, defined in element's name
				The benefit of doing this is to use this func for multipal changes.
			*/
			[e.target.name]: e.target.value
		});
	}

	clearInput = () => {
		this.setState({
			todo: ''
		})
	}

	removeTodo = (index) => {
		const nextTodos = Array.from(this.state.todos);
		nextTodos.splice(index, 1); // remove thie todo by its index
		this.setState({
			todos: index
		})
	}

	render() {
		return (
			<div className="home">
					<TodoList items={this.state.todos} />
					<AddTodo
						addTodo={this.addTodo} handleChange={this.handleChange}
						todo={this.state.todo}
					/>

			</div>
		)
	}
}

export default TodoApp;
