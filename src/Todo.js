import React from "react";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: ""};
    }
    
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const todo = e.target.value;
            this.props.addTodo(todo)
            // clear input field
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
          <section>
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                type="text"
                autoFocus=""
                name="todo"
                onKeyDown={this._handleKeyDown}
                value={this.state.value} 
                onChange={this.handleChange.bind(this)}
                >
                </input>
          </section>
        )
    }
}

export default Todo;
