import React from "react"
import {Link} from "react-router-dom";

class Footer extends React.Component {
    _removeKey = (e) => {
        this.props.clearCompleted()
    }

    render() {
        return(
            <footer className="footer" style={{display: this.props.display}}>
                <span className="todo-count">
                    {this.props.remainingTodo} {this.props.remainingTodo === 1 ? "item left" : "items left"}
                </span>
                <ul className="filters">
                    <li>
                        <Link name="all" className={this.props.view === "all" ? "selected" : ""} to="/">All</Link>
                    </li>
                    <li>
                        <Link name="active" className={this.props.view === "active" ? "selected" : ""} to="/active">Active</Link>
                    </li>
                    <li>
                        <Link name="completed" className={this.props.view === "completed" ? "selected" : ""} to="/completed">Completed</Link>
                    </li>
                </ul>
                <button className="clear-completed" onClick={this._removeKey}>Clear completed</button>
            </footer>
        )
    }
}

export default Footer