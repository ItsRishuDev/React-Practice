import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Pokemon = () =>{
    const [num, setNum] = useState()
    const [name, setName] = useState()
    const [move, setMove] = useState()

    useEffect(()=>{
        async function pokemonData(){
            let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log('Pokemon is ', response);
            setName(response.data.name);
            setMove(response.data.moves.length);
        }
        pokemonData();
    })

    return(
        <>
            <h1>You clicked on {num}</h1>
            <h1>Pokemon You Selected is {name}</h1>
            <h1>Total moves of {name} is {move}</h1>
            {/* <h1>Number of Attack {response.data}</h1> */}
            <select value={num} onChange={((event)=>{
                setNum(event.target.value)
            })}>
                <option value= '1'>1</option>            
                <option value= '4'>4</option>            
                <option value= '7'>7</option>            
                <option value= '18'>18</option>            
                <option value= '25'>25</option>            
                <option value= '55'>55</option>            
            </select>
        </>
    );
}

export default Pokemon