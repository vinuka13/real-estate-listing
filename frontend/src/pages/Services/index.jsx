import React, { Component } from 'react';
import SimpleSlider from '../../components/Slider';
import './services.css'
import CLIENTEXDATA from './../../data/ClientExData';

class Services extends Component {
    
    render() { 
        return (
            <div className='services'>
            <div className='services-hero'>
                <span></span>
                <img src='/assets/images/services-hero.jpg'/>
                <article>
                    <h1>
                        Our services
                    </h1>
                </article>
            </div>

            <div className='content'>
                <div className='buy'>
                    <h1>Buy or sell a land</h1>
                </div>
                <div className='buy-container'>
                    <div className='buy-pic'>
                        <img 
                            src='/assets/images/buy-pic.jpg'
                        />
                    </div>
                    <div className='buy-details'>
                        <h3>Our company specializes in the acquisition and sales of land. We work with sellers to 
                        purchase their property at a fair market value, and then resell it to buyers looking for 
                        the perfect piece of land for their residential or commercial needs. Our team of real estate 
                        experts has a deep understanding of the local market, allowing us to make informed decisions 
                        and secure profitable deals for our clients. Whether you're looking to sell your land or find 
                        the perfect piece to build your dream home or business on, we're here to help you every step of the way.</h3>
                    </div>
                </div>
                <div className='develop'>
                    <h1>Develop your land</h1>
                </div>
                <div className='develop-container'>
                    <div className='develop-details'>
                        <h3>Our company also offers land development services. Our team of experts can help you turn your raw land 
                        into a fully developed property, ready for construction or other uses. We offer a range of services, including 
                        site planning, zoning and permitting, infrastructure development, and construction management. We work closely 
                        with our clients to understand their goals and objectives, and then develop a customized plan to turn their land 
                        into a valuable asset. Whether you're looking to build a residential community, a commercial development, or 
                        anything in between, our team has the skills and experience to help you make it a reality.</h3>
                    </div>
                    <div className='develop-pic'>
                        <img 
                            src='/assets/images/develop.jpg'
                        />
                    </div>
                </div>
                <div className='services-ex'>
                    <h1>Client expeerience</h1>
                    <SimpleSlider data={CLIENTEXDATA} className='clientEx__slider' />
                </div>
                <div className='consulting'>
                    <h1>Advisory and consultency</h1>
                    <div className='consulting-container'>
                        <div className='consulting-pic'>
                            <img 
                                src='/assets/images/consulting.jpg'
                            />
                        </div>
                        <div className='consulting-details'>
                        <h3>Our team of experienced professionals can offer expert advice on a wide range of real estate matters such 
                        as property investment, portfolio management, market analysis, and development feasibility. We understand that 
                        real estate can be a complex and ever-changing industry, and our goal is to help our clients navigate these 
                        complexities and make informed decisions. We work closely with our clients to understand their needs and goals 
                        and provide them with tailored solutions to help them achieve their objectives. Whether you're an individual 
                        looking to invest in property or a company looking to expand your real estate portfolio, our team is here to help.</h3>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
 
export default Services;