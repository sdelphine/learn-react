import React from 'react';
import ReactDom from 'react-dom';
// import { cpus } from 'os';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            value: props.todo.value,
            prevValue: ""
        }
    }
    _removeKey = (id) => {
        this.props.handleDelete(id)
    }

    _handleCheckbox(e) {
        // Put to parent
        this.props.isCompleted(e.target.value, e.target.checked)
    }
    
    _editTodo(e) {
        this.setState({
            edit: true,
            prevValue: this.state.value
        })
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    handleClickOutside = event => {
        // Add Enter and Escape input
        const domNode = ReactDom.findDOMNode(this);
        if (!domNode || !domNode.contains(event.target)) {
            this.setState({
                edit: false
            })
        }
    }

    _onKeyPress = event => {
        console.log(event.key)
        if(event.key === "Enter") {
            this.setState({
                edit: false
            })
        }
        if(event.keyCode === 27) {
            this.setState({
                edit: false,
                value: this.state.prevValue
            })
        }
    }

    _manageChange = event => {
        this.setState({
            value: event.target.value
        })
        this.props.manageChange(this.props.todo.id, event.target.value)
    }

    render() {
        return (
            <li
                key={this.props.todo.id}
                className={(this.props.todo.completed ? "completed" : (this.state.edit ? "editing" : ""))}
                onDoubleClick={() => this._editTodo()}
                >
                {this.state.edit && 
                    <div>
                        <input
                            className="edit"
                            defaultValue={this.props.todo.value}
                            onClick={this.handleClickOutside}
                            onChange={this._manageChange.bind(this)}
                            onKeyPress={this._onKeyPress}
                            value={this.state.value}
                        ></input>
                    </div>
                }
                {!this.state.edit && 
                    <div>
                        <input
                            className="toggle"
                            type="checkbox"
                            value={this.props.todo.id}
                            checked={this.props.todo.completed}
                            onChange={this._handleCheckbox.bind(this)}
                        ></input>
                        <label>{this.props.todo.value}</label>
                        <button
                        className="destroy"
                        onClick={() => this._removeKey(this.props.todo.id)}
                        ></button>
                    </div>
                }

            </li>
        )
    }
}

export default TodoListItem;
