import React, { Component } from "react";
import Heading from "../../components/Heading/index";
import CloudCard from "../../components/CloudinaryCard";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Projects.css";

class Projects extends Component {
  state = {
      data: []
  }

  async componentDidMount() {
    const data = await axios.get('/lands')
    const lands = [...data.data]
    const slice = lands.slice(lands.length - 3, lands.length )
    console.log(slice);
    this.setState({data: slice})
  }

  render() {
    return (
      <div className="projects" id="projects">
        <Heading heading="LATEST PROJECTS   " />
        <p className="projects__subHeading">
        Search our selection of land plots for sale in Sri Lanka. Our fast-growing 
        portfolio of properties brings you closer to your ideal home. Every project is
        monitored and handled by detail-oriented team members committed to serving our customers with the 
        highest possible service to guarantee you find the land best suit for you.
        <br />
        </p>
        <div className="projects__cardContainer">
        {this.state.data.map(post => (
                <div key={post._id} className='card lands__card'>
                    <CloudCard 
                        cloudName='dvi0clo0p'
                        pubId={post.mainImg}
                        available={post.available}
                        location={post.place}
                        blocks={post.blocks}
                        price={post.price}
                    />
                </div>

            ))
            }
        </div>
      </div>
    );
  }
}

export default Projects;