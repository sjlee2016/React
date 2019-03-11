import React from 'react';
import styles from './User.css'; 
const User = (props) => {
    const style = {
        '@media(min-width:500px)': {
            width: '450px'
        }
    }
    return (
        <div className="User">
        <p style={styles['User']}> Email : {props.email} </p>
        <p> Password: {props.password} </p> 
        <p> {props.children} </p>
        <input type="text" onChange={props.changed}/> 
        <button onClick={props.click}> click to delete me </button>
        </div>
    )
}

export default User;  