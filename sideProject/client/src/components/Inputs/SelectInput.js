import React from 'react'
import Aux from '../Aux'; 
const SelectInput = (props) => {
    var warningUI = null; 
    if(props.displayWarning == true) { 
        warningUI = <p> {props.warning} </p>
    }
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
    {warningUI}
    </select>
    </Aux>
    ); 
};

export default SelectInput;