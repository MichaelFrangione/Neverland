import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ScrollArrow from '../ScrollArrow';

class EventsContent extends Component {
	render() {
		return (
			<div className="section" id="events">
				<div className="overview">
					<h1>Events &amp; Weddings</h1>

					<div className="content-container">
						<div className="overview-content">
							<p>
								Whether you’re planning a company party, wedding, charity event, product launch, holiday
								party, or trying to impress investors, Neverland promises an event to remember!
								<br />
								<br />
								We cater to the client, each event is unique, so why shouldn’t your entertainment be the
								same? Tell us what your heart desires and we’ll use our creativity and experience to
								entertain your guests!
							</p>
						</div>
						<div className="offers-content">
							<ul>
								<li>
									<h3>What We Offer</h3>
								</li>
								<li>Duo Acrobatic Routines</li>
								<li>Roaming Clowning Acrobatics</li>
								<li>Aerial Acts</li>
								<li>Aerial Ambience</li>
								<li>Aerial Champaign pouring</li>
							</ul>
						</div>
					</div>
					<NavLink exact to="/events" className="btn btn-sm animated-button victoria-four">
						Learn more
					</NavLink>
				</div>
				<ScrollArrow scrollToEl={'training'} arrowColor="#ccc" />
			</div>
		);
	}
}

export default EventsContent;
