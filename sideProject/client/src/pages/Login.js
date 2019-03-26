import React, {Component} from 'react';

import Button from '../components/Button/Button';
import Input from '../components/Inputs/Input';
import  { Redirect } from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props)
        this.state= {
            username: null,
            password : null,
            allFilled: false 
        };
    }

    handleUsernameChange = (event) => {
        var prevState = {... this.state}; 
        prevState.username = event.target.value;
        this.setState({
            username : prevState.username
        })

        this.checkIfSatisified(prevState)
    }

    checkIfSatisified = (state) => {
      if(state.username != null && state.username.length > 0 && state.password != null && state.password.length > 0){
        this.setState({allFilled:true})
      }else 
      {

        this.setState({allFilled:false})
      }
    }

    handlePasswordChange = (event) => {
        
        var prevState = {... this.state}; 
        prevState.password = event.target.value;
         
        this.setState({
            password : prevState.password
        })

        this.checkIfSatisified(prevState)
    }

    sendData =  async e => {
        e.preventDefault();
        fetch('/api/login',
         {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({    username: this.state.username, 
                                    password:this.state.password
          }
        )

        })
        .then(res => res.json())
        .then(
            (data) => {
                console.log(data);
            }
        )
    };

    render(){
        return <div>
        Login
        <form> 
            <Input label="username" labelName="username" type="text" value="username" change={this.handleUsernameChange} /> 
            <Input label="password" labelName="password" type="password" value="password" change={this.handlePasswordChange}  /> 
        </form>
        <Button name="Login" click={this.sendData} active={this.state.allFilled} /> 
        </div>
    }
}

export default Login; 