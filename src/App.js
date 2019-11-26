import React from "react";
import Todo from "./Todo";
import TodoList from "./TodoList";


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
          {id: randomId(), value: 'Add check mark for completed todo', completed: true},
          {id: randomId(), value: 'count todo', completed: true},
          {id: randomId(), value: 'add select mode (all, active, completed)', completed: true},
          {id: randomId(), value: 'clear completed', completed: true},
          {id: randomId(), value: 'desactive footer if empty todo list', completed: true}
        ]
      }
    }
  
  addTodo(todoName){
    this.setState({
      todoList: [...this.state.todoList, {value: todoName, completed: true, id: randomId()}]
    })
  }

  removeTodo(id) {
    this.setState({
      todoList: [...this.state.todoList.filter(todo => todo.id !== id)]
    });
  }

  render(){
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <Todo addTodo={this.addTodo.bind(this)}/>
        </header>
        <section className="main">
          <TodoList todoList={this.state.todoList} handleDelete={this.removeTodo.bind(this)}/>
        </section>
      </section>
    )
  }
}

export default App;


