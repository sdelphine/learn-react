import React from "react";

class TodoList extends React.Component {
    
    _removeKey = (id) => {
        this.props.handleDelete(id)
    }

    _handleCheckbox(e) {
        const name = e.target.value
        const checked = e.target.checked
        console.log(checked)
    }
    render () {
        return(
            <ul className="todo-list">
                 {
                     this.props.todoList.map((todo) => (
                         <li key={todo.id}>
                             <input className="toggle" type="checkbox" value={todo.id} onChange={this._handleCheckbox}></input>
                             {/* <input class="edit" value={this.props.todoList[id].value}></input> */}
                             <label>{todo.value}</label> 
                             <button className="destroy" onClick={() => this._removeKey(todo.id)}></button>
                         </li>
                     ))
                  }
            </ul>
        )
    }
}

export default TodoList;
