import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import NavItems from './NavItems';

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hideBg: false,
			showDropdown: false
		};
		this.onScroll = this.onScroll.bind(this);
		this.showDropdown = this.showDropdown.bind(this);
	}

	componentDidMount() {
		if (!this.props.forceBG) {
			window.addEventListener('scroll', this.onScroll);
		} else {
			this.navEl.classList.add('scrolled');
		}
	}

	componentWillUnmount() {
		if (!this.props.forceBG) {
			window.removeEventListener('scroll', this.onScroll);
		}
	}

	onScroll() {
		if (this.navEl && window.scrollY > window.innerHeight - this.navEl.clientHeight) {
			return this.navEl.classList.add('scrolled');
		}

		return this.navEl.classList.remove('scrolled');
	}

	showDropdown() {
		const { showDropdown } = this.state;
		this.setState({ showDropdown: !showDropdown });
	}

	render() {
		const { forceBg } = this.props;
		const { showDropdown } = this.state;

		return (
			<div
				className={`navigation ${showDropdown ? 'dropdown-open' : ''} ${forceBg ? 'force-bg' : ''}`}
				ref={(n) => (this.navEl = n)}
			>
				<NavLink exact to="/">
					<div className="logo" />
				</NavLink>
				<div className="inline-nav">
					<NavItems />
				</div>
				<i className="material-icons nav-icon" onClick={this.showDropdown}>
					menu
				</i>
				<CSSTransition
					timeout={2000}
					classNames="nav-fade"
					in={showDropdown}
					mountOnEnter={true}
					unmountOnExit={true}
				>
					<div className="nav-dropdown">
						<hr className="hr-text" data-content="" />
						<NavItems />
					</div>
				</CSSTransition>
			</div>
		);
	}
}

export default Navigation;
