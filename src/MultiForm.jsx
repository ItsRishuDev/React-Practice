import React from 'react'
import { useState } from 'react/cjs/react.development';
import './form.css'

const MultiForm = () =>{
    let [currentValue, changeValue] = useState({
        fName : '',
        lName : '',
        email : '',
        contact : ''
    });

    const updateValue = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        // Aam Zindagi
        // if (name === 'fname') {
        //     changeValue({
        //         fName : value,
        //         lName : currentValue.lName,
        //         email : currentValue.email
        //     })
        // }
        // else if(name === 'lname'){
        //     changeValue({
        //         fName : currentValue.fName,
        //         lName : value,
        //         email : currentValue.email
        //     })
        // }
        // else if(name === 'email'){
        //     changeValue({
        //         fName : currentValue.fName,
        //         lName : currentValue.lName,
        //         email : value
        //     })
        // }


        // Mentos Zindagi 
        changeValue((preVal)=>{
            return {
                ...preVal,
                [name] : value,
            };
        });
    }

    const finalValue = (e) =>{
        e.preventDefault()
        alert(`Successfully Submitted. We get your value as ${currentValue.email}`)
    }

    return(
        <>
            <div>
                <form onSubmit = {finalValue}>
                    <h1>Welcome {currentValue.fName} {currentValue.lName}</h1>
                    <p>{currentValue.email}</p>
                    <p>{currentValue.contact}</p>
                    <input type='text' name='fName' placeholder='ENTER YOUR FIRST NAME' value={currentValue.fName} onChange={updateValue} />
                    <input type='text' name='lName' placeholder='ENTER YOUR LAST NAME' value={currentValue.lName} onChange={updateValue} />
                    <input type='email' name='email' placeholder='ENTER YOUR EMAIL' onChange={updateValue} />
                    <input type='number' name='contact' placeholder='ENTER YOUR CONTACT NUMBER' onChange={updateValue} />
                    <button type='submit'>{'Submit ✌'}</button>
                </form>
            </div>
        </>
    );
}

export default MultiForm