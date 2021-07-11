import React from 'react';
import classes from  './Person.module.css';
// ES6
const person = (props) => {

    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
       
        <div className={classes.Person}>
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old</p>
             <input type="text" onChange={props.changed} value={props.name} />
       </div>
    );
   
}

export default person;