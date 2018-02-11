import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

import items from './components/TodoItems'; //data


class TodoApp extends Component {
	constructor() {
		super();
		var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
		this.state = { // initial state
			todo: '',
			date: date,
			todos: {items}
		}
	}

	addTodo = () => {
		var _this = this;
		var val = _this.state.todo;
		var len = _this.state.todos.items.length + 1;
		var d = _this.state.date;
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
			todo: e.target.value
		});
	}

	clearInput = () => {
		this.setState({
			todo: ''
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
