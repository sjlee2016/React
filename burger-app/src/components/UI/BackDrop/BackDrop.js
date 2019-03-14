import React from 'react'
import styles from './BackDrop.css'
const BackDrop = (props) => {
    return (
        props.show? <div className={styles.BackDrop} onClick={props.clicked}> </div>:null
    )
};
export default BackDrop;