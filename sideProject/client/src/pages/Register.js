import React, {Component} from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Inputs/Input';
import NumberInput from '../components/Inputs/NumberInput'; 
import SelectInput from '../components/Inputs/SelectInput';
class Register extends Component {
    constructor(props){
        super(props)
        this.state= {
            username: null,
            email : null,
            password : null,
            schoolYear : 0,
            major : null,
            allFilled : false 
        };
    }

    handleUsernameChange = (event) => {
        
        this.setState({
            username: event.target.value
        })

        this.checkIfSatisified()
    }

    checkIfSatisified = () => {
        console.log(this.state);
        if(this.state.username != null && this.state.email != null && this.state.password != null &&
        this.state.major != null){
            console.log("button should be activated");
            this.setState({allFilled: true});
        }
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
        this.checkIfSatisified()
   
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
        this.checkIfSatisified()
   
    }

    handleMajorChange = (event) => {
        this.setState({
            major: event.target.value
        })

        this.checkIfSatisified()
   
    }
    handleSchoolYearChange = (event) => {
        this.setState({
            schoolYear: event.target.value
        })
        this.checkIfSatisified()
    }


    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
        this.checkIfSatisified()
   
    }
    sendData = () => {
        console.log(this.state);
        console.log("I am here");
    }
    render(){
        return <div>
            Register 
            <form> 
                <Input label="username" labelName="username" type="text" value="username" change={this.handleUsernameChange} /> 
                <Input label="email" labelName="email" type="text" value="email" change={this.handleEmailChange} /> 
                <Input label="password" labelName="password" type="password" value="password" change={this.handlePasswordChange} /> 
                <NumberInput label="schoolYear" labelName="schoolYear" value="schoolYear" change={this.handleSchoolYearChange}/> 
                <SelectInput label="major" labelName="major" data={["Computer Science", "Math", "English"]} change={this.handleMajorChange} /> 


            </form>
            <Button name="Register" click={this.sendData} active={this.state.allFilled} /> 
            </div>
    }
}

export default Register; 
