import React from 'react'
import Aux from '../Aux'; 
const SelectInput = (props) => {

    const optionUI = (data ) =>{ 
        return ( 
            data.map(function(opt) {
                return <option value={opt}> {opt} </option>
            })
        )
    };
    
    
    return (
    <Aux>
    <label for={props.label}> {props.labelName} </label>
    <select id={props.label}  onChange={props.change} >
    {optionUI(props.data)}
    </select>
    </Aux>
    ); 
};

export default SelectInput;