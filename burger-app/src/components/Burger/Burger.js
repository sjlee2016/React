import React from 'react';
import styles from './Burger.css'; 
import BurgerIngradient from './BurgerIngradients/BurgerIngradients';
const burger = (props) => {
    
    let transformedIngradients = Object.keys(props.ingradients)
    .map(ingradientKey=>{
        return [...Array(props.ingradients[ingradientKey])].map((_,index) => {
            return <BurgerIngradient key={ingradientKey + index} type={ingradientKey} /> 
        });
    }).reduce((arr,el ) => {
        return arr.concat(el);
    }, []); 

    if(transformedIngradients.length===0){
        transformedIngradients=<p> Please start adding ingradients </p>
    }
    return (
        <div className={styles.Burger}>
        <BurgerIngradient type="bread-top" />
        {transformedIngradients}
        <BurgerIngradient type="bread-bottom" />
        </div>
    );
}

export default burger;