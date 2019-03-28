import React, {Component} from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Inputs/Input';
import NumberInput from '../components/Inputs/NumberInput'; 
import SelectInput from '../components/Inputs/SelectInput';
import  { Redirect } from 'react-router-dom'

class CreatePost extends Component {
    constructor(props){
        super(props)
        this.state= {
          allFilled:false
        };
    }

    sendData = () => {

    }
    render(){
        return <div>
            Post
            <form> 
                <Input label="title" labelName="title" type="text" value="title"  /> 
                <Input label="sub_title" labelName="sub_title" type="text" value="sub_title" change={this.handleEmailChange} /> 
                <Input label="content" labelName="content" type="text" value="content" change={this.handlePasswordChange}  /> 


            </form>
            <Button name="Post" click={this.sendData} active={this.state.allFilled} /> 
            </div>
    }
}

export default CreatePost; 
