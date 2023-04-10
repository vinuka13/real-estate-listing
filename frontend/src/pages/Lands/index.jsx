import React, { Component } from 'react'
import axios from 'axios'
import './lands.css'
import { Link } from 'react-router-dom';
import CloudCard from '../../components/CloudinaryCard';

class Lands extends Component {
    state = { 
        posts: []
     } 

    lands = []
    notLands = []

    async componentDidMount(){
        const data = await axios.get('/lands')
        this.sortAvailable(data.data)
        this.setState({posts: this.lands})
        // console.log(this.state.posts);
    }

    sortAvailable (lands){
        for (let i = 0; i < lands.length; i++) {
            const element = lands[i];
            if(element.available === true){
                this.lands.push(element)
            } else {
                this.notLands.push(element)
            }           
        }
        for (let i = 0; i < this.notLands.length; i++) {
            const element = this.notLands[i];
            this.lands.push(element)
            
        }
    }


    render() { 
        return (
            <div className='lands'>
            <div className='lands-hero'>
                <span></span>
                <img src='/assets/images/lands-hero.png'/>
                <article>
                    <h1>
                        Our Lands
                    </h1>
                </article>
            </div>

            <div className='lands__cardContainer'>
            {this.state.posts.map(post => (
                <div key={post._id} className='card lands__card'>
                <Link className='link' to={`/lands/details/${post._id}`}>
                    <CloudCard 
                        cloudName='dvi0clo0p'
                        pubId={post.mainImg}
                        available={post.available}
                        location={post.place}
                        blocks={post.blocks}
                        price={post.price}
                    />
                </Link>
                </div>

            ))
            }  
            </div>

            </div>
        );
    }
}
 
export default Lands;