import React, { Component } from 'react';

import facebook from '../images/facebook-box.png'
import twitter from '../images/twitter-box.png'
import instagram from '../images/instagram.png'

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="footer-container">               
                <img src={facebook} alt="facebook"/>
                <img src={twitter} alt="twitter"/>
                <img src={instagram} alt="instagram"/>
            </div> 
        );
    }
}
 
export default Footer;