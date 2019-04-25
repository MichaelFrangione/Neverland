import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Grid from '@material-ui/core/Grid';
import { CSSTransition } from 'react-transition-group';
import { VideoContainer } from '../components/VideoContainer';
import { ContactActionContainer } from '../components/ContactActionContainer';
import { Carousel } from '../components/Carousel';

import eventPic1 from '../images/event-pic1.jpg';

import carImg1 from '../images/carousel/events/1.jpg';
import carImg2 from '../images/carousel/events/2.jpg';
import carImg3 from '../images/carousel/events/3.jpg';
import carImg4 from '../images/carousel/events/4.jpg';
import carImg5 from '../images/carousel/events/5.jpg';
const images = [ carImg1, carImg2, carImg3, carImg4, carImg5 ];

const videoUrl = 'https://vimeo.com/282761598';

class Events extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showVideo: false
		};
		this.showVideo = this.showVideo.bind(this);
		this.onClose = this.onClose.bind(this);
	}

	showVideo() {
		this.setState({ showVideo: true });
	}

	onClose() {
		this.setState({ showVideo: false });
	}

	render() {
		const { showVideo } = this.state;

		return (
			<div className="page events">
				<Navigation showNavItems />
				<div className={`header ${showVideo ? 'video-active' : ''}`}>
					<h1>Events & Weddings</h1>
					<i className="material-icons play-btn" onClick={this.showVideo}>
						play_circle_outline
					</i>
					<CSSTransition
						timeout={500}
						classNames="fade"
						in={showVideo}
						mountOnEnter={true}
						unmountOnExit={true}
					>
						<VideoContainer onClose={() => this.onClose()} url={videoUrl} />
					</CSSTransition>
				</div>

				<hr className="hr-text section-header service-header" data-content="What We Offer" />

				<Grid container className="content-container">
					<Grid item xs={12} sm={6} >
						<h3 data-aos="fade">Duo Arobatic Routine</h3>
						<p data-aos="fade">
							This floor act is a beautiful mix of dance and acrobatics choreographed to a set piece of
							music. Generally this act is 4 - 6 minutes long and displays daring tricks and exciting
							throws that will get your heart thumping.
						</p>
						<h3 data-aos="fade">Roaming Clowning Acrobatics</h3>
						<p data-aos="fade">
							Performers will be roaming around the event interacting with the guest, as well as
							performing exciting acrobatics through the room. Performers will walk about the crowd in fun
							and exciting way. Performers will be “on” for 10 - 15 minutes for multiple sets in a single
							event with breaks in between.
						</p>
						<h3 data-aos="fade">Aerial Acts</h3>
						<p data-aos="fade">
							A single act rehearsed with a pre- selected music, choreography, and character. Generally
							4-6min long and includes high - level aerial acrobatics and beautiful spins, turns, mix with
							death defying drops.
						</p>
						<h3 data-aos="fade">Aerial Ambience</h3>
						<p data-aos="fade">
							The aerialist will generally perform multiple sets of ambience at a single event, with the
							performances being longer (between 10 - 30 minutes “on” with breaks between sets). Focusing
							on beautiful shapes and poses and interactions with guests.
						</p>
						<h3 data-aos="fade">Aerial Champaign pouring</h3>
						<p data-aos="fade">
							The aerialist will perform multiple sets of Champaign pouring at a single event, with the
							performances being longer (15 - 30 minutes “on” with breaks between sets). The aerialist
							will pour Champaign hanging from the apparatus of your choice (silks, trapeze or hoop).
						</p>
						<h3 data-aos="fade">Aerial Acts only</h3>
						<p data-aos="fade">A skyjack rental maybe required if the venue does not have one.</p>
						<p data-aos="fade">A free standing aerial rig can be used in or out doors where rigging is not available.</p>
						<p data-aos="fade">
							If you can provide us with some more detailed information about the event we can tailor the
							acts to the theme of your event. We can also create a custom show specifically for your
							event if that is something you are interested in.
						</p>
						<p data-aos="fade">
							Let us know if you have any questions or concerns. I hope we can help make your event
							special.
						</p>
					</Grid>
					<Grid item xs={12} sm={6}>
						<img className="event-pic" src={eventPic1} alt="events" />
					</Grid>
				</Grid>
				<Carousel images={images} />
				<ContactActionContainer />
				<Footer />
			</div>
		);
	}
}

export default Events;
