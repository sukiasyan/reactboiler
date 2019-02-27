import React from "react";
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import "./styles/style.scss";
import Header from './components/header'
import Main from './components/main'


const App = () => {
  return (
      <div>
        <hr/>
        <Header />
        <Main />
        <AddTodo />
    <VisibleTodoList />
    <Footer />
    </div>
  );
};
export default App;
