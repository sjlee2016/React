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
    ]
  }

  userIdChangedHandler = () => {
    this.setState({ 
      users: [
      {id:"hi", password:"password"},
      {id:"hello", password:"test"} 
   
    ] 
    }
    ); 
  }
  render() {
    return (
      <div className="App">
      <User id={this.state.users[0].id} password={this.state.users[0].password}> Welcome </User>
      <User id={this.state.users[1].id} password={this.state.users[1].password}> Welcome </User>
      <button onClick={this.userIdChangedHandler}> Click Me </button> 
      </div>
    );
  }
}

export default App;
