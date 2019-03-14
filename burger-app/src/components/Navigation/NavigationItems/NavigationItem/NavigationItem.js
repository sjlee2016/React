import React from 'react'
import styles from './NavigationItem.css'
const navigationItem = (props) => {
    return(
        <div className={styles.NavigationItem}>
        <a href={props.link} className={props.active? styles.active : null }>
        {props.children}
        </a>
        </div>
    )
};
export default navigationItem