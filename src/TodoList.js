import React from "react";

class TodoList extends React.Component {
    
    _removeKey = (id) => {
        this.props.handleDelete(id)
    }

    _handleCheckbox(e) {
        // Put to parent
        this.props.isCompleted(e.target.value, e.target.checked)
    }

    render () {
        return(
            <ul className="todo-list">
                {
                    this.props.todoList.map((todo) => (
                        <li key={todo.id} className={(todo.completed ? "completed" : "")}>
                        <input
                            className="toggle"
                            type="checkbox"
                            value={todo.id}
                            checked={todo.completed}
                            onChange={this._handleCheckbox.bind(this)}
                            >
                            </input>
                            <label>{todo.value}</label>
                            {/* TODO Edit function*/}
                            {/* <input class="edit" value={this.props.todoList[id].value}></input> */}
                            <button className="destroy" onClick={() => this._removeKey(todo.id)}></button>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default TodoList;
