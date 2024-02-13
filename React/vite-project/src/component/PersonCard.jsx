import  { Component } from 'react';
import React, { useState } from 'react';


 const PersonCard = props => {

    const [count, setCount] = useState(props.age);

    const handleClick = () => {
            setCount(count + 1);
        }

        return(
        
            <div >
                <div >
                    <h1>{props.firstName} , {props.lastName}</h1>
                    <p>Age: {count}</p>
                    <p>Hair Color: {props.hairColor}</p>
                    
                    <button onClick={ handleClick }>birthday button for {props.firstName}</button>
                   
                </div>
                
            </div>)
    }


export default PersonCard;