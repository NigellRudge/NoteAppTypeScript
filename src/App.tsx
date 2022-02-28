import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import {useDispatch} from "react-redux";
import {fetchTodos} from "./data/actions";

function App() {
    const dispatch = useDispatch()
    const fetchData = ()=>{
        dispatch(fetchTodos())
    }
  return (
      <div className="App">
        <div className="container">
            <div className="header">
                <span className='title'>Awesome Todo List</span>
                <button className='fetch-button' onClick={()=>fetchData()}>Fetch todos</button>
            </div>
          <AddTodo />
          <TodoList/>
        </div>
      </div>
  );
}

export default App;
