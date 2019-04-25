import React from 'react';
import Slider from 'react-slick';

const settings = {
	infinite: true,
	// autoplay: true,
	// autoplaySpeed: 5000,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: true,
	centerMode: true,
	centerPadding: '10%'
};

export const Carousel = (props) => (
	<div className="slick-container" data-aos="fade" data-aos-duration="1000">
		<Slider {...settings}>
			{props.images.map((img, i) => {
				return <img key={i} src={img} alt="Neverland" />;
			})}
		</Slider>
	</div>
);
