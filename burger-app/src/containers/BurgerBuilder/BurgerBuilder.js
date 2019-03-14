import React, {Component} from 'react';
import Aux from '../../hoc/Aux'; 
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Modal from '../../components/UI/Modal';
import BackDrop from '../../components/UI/BackDrop/BackDrop';
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
        totalPrice: 4,
        checkout: false
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

    checkOutHandler = () => {
        this.setState({checkout : true})
        console.log("check out is " + this.state.checkout);
    }
    checkOutCancelHandler = () => {
        this.setState({checkout:false});

        console.log("check out is " + this.state.checkout);
    }

    checkoutDisplay = (state) => {
        if(state){
            return 
        } 
    }
    //<OrderSummary ingredients={this.state.ingradients}/> 
    
    render(){
        return (
            <Aux>
                <BackDrop show={this.state.checkout} clicked={this.checkOutCancelHandler}/>
                <Modal show={this.state.checkout}>
                     <OrderSummary ingradients={this.state.ingradients} totalPrice={this.state.totalPrice.toFixed(2)}/> 
                </Modal>
                
                
                    <Burger ingradients={this.state.ingradients}/> 
                    <BuildControls ingradientsAdded={this.addIngradientHandler} ingradientsRemoved={this.removeIngradientHandler} totalPrice={this.state.totalPrice.toFixed(2)} purchasable={this.state.purchasable} checkout={this.checkOutHandler} />
                
            </Aux>
        );
    }
}

export default BurgerBuilder;