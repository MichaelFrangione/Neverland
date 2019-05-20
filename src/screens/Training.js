import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Grid from '@material-ui/core/Grid';
import { CSSTransition } from 'react-transition-group';
import { VideoContainer } from '../components/VideoContainer';
import { ContactActionContainer } from '../components/ContactActionContainer';
import { Carousel } from '../components/Carousel';

import trainingPic1 from '../images/training/training.jpg';
import carImg1 from '../images/carousel/training/1.jpg';
import carImg2 from '../images/carousel/training/2.jpg';
import carImg3 from '../images/carousel/training/3.jpg';
const images = [ carImg1, carImg2, carImg3 ];

const videoUrl = 'https://youtu.be/kO0TiRU2gPc';

class Training extends Component {
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
			<div className="page training">
				<Navigation forceBg />
				<div className={`header ${showVideo ? 'video-active' : ''}`}>
					<h1>Training</h1>
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

				<Grid container className="content-container" data-aos="fade">
					<Grid item xs={12} sm={8}>
						<h3>Open Circus Training</h3>
						<p>Come learn new skills, practice old ones, rehearse routines, acts or shows!</p>
						<p>
							This is an open gym training, meaning that it is not a structured class. Coaches will be in
							the gym if you have questions but will not be teaching. You must be able to train safely on
							your own. Age 16+
						</p>
						<p>
							Aerial circus points are available if you have your own equipment to rig or you can use our
							equipment.
						</p>
						<h3>Aerial Classes</h3>
						<p>
							Beginner/Intermediate aerial silks class. You will be learning the basics of aerial arts.
							The class will focus on basic poses, flexibility and strength, leading up to basic aerial
							combo, sequences and drops.
						</p>
					</Grid>
					<Grid item xs={12} sm={4}>
						<img className="event-pic" src={trainingPic1} alt="training" />
					</Grid>
				</Grid>
				<div className="apparatus-container">
					<Grid container className="content-container">
						<Grid item xs={12}>
							<h3 data-aos="fade">Available Apparatuses</h3>
						</Grid>
						<Grid item xs={12} sm={6} md={4} data-aos="fade" data-aos-delay="100">
							<h4>Aerial Silks</h4>
							<p>
								Aerial Silks is a beautiful form of dance and acrobatic skills performed within the
								aerial fabric. A great class for any ages, young and old. Kids will be learning to wrap,
								twist, turn and balance in the silks, along with building their confidence and exploring
								movement. This class is great for adults as well who want to explore different ways of
								staying healthy.
							</p>
						</Grid>
						<Grid item xs={12} sm={6} md={4} data-aos="fade" data-aos-delay="200">
							<h4>Chinese Pole</h4>
							<p>
								Poles Chinese Pole is a rigid rubber pole which takes ground acrobatic skills to new
								heights! Whether holding difficult positions or kicking off the pole to perform
								somersaults, heart-skipping drops or slides. This class is great for building strength
								and developing self trust when learning new skills.{' '}
							</p>
						</Grid>
						<Grid item xs={12} sm={6} md={4} data-aos="fade" data-aos-delay="300">
							<h4>Aerial Hoop (Lyra)</h4>
							<p>
								Aerial hoop is a circular steel apparatus suspend from the ceiling. Everyone young and
								old can take part. This class is a fun and exciting class that teaches confidence in
								your self and trusting yourself to learn new tricks and skills while suspended in the
								air.
							</p>
						</Grid>
						<Grid item xs={12} sm={6} md={4} data-aos="fade" data-aos-delay="400">
							<h4>Aerial Straps</h4>
							<p>
								Aerial Straps is a cotton or synthetic web apparatus that looks like two suspended
								ribbons. By wrapping the strap ends around your hands and wrists, students will learn
								different holds, twists, rolls and maneuvers, developing strength and flexibility.
							</p>
						</Grid>
						<Grid item xs={12} sm={6} md={4} data-aos="fade" data-aos-delay="500">
							<h4>Aerial Rope (Spanish Web)</h4>
							<p>
								Spanish web is a long braided rope which has been covered by a soft cotton sleeve (a
								"web") and is rigged to the ceiling. Towards the top of the apparatus, a small loop is
								attached to the main rope through which a performer will secure an ankle or wrist and be
								able to hang freely. This class is exciting and fun for everyone.
							</p>
						</Grid>
						<Grid item xs={12} sm={6} md={4} data-aos="fade" data-aos-delay="600">
							<h4>Hand to Hand (Adagio)</h4>
							<p>
								A discipline of circus encompassing elements of gymnastics, tumbling, acrobatic lifts,
								turns and dance set to music. In this class students will be working with others to
								perform skills in partners, trios or quads. They will be learning to develop their
								communication, musicality, and team work, while having fun and making friends.
							</p>
						</Grid>
						<Grid item xs={12} data-aos="fade" data-aos-delay="200" data-aos-duration="700">
							<p>
								<i>
									*We also have a 40X40 sprung floor, trampoline, foam pit and all gymnastics
									equipment.
								</i>
							</p>
						</Grid>
					</Grid>
				</div>

				<Grid container className="content-container">
					<Grid item xs={12} sm={6} data-aos="fade">
						<div className="pricing">
							<h3>Open Circus Training Hours</h3>
							<table className="pricing-table">
								<tbody>
									<tr>
										<td>Tuesday</td>
										<td>8:15pm - 11:15pm</td>
									</tr>
									<tr>
										<td>Wednesday</td>
										<td>9:00pm - 12:00am</td>
									</tr>
									<tr>
										<td>Saturday</td>
										<td>7:30pm - 10:30pm</td>
									</tr>
									<tr>
										<td>Sunday</td>
										<td>7:30pm - 10:30pm</td>
									</tr>
								</tbody>
							</table>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} data-aos="fade">
						<h3>Aerial Class Hours</h3>
						<table className="pricing-table">
							<tbody>
								<tr>
									<td>Tuesday</td>
									<td>8:00pm - 9:00pm</td>
								</tr>
								<tr>
									<td>Saturday</td>
									<td>2:00pm - 3:00pm</td>
								</tr>
							</tbody>
						</table>
						<table className="pricing-table">
							<tbody>
								<tr>
									<td>Price</td>
									<td>$95 plus tax/month</td>
								</tr>
							</tbody>
						</table>
					</Grid>
					<Grid item xs={12} sm={6} data-aos="fade">
						<div className="pricing">
							<h3>Summer Session (July and August)</h3>
							<h4>Beginner Aerial Silks classes</h4>
							<table className="pricing-table">
								<tbody>
									<tr>
										<td>Tuesday</td>
										<td>8:00pm - 9:00pm</td>
									</tr>
									<tr>
										<td>Friday</td>
										<td>7:00pm - 8:00pm</td>
									</tr>
									<tr>
										<td>Saturday</td>
										<td>2:00pm - 3:00pm</td>
									</tr>
								</tbody>
							</table>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} data-aos="fade">
						<h3>Price (Subject to HST)</h3>
						<table className="pricing-table">
							<tbody>
								<tr>
									<td>Daily drop in</td>
									<td>$10</td>
								</tr>
								<tr>
									<td>Monthly</td>
									<td>$100</td>
								</tr>
							</tbody>
						</table>
						<p>
							<strong>
								Location: Gymnastic Giants - 175 Sun Pac blvd. <br /> L6S 5Z6, Brampton, ON
							</strong>
						</p>
					</Grid>
				</Grid>
				<Carousel images={images} />

				<ContactActionContainer text="Interested in training with us?" />
				<Footer />
			</div>
		);
	}
}

export default Training;
