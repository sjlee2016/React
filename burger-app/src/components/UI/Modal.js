import React from 'react'
import styles from './Modal.css'
import Aux from '../../hoc/Aux'
import BackDrop from '../UI/BackDrop/BackDrop'
const Modal = (props) => {
    console.log("here it is" + props.show)
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