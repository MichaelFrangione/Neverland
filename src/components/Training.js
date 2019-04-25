import React, { Component } from 'react';
import openGymImg from '../images/open-gym.jpg';
import ScrollArrow from './ScrollArrow';

const SCROLL_IN_OFFSET = 600;
const SCROLL_OUT_OFFSET = 200;

class Training extends Component {
	componentDidMount() {
		// window.addEventListener('scroll', (e) => {
		// 	let wScroll = window.scrollY;
		// 	let vHeight = document.documentElement.clientHeight;
		// 	if (
		// 		wScroll >= this.el.offsetTop - vHeight + SCROLL_IN_OFFSET &&
		// 		wScroll <= this.el.offsetTop + SCROLL_OUT_OFFSET
		// 	) {
		// 		return this.el.classList.add('scrolled');
		// 	}
		// 	this.el.classList.remove('scrolled');
		// });
	}
	render() {
		const style = {
			background: `linear-gradient(rgba(5,5,5,0.3), rgba(5,5,5,0.3)), url(${openGymImg}) no-repeat fixed`,
			backgroundSize: 'cover'
		};

		return (
			<div className="training-page" id="training" ref={(el) => (this.el = el)}>
				<div className="background-img" style={style} ref={(n) => (this.bgEl = n)} />
				<div className="metadata" ref={(el) => (this.metadataEl = el)}>
					<h1>TRAINING</h1>
					<p>
						Neverland Arts & Entertainment is a creative production company, operating worldwide from its
						headquarters in Brampton, Ontario. With over a decade of international experience in creating
						and producing live entertainment for weddings, corporate events, and live shows.
					</p>
					<p className="learn-more">Learn More</p>
				</div>
				<ScrollArrow scrollToEl={'about'} />
			</div>
		);
	}
}

export default Training;
