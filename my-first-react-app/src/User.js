import React from 'react'


const User = (props) => {
    let classArr = [];

    if(props.email.length <= 5){
        classArr.push('bold'); 
    }
    if(props.email.length <= 1) {
        classArr.push('red');
    }
    return (
        <div className="User">
        <p style={classArr}> Email : {props.email} </p>
        <p> Password: {props.password} </p> 
        <p> {props.children} </p>
        <input type="text" onChange={props.changed}/> 
        <button onClick={props.click}> click to delete me </button>
        </div>
    )
}

export default User 