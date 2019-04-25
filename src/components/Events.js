import React, { Component } from 'react';
import eventsImg from '../images/events.jpg';
import ScrollArrow from './ScrollArrow';


class Events extends Component {
	render() {
		const style = {
			background: `linear-gradient(rgba(5,5,5,0.3), rgba(5,5,5,0.3)), url(${eventsImg}) no-repeat fixed`,
			backgroundSize: 'cover'
		};

		return (
			<div className="events-page" id="events" ref={(el) => (this.el = el)}>
				<div className="background-img" style={style} ref={(n) => (this.bgEl = n)} />
				<div className="metadata" ref={(el) => (this.metadataEl = el)}>
					<h1>EVENTS</h1>
					<p>
						Neverland Arts & Entertainment is a creative production company, operating worldwide from its
						headquarters in Brampton, Ontario. With over a decade of international experience in creating
						and producing live entertainment for weddings, corporate events, and live shows.
					</p>
					<p className="learn-more">Learn More</p>
				</div>
				<ScrollArrow scrollToEl={'training'} />
			</div>
		);
	}
}

export default Events;
