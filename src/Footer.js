import React from "react"

class Footer extends React.Component {
    _removeKey = (e) => {
        this.props.clearCompleted()
    }

    render() {
        return(
            <footer className="footer" style={{display: this.props.display}}>
                <span className="todo-count">
                    {this.props.countLeft} {this.props.countLeft === 1 ? "item left" : "items left"}
                </span>
                <ul className="filters">
                    <li>
                        <a href="#/">All</a>
                    </li>
                    <li>
                        <a href="#/active">Active</a>
                    </li>
                    <li>
                        <a href="#/completed">Completed</a>
                    </li>
                </ul>
                <button className="clear-completed" onClick={this._removeKey}>Clear completed</button>
            </footer>
        )
    }
}

export default Footer