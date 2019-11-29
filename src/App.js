import React from "react";
import Todo from "./Todo";
import TodoList from "./TodoList";
import Footer from "./Footer";
// import { updateExpression } from "@babel/types";

function randomId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        todoList: [
          {id: randomId(), value: 'add select mode using rooter', completed: false},
          {id: randomId(), value: 'edit todo', completed: false}
        ],
        remainingTodo: 2,
        toggleAll: false
      }
    }

  updateRemainingTodo = () => {
    this.setState(state => {
      return {
        remainingTodo: state.todoList.length,
      }
    })
  }

  addTodo(todoName) {
    this.setState({
      todoList: [...this.state.todoList, {value: todoName, completed: false, id: randomId()}],
    })
    this.updateRemainingTodo()
  }

  removeTodo(id) {
    this.setState({
      todoList: [...this.state.todoList.filter(todo => todo.id !== id)],
    })
    this.updateRemainingTodo()
  }

  clearCompleted() {
    this.setState({
      todoList: [...this.state.todoList.filter(todo => todo.completed !== true)]
    });
  }

  // editTodo(id) {
  //   const indexTodo = this.state.todoList.findIndex(todo => todo.id === id)
  //   if (indexTodo >= 0) {
  //     const todo = this.state.todoList[indexTodo]
  //     // update the completed field
  //     const newTodo = {
  //       ...todo,
  //       edit: true
  //     }
  //     // replace todo by newTodo
  //     let newTodoList  = [...this.state.todoList]
  //     newTodoList[indexTodo] = newTodo
  //     // Update state
  //   this.setState({
  //     // replace todoList by newTodoList
  //     todoList: newTodoList})
  //   }
  // }

  manageCompleted(id, completed) {
    // Change the completed field in todoList
    // take this todo
    const indexTodo = this.state.todoList.findIndex(todo => todo.id === id)
    // if at least one item
    if (indexTodo >= 0) {
      const todo = this.state.todoList[indexTodo]
      // update the completed field
      const newTodo = {
        ...todo,
        completed: completed
      }
      // replace previous todo in newTodoList
      let newTodoList  = [...this.state.todoList]
      newTodoList[indexTodo] = newTodo
      
      // Update state
      this.setState({
        // replace todoList by newTodoList
        todoList: newTodoList,
        // update count left
        remainingTodo: completed ? this.state.remainingTodo - 1 : this.state.remainingTodo + 1,
        // update value of toggle-all
        toggleAll: newTodoList.filter(todo => todo.completed === true).length === newTodoList.length ? true : false
      });
      
    }
  }

  handleToggleAll(event) {
    const markAsCompleted = event.target.checked;
    const newTodoList = [...this.state.todoList].map(todo => {
      todo.completed = markAsCompleted;
      return todo;
    });
    this.setState({
      todoList: newTodoList,
      remainingTodo: markAsCompleted ? 0 : newTodoList.length,
      toggleAll: event.target.checked
    })
  }

  manageChange(id, value) {
      // Change the completed field in todoList
    // take this todo
    const indexTodo = this.state.todoList.findIndex(todo => todo.id === id)
    // if at least one item
    if (indexTodo >= 0) {
      const todo = this.state.todoList[indexTodo]
      // update the completed field
      const newTodo = {
        ...todo,
        value: value
      }
      // replace previous todo in newTodoList
      let newTodoList  = [...this.state.todoList]
      newTodoList[indexTodo] = newTodo
      
      // Update state
      this.setState({
        // replace todoList by newTodoList
        todoList: newTodoList,
      });
      
    }

  }

  render(){
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <Todo
           addTodo={this.addTodo.bind(this)}
          />
        </header>
        <section className="main">
          <input
           id="toggle-all"
           className="toggle-all"
           type="checkbox"
           checked={this.state.toggleAll}
           onChange={this.handleToggleAll.bind(this)}
           ></input>
          <label htmlFor="toggle-all">
           Mark all as complete
          </label>
          <TodoList
           todoList={this.state.todoList}
           handleDelete={this.removeTodo.bind(this)}
           isCompleted={this.manageCompleted.bind(this)}
           manageChange={this.manageChange.bind(this)}
          //  editTodo={this.editTodo.bind(this)}
          //  finishedEditTodo={this.finishedEditTodo.bind(this)}
           />
        </section>
        <section>
          <Footer
           display={this.state.todoList.length > 0 ? "block" : "none"}
           remainingTodo={this.state.remainingTodo}
           clearCompleted={this.clearCompleted.bind(this)}
          />
        </section>
      </section>
    )
  }
}

export default App;


