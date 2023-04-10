import React, { Component } from 'react';
import axios from 'axios';
import Gallery from '../../components/Gallery';
import './details.css'
import Form from '../../components/Form';

class Details extends Component {
    state = { 
        data: { },
        submit: {Name: '', Email: '' }
     } 

    async componentDidMount(){
        let data = await axios.get('/admin/movies')
        let lands = [...data.data]
        let land = lands.find(l => l._id === this.props.match.params.id)
        this.setState({data: land})
        console.log(this.state.data);
    }


    render() { 
        return (
            <div className='land-details'>          
            <div className='gallery'>
                <h1>{this.state.data.name}</h1>
                <Gallery 
                    id={this.state.data._id}
                />
            </div>
            <div className='land-info'>
                <div className='action'>
                <div className='call'>
                <div>
                <img  src='\assets\icons\phone-solid.svg' width='100%'/>
                </div>
                <div>
                    <h3>Call now <br></br> 0777804939 </h3>
                </div>
                  
                </div>
                <div className='location'>
                <div>
                <img  src='\assets\icons\location-dot-solid.svg' width='100%'/>
                </div>
                <div>
                    <h3>Loactaion <br></br> {this.state.data.place} </h3>
                </div>
                </div>
                </div>
            </div>
            <div className='land-all'>
                <div className='land-view'>
                    <div className='land-discription'>
                    <p>{this.state.data.discription} </p>
                    </div>
                 <div className='land-price'>
                    <h3>Price</h3>
                    <h3>{this.state.data.price} LKR </h3>
                    <p>per perch upwords </p> <br />
                    <h3>Blocks</h3>
                    <h3>{this.state.data.blocks} </h3>
                 </div>   
                </div>
                <div className='form'>
                <h1>INQUIRE NOW</h1> <br />
                    <Form />
                </div>
                </div>
            </div>
        );
    }
}
 
export default Details;