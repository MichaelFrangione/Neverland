import React, { Component } from 'react';
import Modal from 'react-modal';
import { VideoContainer } from '../VideoContainer';
// import SocialLinks from '../SocialLinks';
import imgSrc from '../../images/amanda-bio.jpg';

class AmandaBio extends Component {
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
			<div className="about-item" data-aos="fade">
				<figure className="img-container effect-oscar" onClick={this.onClick}>
					<img src={imgSrc} alt="Amanda Dellapenta" />
					<figcaption>
						<div>
							<h2>
								Amanda <span>Dellapenta</span>
							</h2>
							<p>Click to view demo reel</p>
						</div>
					</figcaption>
				</figure>
				<div className="metadata-container">
					<div className="bio">
						<p>
							Amanda Dellapenta is actively training and preforming in the circus arts. Her specialties
							are in Aerial silks and Adagio. She has performed with Les Productions Haut Vol, Dream Chest
							Circus and at multiple weddings and corporate events. Amanda recently started performing as
							a stunt double with ACTRA, the Toronto Film & Television union. Her recent projects include:
							The Christmas Chronicles, Dino Dana, My Spy and American Gods. Amanda is a former National
							Gymnast and Team Canada Cheerleader bringing to Neverland Arts & Entertainment Inc. 10 years
							of competing and coaching experience. Amanda competed for Team Canada at the World
							Championships placing 4th in 2016. Amanda was also part of the Canadian National Power
							tumbling team where she won the Novice and Junior National Championship titles for Power
							Tumbling as while as competing at the World Age Groups in Denmark.
						</p>
						<p>
							In 2014 Amanda and Andre co-produce and performed in “Gym Giant and the Genie”, to help
							support the grand opening of Gymnastics Giants.
						</p>
					</div>
				</div>
				{/* <SocialLinks
					facebookUrl="https://www.facebook.com/amanda.basta.3"
					instagramUrl="https://www.instagram.com/aerialdella/"
					linkedInUrl="https://www.linkedin.com/in/amanda-dellapenta-22b45b66/"
					youtubeUrl="https://www.youtube.com/channel/UCgj7MZLjun1egEnACO7Nq_A"
				/> */}
				<Modal
					isOpen={this.state.modalIsOpen}
					closeTimeoutMS={300}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					contentLabel="Amandas Demo Reel"
					className="Modal"
				>
					<VideoContainer url="https://youtu.be/xOT1CHN-CyM" onClose={this.closeModal} />
				</Modal>
			</div>
		);
	}
}

export default AmandaBio;
