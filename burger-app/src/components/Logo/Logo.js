import React from 'react'
import styles from './Logo.css'
import burgerLogo from '../../assets/burger-logo.png'
const logo = (props) => {
    return (
    <div className={styles.Logo}>
        <img src={burgerLogo} />
        </div>
    )
};
export default logo