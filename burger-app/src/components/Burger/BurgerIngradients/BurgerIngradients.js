import React, {Component} from 'react';
import PropTypes from 'prop-types'; 

import styles from './BurgerIngradient.css';
class BurgerIngradient extends Component {
    

    render(){
        let ingradient = null;

        switch(this.props.type){
        case('bread-bottom'): ingradient = <div className={styles.BreadBottom}> </div>; break;
        case('bread-top'):
        ingradient = <div className={styles.BreadTop}>
            <div className={styles.Seeds1}/> 
            <div className={styles.Seeds2}/>  
        </div>; break;
        case('meat'): ingradient = <div className={styles.Meat}> </div>;  break;
        case('bacon'): ingradient = <div className={styles.Bacon}> </div>; break;
        case('cheese'): ingradient = <div className={styles.Cheese}> </div>; break;
        case('salad'): ingradient = <div className={styles.Salad}> </div>; break;
        default:  ingradient = null; 
    }
    return ingradient;
    }
};

BurgerIngradient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngradient;