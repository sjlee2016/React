import React, {Component} from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Inputs/Input';
import NumberInput from '../components/Inputs/NumberInput'; 
import SelectInput from '../components/Inputs/SelectInput';
import  { Redirect } from 'react-router-dom'

class Register extends Component {
    constructor(props){
        super(props)
        this.state= {
            username: null,
            email : null,
            password : null,
            schoolYear : null,
            major : "Computer Science",
            allFilled : false,
            emailIsRightFormat: false,
            passwordIsRightFormat: false,
            usernameIsNotTaken : false,
            schoolYearIsRightForMat: false,
            loginSuccessful: false, 
            emailAlreadyRegistered: false,
            usernameAlreadyRegistered: false
        };
    }

    redirect = () => {
        if(this.state.loginSuccessful) { 
            return (<Redirect to='/login'  />);
        }
    }
    isNotEmpty = (str) => {
        return str!== null && str.length !== 0 
    }
    checkIfSatisified = (state) => {
    //     if(this.isNotEmpty(state.password)&&this.isNotEmpty(state.username)&& this.isNotEmpty(state.email) &&
    // this.isNotEmpty(state.schoolYear) && this.isNotEmpty(state.major) && state.emailIsRightFormat && state.usernameIsNotTaken && state.schoolYearIsRightForMat){
    //         this.setState({allFilled: true});
    //     }else {
    //         this.setState({allFilled: false});
    //     }

    this.setState({allFilled:true})
    }
    
    handleUsernameChange = (event) => {
       
        var prevState = {... this.state}; 
        var username = event.target.value;
        prevState.username = username; 
        var numOfLetters = username.replace(/[^a-zA-Z]/g, '').length;
        if(prevState.username.length > 3 && numOfLetters >= 3 ) {
            prevState.usernameIsNotTaken = true;
        }else{
            prevState.usernameIsNotTaken = false;
        }     
        this.setState({
            username : prevState.username,
            usernameIsNotTaken : prevState.usernameIsNotTaken
        })

        this.checkIfSatisified(prevState)
    }

    handleEmailChange = (event) => {
       
        var prevState = {... this.state}; 
        prevState.email = event.target.value;
        var domain = prevState.email.replace(/.*@/, "");

        if(domain != "sogang.ac.kr"){
            prevState.emailIsRightFormat =  false
            
        }else {
            prevState.emailIsRightFormat =  true
           
        }

        this.setState({
            email : event.target.value,
            emailIsRightFormat : prevState.emailIsRightFormat
        })


        this.checkIfSatisified(prevState)
    
   
    }

    handlePasswordChange = (event) => {
        
        var prevState = {... this.state}; 
        prevState.password = event.target.value;
        if(prevState.password.length < 8 ) {
            prevState.passwordIsRightFormat = false;
        }else{
            prevState.passwordIsRightFormat = true;
        }     
        this.setState({
            password : prevState.username,
            passwordIsRightFormat : prevState.usernameIsNotTaken
        })

        this.checkIfSatisified(prevState)
    }

    handleMajorChange = (event) => {
         
        var prevState = {... this.state}; 
        prevState.major = event.target.value;
        this.setState({
            major : event.target.value
        })

        this.checkIfSatisified(prevState)
   
    }
    handleSchoolYearChange = (event) => {
          
        var prevState = {... this.state}; 
        prevState.schoolYear = event.target.value;
        if(prevState.schoolYear >= 1964 && prevState.schoolYear <= 2019) {
            prevState.schoolYearIsRightForMat = true;
        }else
        {
            prevState.schoolYearIsRightForMat = false;
        }

        this.setState({
            schoolYear : event.target.value,
            schoolYearIsRightForMat : prevState.schoolYearIsRightForMat
        })

        this.checkIfSatisified(prevState)
    }



    sendData =  async e => {
            e.preventDefault();
            fetch('/api/register',
             {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({    username: this.state.username, 
                                        email: this.state.email,
                                        password:this.state.password,
                                        schoolYear: this.state.schoolYear,
                                        major: this.state.major }),
            })
            .then(res => res.json())
            .then(
                (data) => {
                    if(data.result == "successful"){
                       this.setState({loginSuccessful : true}); 
                    }else if (data.result == "unsuccesful")
                    {
                        this.setState({
                        usernameAlreadyRegistered: true }); 

                    }else if(data.result == "email already registered")
                    {
                        this.setState({
                        emailAlreadyRegistered: true }); 
                    }
                }
            )
        };
    
    render(){
        return <div>
            Register
            {this.redirect()}
            <form> 
                <Input label="username" labelName="username" type="text" value="username" change={this.handleUsernameChange} displayWarning={!this.state.usernameIsNotTaken} warning={"Username should contain more than 3 alphabet letters and is longer than 8 characters"} /> 
                <Input label="email" labelName="email" type="text" value="email" change={this.handleEmailChange} displayWarning={!this.state.emailIsRightFormat} warning={"Plese use your sogang email"} /> 
                <Input label="password" labelName="password" type="password" value="password" change={this.handlePasswordChange} displayWarning={!this.state.passwordIsRightFormat} warning={"Your password should be longer than 8 characters"} /> 
                <NumberInput label="schoolYear" labelName="schoolYear" value="schoolYear" change={this.handleSchoolYearChange} displayWarning={!this.state.schoolYearIsRightForMat} warning={"Your school year should be between  1964 and 2019"} /> 
                <SelectInput label="major" labelName="major" data={["Computer Science", "Math", "English"]} change={this.handleMajorChange} /> 


            </form>
            <Button name="Register" click={this.sendData} active={this.state.allFilled} /> 
            </div>
    }
}

export default Register; 
