import React from 'react'
import Aux from '../Aux'
const Input = (props) => {
    return (
        <Aux>
        <label for={props.label}> {props.labelName} </label>
        <input type={props.type} onChange={props.change}/>
        </Aux>  
    )
};
export default Input