import React from 'react'
import Aux from '../Aux'
const NumberInput = (props) => {
    return (
        <Aux>
        <label for={props.label}> {props.labelName} </label>
        <input type="number" pattern="[0-9]*" onChange={props.change}/>
        </Aux>  
    )
};
export default NumberInput