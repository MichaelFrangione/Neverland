import React from 'react';
import Fade from 'react-reveal/Fade';

const AboutItem = ({imgSrc, title}) => {
    return ( 
        <Fade bottom>
            <div className="about-item">
                <img src={imgSrc} alt={title} />
                <div className="name">{title}</div>
                <div className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </div> 
        </Fade>
    );
}
 
export default AboutItem;