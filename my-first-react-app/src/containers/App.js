import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Users from '../components/Users/Users'
import Cockpit from '../components/Cockpit'
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
          <Users 
            users={this.state.users}
            delete={this.userIdChangedHandler}
            changed={this.deleteUserHandler} > 
           </Users>
      );
    }
    
    return (
      <div className={classes.App}>
        <Cockpit showUsers={this.state.showUser} users=  {this.state.users}
        click={this.toggleUsersHandler}
        />
      
      </div> 
    );
  }
}

export default App;
