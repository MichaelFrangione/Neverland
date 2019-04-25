import React from 'react';
import Fade from 'react-reveal/Fade';

const ServiceItem = ({ imgSrc, title, onClicked, reversed }) => {
	const handleClick = () => {
		console.log('item click');
		onClicked();
	};

	return (
		<Fade bottom distance={'25%'} duration={800} delay={100}>
			<div className={`service-item-container ${reversed ? 'reversed' : ''}`}>
				<div className="service-img" onClick={handleClick}>
					<img src={imgSrc} alt={title} />
				</div>
				<div className="detail-row">
					<div className="overlay">
						<div className="metadata">
							<h1>{title.toUpperCase()}</h1>
							<p>
								Neverland Arts & Entertainment is a creative production company, operating worldwide
								from its headquarters in Brampton, Ontario. With over a decade of international
								experience in creating and producing live entertainment for weddings, corporate events,
								and live shows.
							</p>
							<p className="learn-more" onClick={handleClick}>
								Learn More
							</p>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
};

export default ServiceItem;
