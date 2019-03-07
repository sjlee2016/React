import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User.js'
class App extends Component {
   state = {
    users : 
    [
      {id:"sejin", password:"password"},
      {id:"test", password:"test"} 
    ],
    someOther: 'hello'
  }; 


  userIdChangedHandler = () => {
    this.setState({ 
      users: [
      {id:"hi", password:"password"},
      {id:"hello", password:"test"} 
   
    ] 
    }
    ); 
  }

  inputChangedHandler = (event) => {
    this.setState({ 
      users: [
      {id:"hi", password:"password"},
      {id:event.target.value, password:"test"} 
   
    ] 
    
  })
}

  render() {
    return (
      <div className="App">
      <User id={this.state.users[0].id} password={this.state.users[0].password}> Welcome </User>
      <User id={this.state.users[1].id} password={this.state.users[1].password} change={this.inputChangedHandler}> Welcome </User>
      <button onClick={this.userIdChangedHandler}> Click Me </button> 
      </div>
    );
  }
}

export default App;
