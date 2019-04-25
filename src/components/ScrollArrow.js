import React, { Component } from 'react';

class ScrollArrow extends Component {
	onClicked() {
		const pos = this.props.position || 'end';
		const el = document.getElementById(this.props.scrollToEl);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: pos });
		}
	}

	render() {
		const arrowColor = this.props.arrowColor || 'white';
		const animate = this.props.animate;

		return (
			<div className="scroll-arrow">
				<i
					className={`material-icons arrow ${animate ? 'bounce' : ''}`}
					style={{ color: arrowColor }}
					onClick={() => this.onClicked()}
				>
					expand_more
				</i>
			</div>
		);
	}
}

export default ScrollArrow;
