import React from 'react'
import './index.css';

function Greeting(){   
    const time = new Date()
    let currentTime = time.getHours();
    console.log(currentTime);

    let greeting;
    let greetingColor;

    if (4 <= currentTime && currentTime < 12) {
        greeting = ' Good Morning!';
        greetingColor = {
        color:'orange'
        }
    }

    else if (12 <= currentTime && currentTime < 16) {
        greeting = ' Good Afternoon!';
        greetingColor = {
        color:'#ffff00'
        }
    }

    else if (16<= currentTime && currentTime < 20) {
        greeting = ' Good Evening!';
        greetingColor = {
        color:'red'
        }
    }

    else {
        greeting = ' Good Night!';
        greetingColor = {
        color:'white'
        }
    }

    return (<>
            <div className='greeting'>
            <h1 className='heading'>Hello Sir,   
            <span style={greetingColor}>{greeting}</span>
            </h1>
            </div>
            </>
    );
}

export default Greeting