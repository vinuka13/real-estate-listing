import React, { Component } from "react";
import Card from "../../components/Card";
import PlainCard from "../../components/PlainCard";
import './AboutUs.css'

export class AboutUs extends Component {
    
    render() { 
        return (
            <div className="about"> 
            <div className="topDiv">
                <h1 style={{fontSize:"2.5rem", paddingTop: "30px", paddingBottom: '20px', textAlign: "left"}}>ABOUT US</h1>
                <h2 >We are a property development company based in Kandy. We aspire to understand the requirements of our clients 
                and to deliver all our customers a product that is worthy of their investment, with all legal documentation and infrastructure 
                properly in place.Customer satisfaction is of utmost importance to us. A person usually buys a property either as an investment
                or for living. For those looking to invest in real-estate, we always strive to deliver land that is worthy of investment, in fast 
                developing areas and where your property will be appreciated as each day goes by. For those who are looking for a property for their 
                dream home, we always give the perfect slots which will allow you to have the peace and quiet of a loving home, but is conveniently 
                located for all your daily needs</h2>
            </div>
            <div className="aboutUs_cardContainer">
                <Card 
                    className='vision_card'
                    src='icons/vision.svg'
                    heading='OUR VISION'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus 
                        laoreet finibus mi eget fringilla. Vestibulum ornare, libero vitae pharetra '
                />
                <Card 
                    className='mission_card'
                    src='icons/development.svg'
                    heading='OUR MISSION'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus 
                        laoreet finibus mi eget fringilla. Vestibulum ornare, libero vitae pharetra'
                />
            </div>
            <div className="chairman">
                <div className="pic">
                    <img src='/assets/images/chairman.jpg'/>
                </div>
                <div className="meet">
                    <h1>Meet our <br></br> chairman</h1>
                    <h4 style={{fontWeight: 'normal', paddingTop: '25px'}}>Gamini Pussepitiya has over 31 years of experience 
                    in Finance, having worked in real estate, recovery, financing and legal sectors through the years. He has
                     worked in managing capacities for over 20 years from which he was among the top management of the industry for 10 years.
                    He started his career with Central Finance where he got extensive experience in the legal sector. He joined 
                    Sinhaputhra Finance in 1992 where he worked for the next 26 years and resigned as Assistant General Manager. 
                    During his time at Sinhaputhra Finance, Gamini Pussepitya worked in real estate, recovery and financing sectors. 
                    He entered the world of real-estate 1992 and led some of the largest real-estate projects in Kandy. During this
                     time he was able to work closely with hundreds of clients and the experience to deal with this variety of requirements. 
                     Being in the field also comes with the experience of handling the long and tiring procedures required for varied 
                     legal requirements and the ability to deal swiftly with the local authorities, which we have to agree is invaluable. 
                    However what is most important is the passion he has for real-estate which makes the service of 
                    Great Property Holdings unique and close to the heart</h4>
                </div>
            </div>
            <div className="aboutUs_plainCards">
                <div className="cr_plain">
                <PlainCard 
                    heading='Corporate responsibility'
                    text='We are dedicated to understanding the requirement of the individual
                     client alongside the requirement of the state, and to deliver products that 
                     would benefit the client, and which are in line with the laws and regulations 
                     of the state. We understand the social responsibility towards our client, the state and the environment '
                />
                </div>
                <div className="cr_plain">
                <PlainCard 
                    heading='Sustainability'
                    text='Building an organization is not just about serving clients and making profit. As entrepreneurs 
                    we at Great Property Holdings strongly believe that we have a social responsibility towards our society 
                    and also our environment. That is why sustainable development is at the heart of all our projects. With 
                    each new project and in our long term journey we strive to contribute to the national economy, to preserving 
                    the environment, and maintaining a work environment which is inclusive, equal and safe. '
                />
                </div>
            </div>
            </div>
        );
    }
}
 
export default AboutUs;