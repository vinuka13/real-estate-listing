import React, { Component } from 'react';
import './input.css'

class Input extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <label htmlFor={this.props.name}>{this.props.name}:</label> <br />
                <input type={this.props.type} name={this.props.name} value={this.props.value} onChange={this.props.onHandleState}></input> <br />
            </div>
        );
    }
}
 
export default Input;
 