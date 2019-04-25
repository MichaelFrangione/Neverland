import React, { Component } from 'react';
import ServiceItem from './ServiceItem';
import productionsImg from '../images/productions.jpg';
import eventsImg from '../images/events.jpg';
import openGymImg from '../images/open-gym.jpg';
import ReactModal from 'react-modal';
import ProductionsModal from './modals/ProductionsModal';
import EventsModal from './modals/EventsModal';
import TrainingModal from './modals/TrainingModal';

const MODALS = {
	PRODUCTIONS: 0,
	EVENTS: 1,
	TRAINING: 2
};

class ServicesContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { modalOpen: false };
		this.handleShowModal = this.handleShowModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	handleShowModal(modalToShow) {
		this.setState({ modalOpen: modalToShow });
	}

	handleCloseModal() {
		this.setState({ modalOpen: false });
	}

	render() {
		const { modalOpen } = this.state;

		return (
			<div className="services-page">
				<hr className="hr-text section-header" data-content="What We Offer" />
				<section className="services-container">
					<ServiceItem
						imgSrc={productionsImg}
						title="Productions"
						onClicked={() => this.handleShowModal(MODALS.PRODUCTIONS)}
					/>
					<ServiceItem
						imgSrc={eventsImg}
						title="Events / Weddings"
						reversed
						onClicked={() => this.handleShowModal(MODALS.EVENTS)}
					/>
					<ServiceItem
						imgSrc={openGymImg}
						title="Training"
						onClicked={() => this.handleShowModal(MODALS.TRAINING)}
					/>
				</section>
				<ReactModal
					isOpen={modalOpen === MODALS.PRODUCTIONS}
					contentLabel="Productions"
					shouldCloseOnEsc={true}
					className="productions-modal"
					overlayClassName="productions-modal-overlay"
					ariaHideApp={false}
					closeTimeoutMS={300}
				>
					<ProductionsModal onClose={this.handleCloseModal} />
				</ReactModal>
				<ReactModal
					isOpen={modalOpen === MODALS.EVENTS}
					contentLabel="Productions"
					shouldCloseOnEsc={true}
					className="productions-modal"
					overlayClassName="productions-modal-overlay"
					ariaHideApp={false}
					closeTimeoutMS={300}
				>
					<EventsModal onClose={this.handleCloseModal} />
				</ReactModal>
				<ReactModal
					isOpen={modalOpen === MODALS.TRAINING}
					contentLabel="Productions"
					shouldCloseOnEsc={true}
					className="productions-modal"
					overlayClassName="productions-modal-overlay"
					ariaHideApp={false}
					closeTimeoutMS={300}
				>
					<TrainingModal onClose={this.handleCloseModal} />
				</ReactModal>
			</div>
		);
	}
}

export default ServicesContainer;
