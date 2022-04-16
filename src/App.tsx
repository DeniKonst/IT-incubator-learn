import React from 'react';
import './App.css';
import {TodoList} from "./TodoList";

function App() {
    const tasks = [
        {id: 1, title: 'JS', isDone: true},
        {id: 2, title: 'HTML/CSS', isDone: true},
        {id: 3, title: 'React', isDone: true}
    ]
    return (
        <div className="App">
           <TodoList task = {tasks}/>
        </div>
    );
}

export default App;
