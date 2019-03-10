import React from 'react';
import Radium, {StyleRoot} from 'radium'; 

const User = (props) => {
    const style = {
        '@media(min-width:500px)': {
            width: '450px'
        }
    }
    return (
        <StyleRoot>
        <div className="User">
        <p style={style}> Email : {props.email} </p>
        <p> Password: {props.password} </p> 
        <p> {props.children} </p>
        <input type="text" onChange={props.changed}/> 
        <button onClick={props.click}> click to delete me </button>
        </div>
        </StyleRoot> 
    )
}

export default Radium(User);  