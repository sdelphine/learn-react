import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: "",
        }
    }

    _removeKey = (e) => {
        this.props.clearCompleted()
    }

    _select = (event) => {
        this.setState({
            selected: event.target.name,
        })
    }

    render() {
        return(
            <footer className="footer" style={{display: this.props.display}}>
                <span className="todo-count">
                    {this.props.remainingTodo} {this.props.remainingTodo === 1 ? "item left" : "items left"}
                </span>
                <ul className="filters">
                    <li onClick={this._select.bind(this)}>
                        <Link name="all" className={this.state.selected === "all" ? "selected" : ""} to="#/">All</Link>
                    </li>
                    <li onClick={this._select}>
                        <Link name="active" className={this.state.selected === "active" ? "selected" : ""} to="#/active">Active</Link>
                    </li>
                    <li onClick={this._select}>
                        <Link name="completed" className={this.state.selected === "completed" ? "selected" : ""} to="#/completed">Completed</Link>
                    </li>
                </ul>
                <button className="clear-completed" onClick={this._removeKey}>Clear completed</button>
                        </footer>
        )
    }
}

export default Footer