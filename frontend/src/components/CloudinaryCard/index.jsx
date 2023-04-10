import React, { Component } from 'react';
import {Image} from 'cloudinary-react'
import './cloudinaryCard.css'

export default class CloudCard extends Component {
    state = {  } 

    render() { 
        return (
            <div>
                <div className='image_div'>
                    <Image 
                        className='cloudCard_img'
                        cloudName={this.props.cloudName}
                        publicId={this.props.pubId}
                        width="100%"
                        alt="land"
                    />
                    </div>
                    <div className="cloudCard__text">
                    {this.props.available === false ? <h2 style={{color: 'red'}}><center>Sold out!!</center></h2> : null}
                    <h2><i className="fa fa-map-marker" aria-hidden="true"></i>Location - {this.props.location}</h2>
                     <div><i className="fa fa-puzzle-piece" aria-hidden="true"></i>Total blocks - {this.props.blocks} <br/>
                     <i className="fa fa-usd" aria-hidden="true"></i>  Price - {this.props.price} <br />
                     <i className="fa fa-check" aria-hidden="true"></i>Available - {this.props.available === true ? 'True' : 'False'}
                    </div>
                    </div>
            </div>
        );
    }
}
 