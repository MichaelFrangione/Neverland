import React, { Component } from 'react';
import ScrollArrow from './ScrollArrow';

class Landing extends Component {
	constructor(props) {
		super(props);
		this.onScroll = this.onScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	onScroll() {
		if (window.innerWidth < 600) {
			return;
		}

		function isInViewport(node) {
			var rect = node.getBoundingClientRect();
			return (
				(rect.height > 0 || rect.width > 0) &&
				rect.bottom >= 0 &&
				rect.right >= 0 &&
				rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
				rect.left <= (window.innerWidth || document.documentElement.clientWidth)
			);
		}
		if (this.bgEl) {
			let scrollTop = window.scrollY;
			let initY = this.bgEl.offsetTop;
			let height = this.bgEl.clientHeight;

			this.contentEl.classList.add('scrolled');

			let visible = isInViewport(this.bgEl);
			if (visible) {
				var diff = scrollTop - initY;
				var ratio = Math.round(diff / height * 100);
				this.bgEl.style.backgroundPositionY = `${parseInt(-(ratio * 1.5))}px`;
				this.contentEl.style.transform = `translate(0px, ${scrollTop / 1.5}%`;
				this.contentEl.style.opacity = 1 - scrollTop / height;
			}
		}
	}

	render() {
		return (
			<header id="landing" className="landing" ref={(n) => (this.landingEl = n)}>
				<div className="background-img" ref={(n) => (this.bgEl = n)} />
				<div className="content-container" ref={(n) => (this.contentEl = n)}>
					<h2 className="page-title">Imagination Is the beginning of creation</h2>
					{/* <a href="#contact">
								<button className="button">Book Now</button>
							</a> */}
				</div>
				{/* <a href="#services">
							<div className="arrow bounce" />
						</a> */}
				<ScrollArrow scrollToEl={'home-details'} position="start" animate />
			</header>
		);
	}
}

export default Landing;
