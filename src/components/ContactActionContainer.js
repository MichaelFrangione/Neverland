import React from 'react';
import { NavLink } from 'react-router-dom';

export const ContactActionContainer = (props) => (
	<section className="contact-action" data-aos="fade" data-aos-delay="200" data-aos-duration="1000">
		<h3>{props.text || 'Interested in working with us?'}</h3>
		<NavLink exact to="/contact" className="btn btn-sm animated-button victoria-four">
			Send Us a message
		</NavLink>
	</section>
);
