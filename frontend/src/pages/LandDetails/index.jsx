import axios from 'axios';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Input from '../../components/input/input';
import './landDetails.css'

class LandDetails extends Component {
    state = { 
        data: { },
     } 

     async componentDidMount (){
        let data = await axios.get('/admin/movies')
        let lands = [...data.data]
        let land = lands.find(l => l._id === this.props.match.params.id)
        this.setState({data: land})
     }


     handleChange = event => {
         let {data} = this.state
         data[event.currentTarget.name] = event.currentTarget.value
        this.setState({data})
     }

     handleCheck = event => {
        const checked = event.currentTarget.checked
        let {data} = this.state

        if(checked) {
            data[event.currentTarget.name] = true
            this.setState({data: data})
        } else {
            data[event.currentTarget.name] = false
            this.setState({data: data})
        }
        
    }

    doSubmit= (event) => {
        event.preventDefault()
        try {
            this.update(this.state.data, this.state._id)
            toast.success('Land updated')
            setTimeout(() => {
                this.props.history.replace('/admin')
            }, 2000);
        } catch (error) {
            toast.error('Something went wrong')
        }
    }

    update = async (object, id) => {
        await axios.put(`/admin/update/${id}`, object)
    }

    render() { 
        return (
            <div className='landDetails'>
            <ToastContainer />
                <h1>Update {this.state.data.name} </h1> 
                <div className='form'>
                <form onSubmit={this.doSubmit}>
                    <Input 
                        name='name'
                        type='text'
                        value={this.state.data.name}
                        onHandleState={this.handleChange}
                    />
                    <Input 
                        name='place'
                        type='text'
                        value={this.state.data.place}
                        onHandleState={this.handleChange}
                    />
                    <Input 
                        name='price'
                        type='number'
                        value={this.state.data.price}
                        onHandleState={this.handleChange}
                    />
                    <Input 
                        name='blocks'
                        type='number'
                        value={this.state.data.blocks}
                        onHandleState={this.handleChange}
                    />
                    <label htmlFor='Discription' >Discription</label> <br />
                    <textarea type="text" name="discription" value={this.state.data.discription} onChange={this.handleChange} cols='80' rows='10' style={{width: '100%'}} /><br /> <br />
                    <label htmlFor="available"> Available</label>  <br />
                    <input type="checkbox" name="available" onClick={this.handleCheck} value={this.state.data.available} checked={this.state.data.available} style={{width: '50px', }}></input><br />
                    <button type='submit' className='btn' style={{width: '100px'}}>Submit</button>
                </form>
                </div>
            </div>            
        );
    }
}
 
export default LandDetails;