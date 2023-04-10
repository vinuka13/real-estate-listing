import React, { Component } from 'react';
import  Joi  from 'joi-browser';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../../components/input/input';
import './login.css'


class Login extends Component {
    state = { 
        data: {Username: '', Password: ''}
     } 

     schema = {
         Username: Joi.string().required(),
         Password: Joi.string().required()
     }

     handleErrors() {
        const result = Joi.validate(this.state.data, this.schema)

        let errors = {}
        if(!result.error){
            return null
        } else {
            errors[result.error.details[0].path[0]] = result.error.details[0].message
            // console.log(errors);
            return errors   
        }
    }

     handleChange = event => {
        let { data } = this.state

        data[event.currentTarget.name] = event.currentTarget.value
        this.setState({data: data})
    }

    doSubmit = async (event) => {
        event.preventDefault()
        console.log(this.state.data);
        try {
            const jwt = await axios.post('/submit', this.state.data)
            localStorage.setItem('token', jwt.data)
            this.props.history.replace('/admin')
        } catch (error) {
            toast.error('Username or password invalid')
            console.log(error);
        }
    }

    render() { 
        return (
            <div className='login'>
            <ToastContainer />
                <div className='center'>
                    <h1>Login</h1>
                    <form onSubmit={this.doSubmit}>
                        <Input 
                            name='Username'
                            type='text'
                            onHandleState={this.handleChange}
                            value={this.state.data.Username}
                        />
                        <Input 
                            name='Password'
                            type='password'
                            onHandleState={this.handleChange}
                            value={this.state.data.Password}
                        />
                        <button disabled={this.handleErrors()} style={{width: '100px'}} className='btn'>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Login;