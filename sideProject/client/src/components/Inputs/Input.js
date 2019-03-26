import React from 'react'
import Aux from '../Aux'
const Input = (props) => {
    var warningUI = null; 
    if(props.displayWarning == true) { 
        warningUI = <p> {props.warning} </p>
    }
    return (
        <Aux>
        <label for={props.label}> {props.labelName} </label>
        <input type={props.type} onChange={props.change}/>
        {warningUI}
        </Aux>  
    )
};
export default Input