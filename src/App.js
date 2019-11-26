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

// TODO tranform list to object (dict)

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        todoList: [
          {id: 0, value: 'Add check mark for completed todo', status: "active"},
          {id: 1, value: 'remove todo', status: "active"},
          {id: 2, value: 'count todo', status: "active"},
          {id: 3, value: 'add select mode (all, active, completed)', status: "active"},
          {id: 4, value: 'clear completed', status: "active"},
          {id: 5, value: 'desactive footer if empty todo list', status: "active"}
        ]
      }
    }
  

  addTodo(todoList, todo){
    let idList = Object.keys(todoList).map((id) => parseInt(id))
    let newId = idList[idList["length"]-1] + 1
    this.setState({
      todoList: {...todoList, [newId]: {value: todo, status: "active"}}
    })
  }

  removeTodo(todoList, id){
    // remove id from todoList id
    let newIdList = Object.keys(todoList).filter((value, index, array) => {return value !== id})
    console.log(newIdList)

    const [list, setList] = React.useState(todoList)
    console.log(list)
    // setList(
    //   list.map(item => {
    //     if (item.id == id) {
    //       return { ...item, complete: !item.complete };
    //     } else {
    //       return item;
    //     }
    //   })
      // )
  }


  render(){
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <Todo todoList={this.state.todoList} addTodo={this.addTodo.bind(this)}/>
        </header>
        <section className="main">
          <TodoList todoList={this.state.todoList} handleDelete={this.removeTodo.bind(this)}/>
        </section>
      </section>
    )
  }
}

export default App;


