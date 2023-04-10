import React, { Component } from "react";
import  Joi  from "joi-browser";
import axios from "axios";
import "./Footer.css";
import Input from "../../components/input/input";

export default class Footer extends Component {

  state = {
    data: {Email: '', add: false }
  }

  schema = {
    Email: Joi.string().required(),
    add: Joi.boolean()
  }

  handleErrors() {
    const result = Joi.validate(this.state.data, this.schema)

    let errors = {}
    if(!result.error){
        return null
    } else {
        errors[result.error.details[0].path[0]] = result.error.details[0].message
        console.log(errors);
        return errors   
    }
}

handleChange = event => {
  let { data } = this.state

  data[event.currentTarget.name] = event.currentTarget.value
  this.setState({data: data})
}

doSubmit = async (event) => {
  const {data} = this.state
  event.preventDefault()
  this.state.data.add = true
  this.setState({data: data})
  await axios.post('/subscribe', this.state.data)
  console.log(this.state.data);
}

  render() {
    return (
      <div className="footer">
        <div className="footer__left">
          <ul>
            <a href="/lands">
              <li>LAND</li>
            </a>
            <a href="/our-Services">
              <li>OUR SERVICES</li>
            </a>
            <a href="/about-us">
              <li>ABOUT US</li>
            </a>
            <a href="/contact-us">
              <li>CONTACT US</li>
            </a>
          </ul>
        </div>
        <div className="footer__center">
          <h2>GP HOLDINGS</h2>
          <p>All right reserved 2021</p>
        </div>
        <div className="footer__right">
          {this.state.data.add === false ? <h3>Subscribe to our newsletter</h3> : <h3>Thank you for subscribing! </h3>}
          <form onSubmit={this.doSubmit}>
          <Input 
            name='Email'
            type='email'
            onHandleState={this.handleChange}
            value={this.state.data.Email}
          />
          <button disabled={this.handleErrors()} type='submit'>Subscribe</button>
          </form>
        </div>
      </div>
    );
  }
}
