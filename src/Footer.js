import React from "react"

class Footer extends React.Component {
    // style display: none instead of display if lenght item is 0
    // style="display: block;

    _removeKey = (e) => {
        this.props.clearCompleted()
    }

    render() {
        return(
            <footer className="footer">
                <span className="todo-count">{this.props.countLeft} items left</span>
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