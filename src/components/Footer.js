import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import facebook from '../images/facebook-box.png';
import youtube from '../images/youtube.png';
import instagram from '../images/instagram.png';

class Footer extends Component {
	state = {};
	render() {
		return (
			<div className="footer-container">
				<div className="content-wrapper">
					<span className="copy">
						&copy; 2019 Neverland Arts & Entertainment Inc.&nbsp;&nbsp;|&nbsp;&nbsp;
					</span>
					<NavLink exact to="/privacy-policy">
						<span>Privacy Policy</span>
					</NavLink>
				</div>
				<div className="link-wrapper">
					<a href="https://www.facebook.com/neverlandarts/" target="_blank" rel="noopener noreferrer">
						<img src={facebook} alt="facebook" />
					</a>
					<a href="https://www.instagram.com/neverlandarts/" target="_blank" rel="noopener noreferrer">
						<img src={instagram} alt="instagram" />
					</a>
					<a
						href="https://www.youtube.com/channel/UCrYCIlJTaxksmxRNI4iB0sA"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={youtube} alt="LinkedIn" />
					</a>
				</div>
			</div>
		);
	}
}

export default Footer;
