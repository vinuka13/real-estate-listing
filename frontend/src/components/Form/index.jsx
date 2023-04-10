import React, { Component } from 'react';
import  Joi  from 'joi-browser';
import Input from '../input/input';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import './form.css'

class Form extends Component {
    state = { 
       submit:{ Name: '', Email: '', sent: false }
     } 

     schema = {
        Name: Joi.string().required(),
        Email: Joi.string().required().email(),
        sent: Joi.boolean()
    }

    handleErrors() {
        const result = Joi.validate(this.state.submit, this.schema)

        let errors = {}
        if(!result.error){
            return null
        } else {
            errors[result.error.details[0].path[0]] = result.error.details[0].message
            return errors   
        }
    }

    handleChange = event => {
        let { submit } = this.state

        submit[event.currentTarget.name] = event.currentTarget.value
        this.setState({submit: submit})
    }

    handleClick = event => {
        let {submit} = this.state

        event.preventDefault()
        this.state.submit.sent = true
        this.setState({submit: submit})
    }

    doSubmit = event => {
        event.preventDefault()
        console.log(this.state.data);
        try {
            emailjs.sendForm(
                "service_26xqx6i",
                "template_e13gw3i",
                event.target,
                "jnkWKWDTho2_Z9tB4"
            )

            toast.success('Form submitted')
            setTimeout(() => {
                window.location.reload();
            }, 7000);
            
        } catch (error) {
            toast.error('Something went wrong')
            console.log(error);
        }
     }

    render() { 
        return (
            <div className='submit'>
            <ToastContainer />
                <form onSubmit={this.doSubmit}>
                    <Input 
                        name="Name" 
                        type='text'
                        onHandleState={this.handleChange}
                        value={this.state.submit.Name}
                    />
                    <Input 
                        name="Email" 
                        type='text'
                        onHandleState={this.handleChange}
                        value={this.state.submit.Email}
                    />
                    <label htmlFor='message' >message</label> <br />
                    <textarea type="text" name="message" cols='80' rows='10' style={{width: '100%'}} /><br /><br />
                    <input disabled={this.handleErrors()}  type="submit" value="Send" style={{width: '80px'}} className='btn' />
                    {this.state.submit.sent === true ? <h3>Message sent</h3> : null}
                </form>
            </div>
        );
    }
}
 
export default Form;