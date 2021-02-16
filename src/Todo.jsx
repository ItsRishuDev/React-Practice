import React, { useState } from 'react'
import './todo.css'
import TodoList from './TodoList'

const Todo = () =>{
    let [task, submitTask] = useState();
    let [taskList, addTask] = useState([]); 

    const performEntry = (event) =>{
        let newTask = event.target.value;
        submitTask(newTask);
    }

    const addEntry = () =>{
        addTask((priviousTask) =>{
            return [...priviousTask, task]
        })
        submitTask('')
    }

    const deleteItem = (id) =>{
        addTask((oldTask)=>{
            return oldTask.filter((item, index)=>{
                return index !== id
            })
        })
    }

    return(
        <>
            <div className = 'main_container'>
                <div className = 'app_container'>
                    <h1>Todo App</h1>
                    
                    <input type='text' placeholder='ENTER TASK HERE' value={task} onChange={performEntry}/>
                    <button onClick={addEntry}>+</button>
                    <br/>
                    <ol>
                        {taskList.map((value, index)=>{
                            return <TodoList 
                            key = {index} 
                            id = {index} 
                            value = {value}
                            onSelect = {deleteItem}
                            />;
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}

export default Todo