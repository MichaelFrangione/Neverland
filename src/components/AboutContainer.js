import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import img from '../images/amanda-bio.jpg';
import img2 from '../images/andre-bio.jpg';
import AboutItem from './AboutItem';


class AboutContainer extends Component {
    render() { 
        return (
            <ScrollableAnchor id={'about'}>
                <div className="about-screen-container">
                    <div className="bg-fix"></div>             
                    <hr className="hr-text section-header" data-content="Who We Are" />
    
                    {/* <h2 class="section-header">What We Do</h2> */}
                    <section className="about-container">
                        <AboutItem imgSrc={img} title="Amanda DellaPenta"/>
                        <AboutItem imgSrc={img2} title="Andre Nurse"/>
                    </section>
                </div>
            </ScrollableAnchor>
        );
    }
}
 
export default AboutContainer;