import React from 'react'

const User = (props) => {
    return (
        <div className="User">
        <p> ID : {props.id} </p> 
        <p> Password: {props.password} </p> 
        <p> {props.children} </p>
        <input type="text" onChange={props.change}/> 
        </div>
    )
}

export default User 