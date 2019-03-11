import React, {Component} from 'react';
import Aux from '../../hoc/Aux'; 
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
const INGRADIENT_PRICES = {
    salad : 0.5,
    bacond: 0.4,
    cheese: 1.3,
    meat : 0.7
}
class BurgerBuilder extends Component {
    state = {
        ingradients : {
            salad : 0,
            bacon: 0,
            cheese: 0,
            meat : 0
        },

        totalPrice: 4
    }

    removeIngradientHandler = (type) => {
        const oldCount = this.state.ingradients[type];
        
        if (oldCount>0){
        
        const updatedCount = oldCount - 1;
        const updatedIngradients = {
            ...this.state.ingradients
        }
        const priceAddition = INGRADIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        updatedIngradients[type] = updatedCount;
        this.setState({totalPrice:newPrice, ingradients: updatedIngradients});
     }
    }
    addIngradientHandler = (type) => {
        const oldCount = this.state.ingradients[type];
        
        const updatedCount = oldCount + 1;
        const updatedIngradients = {
            ...this.state.ingradients
        }

        const priceAddition = INGRADIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        updatedIngradients[type] = updatedCount;
        this.setState({totalPrice:newPrice, ingradients: updatedIngradients});
    }
    render(){
        return (
            <Aux>
                <div>
                    <Burger ingradients={this.state.ingradients}/> 
                    <BuildControls ingradientsAdded={this.addIngradientHandler} ingradientsRemoved={this.removeIngradientHandler}/>
                </div>
                <div>
                    Build Controller 
                    </div>
            </Aux>
        );
    }
}

export default BurgerBuilder;