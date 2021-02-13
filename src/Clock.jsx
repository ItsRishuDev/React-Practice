import React, { useState } from 'react'
import './count.css'

const Clock = () =>{
    let time = new Date().toLocaleTimeString();

    let [currentTime, setTime] = useState(time)

    const UpdateTime = () =>{
        time = new Date().toLocaleTimeString();
        setTime(time)
    }

    setInterval(UpdateTime, 1000)

    return(
        <>
            <div>
                <h1>{currentTime}</h1>
            </div>
        </>
    );
}

export default Clock