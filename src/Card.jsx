import React from 'react'
import './card.css'

function Card(props){
    return (<>
            <div className="card">
                <img src={props.sImg} className="card__img" alt="..."/>
                <div className="card__info">
                    <span className="card__category">{props.sTitle}</span>
                    <h3 className="card__title">{props.sName}</h3>
                    <a href={props.sURL} target="_blank" rel="noreferrer">
                       <button>Watch Now</button>
                    </a>
                </div>
            </div> 
        </>
    );
}

export default Card