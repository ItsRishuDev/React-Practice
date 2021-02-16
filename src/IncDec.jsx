import React from 'react'
import { useState } from 'react/cjs/react.development';

const IncDec = () =>{

    let [value, action] =useState(0);

    const increaseValue = () =>{
        action(value+1)
    }

    const decreaseValue = () =>{
        action((currentValue)=>{
            if (currentValue !== 0) {
                return value-1
            }
            else{
                alert('Unable to decrease the value')
                return value
            }
        })
    }

    return(
        <>
            <h1>{value}</h1>
            <button onClick={increaseValue}>Increase</button>
            <button onClick={decreaseValue}>Decrease</button>
        </>
    );
}

export default IncDec