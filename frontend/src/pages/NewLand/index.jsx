import React, { Component } from 'react'
import  Joi  from 'joi-browser';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import jwtDecode from 'jwt-decode'
import Input from '../../components/input/input';
import './NewLand.css'

class NewLand extends Component {
    componentDidMount() {
        
        if(localStorage.getItem('token')){
            const jwt = localStorage.getItem('token')
            if(jwtDecode(jwt).name === 'admin'){
                console.log('access granted');
            } else {
                this.props.history.push('/login')
            }
        } else {
            this.props.history.push('/login')
        }
    }

    fileArray = []

    state = { 
        data: {Name: '',
        Place: '',
        Blocks: '',
        Price: '',
        Discription: '',
        Available: false,
        Image: '',
        Images: [] }
     } 

     schema = {
        Name: Joi.string().required(),
        Place: Joi.string().required(),
        Blocks: Joi.number().required(),
        Price: Joi.number().required(),
        Discription: Joi.string().required(),
        Available: Joi.boolean(),
        Image: Joi.string().required(),
        Images: Joi.array().items(Joi.string()).required()
        
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

    handleImage = event => {
        let {data} = this.state
        let ImageResult = ''
        const file = event.currentTarget.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            ImageResult = reader.result
        }
        setTimeout(() => {
            data.Image = ImageResult
            this.setState({data: data})
        }, 1000);
    }

    handleImages = event => {
        let {data} = this.state
        const files = event.currentTarget.files
        for(var i=0; i<files.length; i++){
            this.pushImages(files[i])
        }
        setTimeout(() => {
            data.Images = this.fileArray
            this.setState({data: data})
        }, 1000);
    }
    
    pushImages = files => {
        const reader = new FileReader()
        reader.readAsDataURL(files)
        reader.onload = () => {
            this.fileArray.push(reader.result);
        }
    }

    doSubmit= (event) => {
        event.preventDefault()
        console.log(this.state.data);
        try {
            this.saveItem(this.state.data)
            toast.success('New item added')
            setTimeout(() => {
                this.props.history.replace('/admin')
            }, 6000);
            
        } catch (error) {
            toast.error('Something went wrong')
            console.log(error);
        }
    }

    saveItem = async (object) => {
        console.log(object);
        await axios.post('/admin/new', object)
    }

    render() { 
        return (
            <div className='new-land'>
            <ToastContainer />
                <h1>New land</h1>
                <div className='form'>
                <form onSubmit={this.doSubmit}>
                    <Input 
                        name='Name'
                        type='text'
                        onHandleState={this.handleChange}
                        value={this.state.data.Name}
                    />
                    <Input 
                        name='Place'
                        type='text'
                        onHandleState={this.handleChange}
                        value={this.state.data.Place}
                    />
                    <Input 
                        name='Blocks'
                        type='number'
                        onHandleState={this.handleChange}
                        value={this.state.data.Blocks}
                    />
                    <Input 
                        name='Price'
                        type='number'
                        onHandleState={this.handleChange}
                        value={this.state.data.Price}
                    />
                    <label htmlFor='Discription' >Discription</label> <br />
                    <textarea type="text" name="Discription" value={this.state.data.Discription} onChange={this.handleChange} cols='80' rows='10' style={{width: '100%'}} /><br /> <br />
                    <label htmlFor="Available"> Available</label>  <br />
                    <input type="checkbox" name="Available" onClick={this.handleCheck} value={this.state.data.Available} style={{width: '50px', }}></input><br />
                    <label htmlFor='Image'>Display Image</label> <br />
                    <input type='file' name='Image' onChange={this.handleImage}></input>
                    {this.state.data.Image && (
                        <img src={this.state.data.Image} alt='Preview image' style={{height: '300px'}} />
                    )} <br />
                    <label htmlFor='Images'>Preview images</label>
                    <input type='file' name='Images' onChange={this.handleImages} multiple></input>
                    {(this.state.data.Images|| []).map((url, index) => (
                        <img key={index} src={url} alt="..." style={{height: '300px'}} />
                    ))}<br />
                    <button disabled={this.handleErrors()} type='submit' className='btn' style={{width: '100px'}}>Submit</button>
                </form>
                </div>
            </div>
        );
    }
}
 
export default NewLand;