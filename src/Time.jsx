import React, { useState } from 'react'
import './count.css'

const Time = () => {
    let parse;
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    (hour < 13) ? parse = 'AM' : parse = 'PM'; hour = hour - 12;
    (hour < 10) ? hour = '0'+hour : hour = hour; 
    (minute < 10) ? minute = '0'+minute : minute = minute;
    (second < 10) ? second = '0'+second : second = second; 
    let initialTime = hour + ' : ' + minute + ' : ' + second + ' ' + parse

    // OR instead of writing above code we can use 
    // time = new Date().toLocaleTimeString;
    let [currentTime, updateTime] = useState(initialTime);

    function IncCount(){
        console.log('clicked')
        time = new Date();
        hour = time.getHours();
        minute = time.getMinutes();
        second = time.getSeconds();
        (hour < 13) ? parse = 'AM' : parse = 'PM'; hour = hour - 12;
        (hour < 10) ? hour = '0'+hour : hour = hour; 
        (minute < 10) ? minute = '0'+minute : minute = minute;
        (second < 10) ? second = '0'+second : second = second; 
        currentTime = hour + ' : ' + minute + ' : ' + second + ' ' + parse
        updateTime(currentTime);
    }

    return (
        <>
        <div>
            <h1>{currentTime}</h1>
            <button onClick={IncCount}>Click Me</button>
        </div>
        </>
    );
}

export default Time;
