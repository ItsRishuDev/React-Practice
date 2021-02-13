import React from 'react'

const Match = (props) =>{
    return (
        <>
            <h1>{`${props.x} ${props.y} ${props.z}`}</h1>
            <h1>This is Matching....</h1>
        </>
    ); 
}

const NotMatch = (props) =>{
    return (
        <>
            <h1>{`${props.x} ${props.y} ${props.z}`}</h1>
            <h1>This is not Matching....</h1>
        </>
    );
}

const SlotMachine = () =>{
    let x = 1;
    console.log(typeof(x));
    let y = 2;
    let z = 1;
    return (
    (x===y && y===z) ? <Match x = {x} y = {y} z = {z}/> : <NotMatch x = {x} y = {y} z = {z}/>
    );
}

export default SlotMachine;
