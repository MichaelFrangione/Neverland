import React, { Component } from 'react';

class GalleryContainer extends Component {
	render() {
		const style = {
			background: `linear-gradient(rgba(5,5,5,0.3), rgba(5,5,5,0.3)), url(${this.props.image}) no-repeat fixed`,
			backgroundSize: 'cover'
		};

		return (
			<div className="gallery">
				<div className="background-img" style={style} ref={(n) => (this.bgEl = n)} />
			</div>
		);
	}
}

export default GalleryContainer;
