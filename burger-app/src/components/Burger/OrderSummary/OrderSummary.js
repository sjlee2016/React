import React from 'react'
import Aux from '../../../hoc/Aux'
const OrderStateless = (props) => {
    const ingredientSummary = Object.keys(props.ingradients).map(key => {
        return <li><span style={{textTransform: 'capitalize'}}> {key} 
        </span> 
        : {props.ingradients[key]} 
        </li>
    })

    return (
        <Aux>
            <h3> Your order </h3>
            <p> A delicious burger with the following ingradients: </p>
            <ul>
                {ingredientSummary} 
            </ul>
            <p> Total Price : {props.totalPrice} </p>
            <p> Continue to Checkout? </p> 
        </Aux>
    )
};
export default OrderStateless