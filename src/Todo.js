import React from "react";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: ""};
    }
    
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const todo = e.target.value;
            this.props.addTodo(this.props.todoList, todo)
            this.setState({
                value: ""
            })
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    render() {
        return (
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            type="text"
            name="todo"
            onKeyDown={this._handleKeyDown}
            value={this.state.value} 
            onChange={this.handleChange.bind(this)}
            >
            </input>
        )
    }
}

export default Todo;
