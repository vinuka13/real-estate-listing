import React, { Component } from 'react'
import axios from 'axios';

class Gallery extends Component {
    state = { 
        data: { }
     } 

    async componentDidMount() {
        let data = await axios.get('/admin/movies')
        let lands = [...data.data]
        setTimeout(() => {
            let land = lands.find(l => l._id === this.props.id)
            this.setState({data: land})

            const mywidge = window.cloudinary.galleryWidget({
                container: "#my-gallery",
                cloudName: 'dvi0clo0p',
                mediaAssets:[
                       {tag: this.state.data.name}
                 ],
                 zoom: false, 
                 transition: "fade",
                 carouselStyle: 'none',
                 aspectRatio: "8:5",
                 
            });
            mywidge.render()
       
        }, 1000);
      
            

    }

    render() { 
        return (
            <div id='my-gallery'></div>
            
        );
    }
}
 
export default Gallery;