import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ScrollArrow from '../ScrollArrow';

class ProductionsContent extends Component {
	render() {
		return (
			<div className="section" id="productions">
				<div className="overview">
					<h1>Neverland Productions</h1>
					<div className="overview-content">
						<p>
							Looking for innovative, new and exciting family friendly entertainment? Neverland has modern
							shows with a positive message, perfect for all ages! Our shows, skits, videos and
							performances range from 15 seconds to 90 minutes. Neverland will one day be a brand that
							screams creativity, innovation and love.
						</p>
					</div>
					<NavLink exact to="/productions" className="btn btn-sm animated-button victoria-four">
						Learn more
					</NavLink>
				</div>
				<ScrollArrow scrollToEl={'events'} arrowColor="#ccc" />
			</div>
		);
	}
}

export default ProductionsContent;
