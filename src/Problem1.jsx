import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development';

const Problem1 = () =>{
    let [num, setNum] = useState(0)
    useEffect(()=>{
        document.title = `You clicked ${num} times.`
    })
    return(
        <button onClick = {()=>{
            setNum(num+1)
        }}>
        Click me {num}</button>
    );
}

export default Problem1