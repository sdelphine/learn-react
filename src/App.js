import React from "react";
import Todo from "./Todo";
import TodoList from "./TodoList";
import Footer from "./Footer";

/*
  Todo list
    add function
      isCompleted to put in Todo
      count selected todo
      filter for all, active or completed todo
      clear completed todo
*/

function randomId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        todoList: [
          {id: randomId(), value: 'desactive footer if empty todo list', completed: false},
          {id: randomId(), value: 'add select mode (all, active, completed)', completed: false},
          {id: randomId(), value: 'toogle all in new todo', completed: false},
          {id: randomId(), value: 'edit todo', completed: false}
        ],
        countLeft: 4
      }
    }
  
  addTodo(todoName){
    this.setState({
      todoList: [...this.state.todoList, {value: todoName, completed: false, id: randomId()}]
    })
    this.setState({
      countLeft: this.state.countLeft + 1
    })
  }

  removeTodo(id) {
    this.setState({
      todoList: [...this.state.todoList.filter(todo => todo.id !== id)]
    });
    this.setState({
      countLeft: this.state.countLeft - 1
    })
  }

  clearCompleted() {
    this.setState({
      todoList: [...this.state.todoList.filter(todo => todo.completed !== true)]
    });
  }

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
      // replace todoList by newTodoList
      this.setState({
        todoList: newTodoList
      });
      // update count left
      if (completed) {
        this.setState({
          countLeft: this.state.countLeft - 1
        })
      } else {
        this.setState({
          countLeft: this.state.countLeft + 1
        })
      }
      
      
    }
  }

  render(){
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <Todo addTodo={this.addTodo.bind(this)}/>
        </header>
        <section className="main">
          <TodoList
           todoList={this.state.todoList}
           handleDelete={this.removeTodo.bind(this)}
           isCompleted={this.manageCompleted.bind(this)}
           />
        </section>
        <Footer countLeft={this.state.countLeft} clearCompleted={this.clearCompleted.bind(this)}/>
      </section>
    )
  }
}

export default App;


