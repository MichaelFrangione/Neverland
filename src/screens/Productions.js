import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Grid from '@material-ui/core/Grid';
import { CSSTransition } from 'react-transition-group';
import { VideoContainer } from '../components/VideoContainer';
import { ContactActionContainer } from '../components/ContactActionContainer';
import { Carousel } from '../components/Carousel';

import carImg1 from '../images/carousel/productions/1.jpg';
import carImg2 from '../images/carousel/productions/2.jpg';
import carImg3 from '../images/carousel/productions/3.jpg';
import carImg4 from '../images/carousel/productions/4.jpg';
import carImg5 from '../images/carousel/productions/5.jpg';
const images = [ carImg1, carImg2, carImg3, carImg4, carImg5 ];

const videoUrl = 'https://www.youtube.com/embed/S13sCur5uQo';

class Productions extends Component {
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
			<div className="page productions">
				<Navigation forceBg />
				<div className={`header ${showVideo ? 'video-active' : ''}`}>
					<h1>Neverland Productions</h1>
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
					<Grid item xs={12}  data-aos="fade">
						<h3>Live Entertainment</h3>
					</Grid>
					<Grid item xs={12} sm={6}>
						<p data-aos="fade">
							Neverland Arts & Entertainment is a creative production company, operating worldwide from
							its headquarters in Brampton, Ontario. With over a decade of international experience in
							creating and producing live entertainment for weddings, corporate events, and live shows.
						</p>
						<p data-aos="fade">
							With a passion for discovery and invention, Neverland offers unique theatrical productions
							that feature extraordinary circus acts, jaw-dropping aerial acts, stunning visuals and
							characters that tell an unforgettable story. Our productions fascinate the audience
							regardless of age, language or cultural background. Our entertainment brings the imagination
							to life, making the impossible, possible, stimulating the senses, and creating an
							unforgettable experience.
						</p>
					</Grid>

					<Grid item xs={12} sm={6}>
						<p  data-aos="fade">
							We customize everything to fit to your brand, venue, region, guest demographics and your
							budget! We create shows for theatres, open air venues, corporate events, weddings, night
							life, dinner theatres, arenas, as well as, city squares and unconventional venues anywhere
							in the world.
						</p>

						<p  data-aos="fade">
							Neverland’s scope of work in corporate entertainment includes consulting services, creative
							concept development, and event entertainment management. Some of our local cliental include:
							Chapters Indigo, Collingwood Circus Club, Gymnastic Gaints, Mandarin Restaurant, RBC,
							Toronto Pride, Town of Wasaga, and more. Our international cliental include: Celebrity
							Cruises, Live 4U Stunts, Livewire Productions, Mall of Qatar, Pocket Knife Productions Inc,
							Sinking Ship Productions Inc and TAG Entertainment.
						</p>
					</Grid>
					<Grid item xs={12}  data-aos="fade">
						<p>Coming Fall 2019</p>
						<p>Lucky Penny</p>
					</Grid>
				</Grid>
				<Carousel images={images} />
				<ContactActionContainer />
				<Footer />
			</div>
		);
	}
}

export default Productions;
