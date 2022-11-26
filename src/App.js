import React from "react";
import "./style/main.css"
import Task1 from "./tasks/task1";
import Task2 from "./tasks/task2";

function App() {
    return (
        <div className="App">
            <h1>Завдання 1</h1>
            <Task1/>
            <br/>
            <br/>
            <br/>
            <h1>Завдання 2</h1>
            <Task2/>
        </div>
    );
}

export default App;
