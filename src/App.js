import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Context from "./context/context"
import SignUp from "./Components/signup/signup"
import SignIn from "./Components/signin/signin"
import HomePage from "./Components/home-page/home-page"

import './App.css';

function App() {
  return (
    <Router>
      <Context>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/signin" component={SignIn}/>
        </Switch>
      </Context>
    </Router>
  );
}

export default App;