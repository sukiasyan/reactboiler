import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'
import "./styles/style.scss";
import Users from './components/users'
import Contact from './components/contact'
import Home from './components/home'

const App = () => {
  return (
    <Router>
        <div className="App">
            <div className="container">
                <ul>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/">Home</Link></li>
                </ul>
            <hr/>
            <Route exact path="/" component={Home} />  
            <Route exact path="/users" component={Users} />
            <Route exact path="/contact" component={Contact} />
            </div>
        </div>
  </Router>
  );
};
export default App;
// ReactDOM.render(<App />, document.getElementById("app"));