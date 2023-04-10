import React, { Component } from 'react';
import  Joi  from 'joi-browser';
import Input from '../../components/input/input';
import './contactUs.css'
import Form from './../../components/Form/index';

export class ContactUs extends Component {
    
    render() { 
        return (
            <div className='contact'>
                <div className='topDiv'>
                <h1 style={{fontSize:"2.5rem", paddingTop: "30px", paddingBottom: '20px', textAlign: "left"}}>Contact us</h1>
                <h2>For inquiries about availability of properties, consultancy or property development, contact :</h2>
                </div>
                <div className='details'>
                    <div>
                        <Form />
                    </div>
                    <div className='info'>
                        <h1>Address</h1>
                        <h3>No 74 <br />
                            bodhiyangana mw, <br />
                            Kandy.</h3>
                        <h1>Hotlines</h1>
                        <h3>0777804939 <br />
                            0713927484</h3>
                        <h1>Email</h1>
                        <h3>info@greatproperty.com</h3>
                        <div className='socials'>
                        <img 
                                className='fb-img'
                                src='/assets/icons/facebook.svg'
                            />
                        <img 
                            className='insta-img'
                            src='/assets/icons/instagram.svg'
                            style={{paddingLeft: '20px'}}
                        />
                        </div>
                    </div>
                            
                </div>
            </div>
        );
    }
}
 
export default ContactUs;