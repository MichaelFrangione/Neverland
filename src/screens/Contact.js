import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Grid from '@material-ui/core/Grid';

import contactImg from '../images/contact.jpg';

class Contact extends Component {
	state = {};
	render() {
		return (
			<div className="page contact">
				<Navigation showNavItems={true} forceBG />
				<Grid container className="content-container">
					<Grid item xs={12}>
						<hr className="hr-text section-header service-header" data-content="Contact Us" />
					</Grid>

					<Grid item xs={12} sm={6} data-aos="fade">
						<div className="contact-info-container">
							<h3>Contact Info</h3>
							<ul>
								<li>
									<i className="material-icons">call</i>
									<span>(289) 233-2581</span>
								</li>
								<li>
									<i className="material-icons">email</i>
									<span>info@neverlandartsent.com</span>
								</li>
							</ul>
							<h3>Training Address</h3>
							<p>
								Gymnastic Giants <br /> 175 Sun Pac blvd. <br /> Brampton, ON <br /> L6S 5Z6
							</p>

							<img className="contact-img" src={contactImg} alt="The Neverland Team" />
						</div>
					</Grid>
					<Grid item xs={12} sm={6} data-aos="fade">
						<div className="contact-form-container">
							<h2>Send us a message</h2>
							<p className="form-title">
								We would love to hear from you. Please fill out the form below and we will get back to
								you within 24 hours
							</p>
							<ContactForm />
						</div>
					</Grid>
				</Grid>
				<Footer />
			</div>
		);
	}
}

export default Contact;
