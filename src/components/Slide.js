import React from 'react';
// import data from '../data'

const Slide =({props})=>{

    return(
        <div className="slide">
            <h1 data-testid="title">{props.title}</h1>
            <p data-testid="text">{props.text}</p>
        </div>
    )
}
export default Slide;
