import React from 'react';
import Fade from 'react-reveal/Fade';

const ServiceItem = ({imgSrc, title}) => {
    return ( 
        <Fade bottom distance={'25%'} duration={800} delay={100}>
            <div className="service-item">
                <img src={imgSrc} alt={title}/>
                <div className="overlay">
                    <div className="metadata">
                        <span>{title}</span>
                        <p>Learn More</p>
                    </div>
                </div>
            </div> 
        </Fade>
    );
}
 
export default ServiceItem;