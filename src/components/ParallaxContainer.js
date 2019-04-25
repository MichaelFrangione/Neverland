import React, { Component } from 'react';

class ParallaxContainer extends Component {
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

			let visible = isInViewport(this.bgEl);
			if (visible) {
				var diff = scrollTop - initY;
				var ratio = Math.round(diff / height * 100);
				this.bgEl.style.backgroundPosition = `center ${parseInt(-(ratio * 1.5))}px`;
			}
		}
	}

	render() {
		const { image, name } = this.props;
		const style = {
			background: `linear-gradient(rgba(5,5,5,0.3), rgba(5,5,5,0.3)), url(${image})`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundAttachment: 'fixed'
		};

		return <div className={`parallax-container-img ${name}`} style={style} ref={(n) => (this.bgEl = n)} />;
	}
}

export default ParallaxContainer;
