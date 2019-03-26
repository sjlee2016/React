import React from 'react'
import Aux from '../Aux'
const NumberInput = (props) => {
    var warningUI = null; 
    if(props.displayWarning == true) { 
        warningUI = <p> {props.warning} </p>
    }
    return (
        <Aux>
        <label for={props.label}> {props.labelName} </label>
        <input type="number" pattern="[0-9]*" onChange={props.change}/>
        {warningUI}
        </Aux>  
    )
};
export default NumberInput