import React from 'react'
import styles from './Modal.css'
import Aux from '../../hoc/Aux'
const Modal = (props) => {
    return (
        <Aux>
            {props.show ?
            <div className={styles.Modal}>
            {props.children}
            </div>:null}
        </Aux>
    )
};
export default Modal