import React from "react";

class TodoList extends React.Component {
    
    _removeKey = (id) => {
        this.props.handleDelete(this.props.todoList, id)
    }

    render () {
        return(
            <ul className="todo-list">
                 {
                     Object.keys(this.props.todoList).map((id) => (
                         <li key={id}>
                             <input className="toggle" type="checkbox"></input>
                             {/* <input class="edit" value={this.props.todoList[id].value}></input> */}
                             <label>{this.props.todoList[id].value}</label> 
                             <button className="destroy" onClick={this._removeKey.bind(this, id)}></button>
                         </li>
                     ))
                  }
            </ul>
        )
    }
}

export default TodoList;
