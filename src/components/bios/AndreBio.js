import React, { Component } from 'react';
import Modal from 'react-modal';
import { VideoContainer } from '../VideoContainer';

import imgSrc from '../../images/andre-bio.jpg';
// import SocialLinks from '../SocialLinks';

class AndreBio extends Component {
	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.state = { modalIsOpen: false };
	}

	onClick() {
		this.setState({ modalIsOpen: true });
	}

	afterOpenModal() {
		document.getElementsByTagName('html')[0].classList.add('modal-open');
	}

	closeModal() {
		document.getElementsByTagName('html')[0].classList.remove('modal-open');
		this.setState({ modalIsOpen: false });
	}

	render() {
		return (
			<div className="about-item" data-aos="fade" data-aos-delay="100">
				<figure className="img-container effect-oscar" onClick={this.onClick}>
					<img src={imgSrc} alt="Andre Nurse" />
					<figcaption>
						<div>
							<h2>
								Andre <span>Nurse</span>
							</h2>
							<p>Click to view demo reel</p>
						</div>
					</figcaption>
				</figure>
				<div className="metadata-container">
					<div className="bio">
						<p>
							Andre Nurse is a former Cirque du Soleil performer who thrilled audiences in Las Vegas with
							his aerial acrobatics on the high trapeze, his incredible agility and strength on the
							Chinese poles as well as his infectiously charming character. He is a former member of the
							Canadian National men’s gymnastics team, has worked as a gymnastics coach for several years,
							and has also worked extensively in the field of his second love, music production. Andre
							believes in full team collaboration to develop shows, as well as music. Andre started Kutgoi
							to bring back what he feels the music industry is missing. Artist development, and
							creativity! What makes the artist the artist that they are, and how can he help them tell
							their story? Andre wants to use his background as an acrobat and circus performer to bring
							something new to the music industry. He believes strongly in telling a story, something for
							the fans to follow. Andre also wants to bring circus and acrobatics closer to the forefront
							of the music industry. To use music and Acrobatics to tell stories about what’s going on in
							the world today, is his ultimate goal in a way that doesn’t bombard the listener but wants
							to deliver positive messages in a way that will resonate with audiences for years to come.
						</p>
					</div>
				</div>
				{/* <SocialLinks
					facebookUrl="https://www.facebook.com/andrednurse"
					instagramUrl="https://www.instagram.com/andrenacrobat"
					linkedInUrl="https://www.linkedin.com/in/andrenurse"
					youtubeUrl="https://www.youtube.com/channel/UCOTth0Vij2IeVObWtJL6GpA"
				/> */}
				<Modal
					isOpen={this.state.modalIsOpen}
					closeTimeoutMS={300}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					contentLabel="Andres Demo Reel"
					className="Modal"
				>
					<VideoContainer url="https://youtu.be/Ea9hdmn6UVM" onClose={this.closeModal} />
				</Modal>
			</div>
		);
	}
}

export default AndreBio;
