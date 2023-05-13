import React from 'react'
import './styles.css'

const App = () => {
  return (
    <div className='App'>
        <h2>To-Do App</h2>
        <input type="text" id='inputLabel' placeholder='Enter Task ...'></input>
        <button className='btn' onClick={addTaskToList}>Enter</button>
        <div id='taskList'>
            <h3>-- TASKS:</h3>
        </div>
    </div>
  )

  function addTaskToList() {
    let task = document.getElementById('inputLabel').value;
    const taskList = document.getElementById('taskList');
    if (task.length > 25) {
        console.log('Error: Cannot add - to many characters');
    } else {
        taskList.innerHTML += `<br>* ${task}`;
    }
  }
}

export default App