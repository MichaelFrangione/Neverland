import React, { Component } from 'react';
import { ContactActionContainer } from './ContactActionContainer';
import AmandaBio from './bios/AmandaBio';
import AndreBio from './bios/AndreBio';

class AboutContainer extends Component {
	render() {
		return (
			<div className="about-screen-container" id="about">
				<hr className="hr-text section-header" data-content="Who We Are" />
				<section className="about-container">
					<AmandaBio />
					<AndreBio />
				</section>
				<ContactActionContainer />
			</div>
		);
	}
}

export default AboutContainer;
