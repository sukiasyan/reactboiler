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
import Users from './components/fullRoaster'
import Contact from './components/contact'
import Home from './components/home'
import Menu from './components/main'
import Header from './components/header'
import Main from './components/main'


const App = () => {
  return (
      <div>
        <hr/>
        <Header />
        <Main />
    </div>
  );
};
export default App;
// ReactDOM.

// import React from 'react'
// import Header from './Header'
// import Main from './Main'

// const App = () => (
//   <div>
//     <Header />
//     <Main />
//   </div>
// )

// export default App
