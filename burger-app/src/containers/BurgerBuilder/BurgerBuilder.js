import React, {Component} from 'react';
import Aux from '../../hoc/Aux'; 
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
const INGRADIENT_PRICES = {
    salad : 0.5,
    bacon: 0.4,
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
        purchasable: false, 
        totalPrice: 4
    }

    updatePurchasable = (ingradients) => {
        const sum = Object.keys(ingradients)
        .map(index => {
            return ingradients[index];
        })
        .reduce((sum, element) => {
            return sum + element;
        },0)
        this.setState({purchasable: sum > 0});
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
        this.updatePurchasable(updatedIngradients);
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
        this.updatePurchasable(updatedIngradients);
    }
    render(){
        return (
            <Aux>
                <div>
                    <Burger ingradients={this.state.ingradients}/> 
                    <BuildControls ingradientsAdded={this.addIngradientHandler} ingradientsRemoved={this.removeIngradientHandler} totalPrice={this.state.totalPrice.toFixed(2)} purchasable={this.state.purchasable} />
                </div>
            </Aux>
        );
    }
}

export default BurgerBuilder;