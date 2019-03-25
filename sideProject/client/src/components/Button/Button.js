import React from 'react'
const Button = (props) => {
    return (<button onClick={props.click} disabled={!props.active} > {props.name} </button> )

};
export default Button;