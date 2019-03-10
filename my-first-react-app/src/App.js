import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import './User.css'; 
import User from './User.js'
class App extends Component {
   state = {
    users : 
    [
      {id:"headf", email:"yoyoyo", password:"password"},
      {id:"dafla", email:"test", password:"test"} 
    ],
    someOther: 'hello',
    showUser: false 
  }; 


  userIdChangedHandler = (event, id) => {
    const userIndex = this.state.users.findIndex(p=>{
      return p.id===id; 
    })
    const user = this.state.users[userIndex];
    user.email = event.target.value;
    
    const users = [...this.state.users];
    users[userIndex] = user; 
    this.setState(users);
  }


  deleteUserHandler = (userIndex) => {
    const users = this.state.users.slice() 
    users.splice(userIndex,1);
    this.setState({users:users})
  }

toggleUsersHandler = () => {
  const doesShow = this.state.showUser;
  this.setState({showUser : !doesShow})

}
  render() {
    let users = null; 
    if (this.state.showUser) {
      users = (
        <div> 
          {this.state.users.map((user, index) => {
            return <User
            email={user.email}
            password={user.password}  
            changed={(event)=> this.userIdChangedHandler(event,user.id)}
            click={() => this.deleteUserHandler(index)}
            key={user.key}
            />
          })}  
        </div>

      );
    }
    
    return (
      <div className="App">
      <h1> hi i am react app </h1> 
      <button onClick={this.toggleUsersHandler}> Toggle </button> 
      {users}
      </div> 
    );
  }
}

export default App;
