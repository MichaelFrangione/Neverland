import React, { Component } from 'react';
import Landing from '../components/Landing';
import Navigation from '../components/Navigation';
import AboutContainer from '../components/AboutContainer';
import Footer from '../components/Footer';
import ContentContainer from '../components/ContentContainer';
import ParallaxContainer from '../components/ParallaxContainer';
import productionsImg from '../images/productions.jpg';
import eventsImg from '../images/events.jpg';
import trainingImg from '../images/open-gym.jpg';
import ProductionsContent from '../components/content/ProductionsContent';
import EventsContent from '../components/content/EventsContent';
import TrainingContent from '../components/content/TrainingContent';

class Home extends Component {
	state = {};
	render() {
		return (
			<div className="page">
				<Navigation showNavItems={true} />
				<Landing />
				<ContentContainer title="Neverland Arts &amp; Entertainment" id="home-details" />
				<ParallaxContainer image={productionsImg} name="p-productions" />
				<ProductionsContent />
				<ParallaxContainer image={eventsImg} name="p-events" />
				<EventsContent />
				<ParallaxContainer image={trainingImg} name="p-training" />
				<TrainingContent />
				<AboutContainer />
				<Footer />
			</div>
		);
	}
}

export default Home;
