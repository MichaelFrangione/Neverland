import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import ServiceItem from './ServiceItem';
import productionsImg from '../images/productions.jpg';
import eventsImg from '../images/events.jpg';
import openGymImg from '../images/open-gym.jpg';
// import classesImg from '../images/carousel/silks.jpg';

class ServicesContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <ScrollableAnchor id={'services'}>
                <div className="services-page">
                    <hr className="hr-text section-header" data-content="What We Offer" />
                    <section className="services-container">
                        <ServiceItem imgSrc={productionsImg} title="Productions"/>
                        <ServiceItem imgSrc={eventsImg} title="Events / Weddings"/>
                        <ServiceItem imgSrc={openGymImg} title="Open Gym"/>
                        {/* <ServiceItem imgSrc={classesImg} title="Classes"/> */}
                    </section>
                </div> 
            </ScrollableAnchor>
        );
    }
}
 
export default ServicesContainer;