import React from "react";
import { BrowserRouter as Router, Route, Link , Switch} from "react-router-dom";
import TodoApp from './TodoApp';


function Void() {
  return (
    <div>
      <h2>
        Void
      </h2>
    </div>
  )
}

class App extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/"><TodoApp /></Route>
          <Route path="/active"><Void /></Route>
          <Route path="/completed"><Void /></Route>           
        </Switch>
      </Router>
      
    )
  }
}
export default App;
