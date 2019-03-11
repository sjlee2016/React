import React from 'react';

import styles from './Cockpit.css'

const Cockpit = (props) => {
    const assignedClasses = [];
    if(props.showPersons) {
        
    }
    if(props.users.length<=2){
        assignedClasses.push(styles.red);
    }
    if(props.users.length<=1){
        assignedClasses.push(styles.bold);
    }

    return (
    <div className="Cockpit">
    <h1> hi i am react app </h1> 
    <p className={assignedClasses.join('')}> this is working </p>
    <button onClick={props.click}> Toggle </button> 
    {props.users}
    </div> );

}

export default Cockpit; 