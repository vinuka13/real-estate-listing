import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode'
import axios from 'axios';
import './admin.css'
import { toast, ToastContainer } from 'react-toastify';

class Admin extends Component {
    state = { 
        lands: [],
     } 

    async componentDidMount() {
        
        if(localStorage.getItem('token')){
            const jwt = localStorage.getItem('token')
            if(jwtDecode(jwt).name === 'admin'){
                const data = await axios.get('/admin/movies')
                this.setState({lands: data.data})
                console.log(this.state.lands);
            } else {
                this.props.history.push('/login')
            }
        } else {
            this.props.history.push('/login')
        }
    }

    handleDelete = (land) => {
        let lands = this.state.lands
        const newLands = this.state.lands.filter(i => i._id !== land._id)
        this.setState({lands: newLands})

        try {
            this.deleteItem(land)
            toast.success('Item deleted')
           } catch (error) {
             console.log(error);
             toast.error('Something went wrong')
           }
        
           this.setState({movies: lands})
    }

    deleteItem = async (item) => {
        console.log(item);
        await axios.post(`/admin/delete/${item._id}`)
    }

    logout (){
        localStorage.removeItem('token')
    }


    render() { 
        return (
            <div className='admin'>
            <ToastContainer />
                <div className='text'>
                <h1>You have {this.state.lands.length} items inthe database</h1>
                <Link to='/new-land' className='btn' style={{textDecoration: 'none', padding: '5px', marginTop: '10px'}}>Create new item</Link> <br /> <br />
                <Link to='/' className='btn' style={{textDecoration: 'none', padding: '5px'}} onClick={this.logout}>Logout</Link>
                </div>
                <div>
                    <table>
                    <thead>
                        <tr>
                            <th>Item ID</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Blocks</th>
                            <th>Price</th>
                            <th>Available</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.lands.map(item => (
                            <tr key={item._id}>
                                <td><Link to={`/lands/${item._id}`}> {item._id} </Link></td>
                                <td>{item.name} </td>
                                <td>{item.place} </td>
                                <td>{item.blocks} </td>
                                <td>{item.price} </td>
                                <td>{item.available === true ? 'True' : 'False'} </td>
                                <td><button onClick={() => this.handleDelete(item)} className='btn' style={{width: '75px', backgroundColor: 'red', border: 'none' }}>Delete</button> </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <h3><center>Made with ❤ by Vinuka!</center></h3>
            </div>
        );
    }
}
 
export default Admin;