import React, { useState } from 'react'
import './form.css'

const Form = () =>{
    
    let [firstValue, updateFirstValue] = useState();
    let [lastValue, updateLastValue] = useState();
    
    let [firstName, updateFirstName] = useState();
    let [lastName, updateLastName] = useState();

    const changeFirstValue = (event) =>{
        let newVal = event.target.value
        updateFirstValue(newVal)
        console.log(newVal);
    }

    const changeLastValue = (event) =>{
        let newVal = event.target.value
        updateLastValue(newVal)
        console.log(newVal);
    }

    const showValue = (e) =>{
        e.preventDefault();
        updateFirstName(firstValue)
        updateLastName(lastValue)
    }

    return(
        <>
        <form onSubmit={showValue}>
            <div>
                <h1>Hello {firstName} {lastName}</h1>
                <input type='text' placeholder='ENTER YOUR FIRST NAME' onChange={changeFirstValue}/>
                <input type='text' placeholder='ENTER YOUR LAST NAME' onChange={changeLastValue}/>
                <button type='submit'>{'Submit 👍'}</button>
            </div>
        </form>
        </>
    );
}

export default Form