import React, { Component } from 'react'; 
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

import items from './components/TodoItems'; //data


class TodoApp extends Component {
	constructor() {
		super();
		this.state = { // initial state
			todo: '',
			todos: {items}
		}
	}

	addTodo = () => {
		var _this = this;
		var val = _this.state.todo;
		var len = _this.state.todos.items.length + 1;
		const nextTodos = Array.from(_this.state.todos.items);
		// debugger
		nextTodos.push({"id":len,"description":val});
		const next = Object.assign({}, {items:nextTodos});
		_this.setState(
			{ todos: next }
		);
	}

	handleChange = (e) => {
		var _this = this;
		_this.setState({
			todo: e.target.value
		});
	}

	render() {
		return (
			<div>
					<TodoList items={this.state.todos} />
					<AddTodo
						addTodo={this.addTodo} handleChange={this.handleChange}
						todo={this.state.todos}
					/>
			</div>
		)
	}
}

export default TodoApp;
