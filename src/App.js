import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import TodoApp from './TodoApp';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <TodoApp view="all" />}></Route>
          <Route path="/active" component={() => <TodoApp view="active" />}></Route>
          <Route path="/completed" component={() => <TodoApp view="completed" />}></Route>           
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;
