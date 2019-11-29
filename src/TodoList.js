import React from "react";
import TodoListItem from './TodoListItem';

class TodoList extends React.Component {   
    _removeKey = (id) => {
        this.props.handleDelete(id)
    }

    _handleCheckbox(value, checked) {
        // Put to parent
        this.props.isCompleted(value, checked)
    }

    _manageChange(id, value) {
        this.props.manageChange(id, value)
    }
    render () {
        return(
            <ul className="todo-list">
                {
                    this.props.todoList.map((todo) => (
                        <TodoListItem
                         key={todo.id}
                         todo={todo}
                         isCompleted={this._handleCheckbox.bind(this)}
                         handleDelete={this._removeKey.bind(this)}
                         manageChange={this._manageChange.bind(this)}/>
                    ))
                }
            </ul>
        )
    }
}

export default TodoList;
