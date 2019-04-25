import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Productions from './screens/Productions';
import Events from './screens/Events';
import Home from './screens/Home';

import Training from './screens/Training';
import Contact from './screens/Contact';

import './sass/App.scss';
import 'aos/dist/aos.css';

class App extends Component {
	componentDidMount() {
		AOS.init({ once: true, easing: 'ease-in-out', duration: 1000 });
	}
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Route
						render={({ location }) => {
							setTimeout(() => window.scrollTo(0, 0), 700);

							return (
								<TransitionGroup>
									<CSSTransition key={location.key} classNames="fade" timeout={1400}>
										<Route
											location={location}
											render={() => (
												<Switch location={location}>
													<Route exact path="/" component={Home} />
													<Route path="/productions" component={Productions} />
													<Route path="/events" component={Events} />
													<Route path="/training" component={Training} />
													<Route path="/contact" component={Contact} />
												</Switch>
											)}
										/>
									</CSSTransition>
								</TransitionGroup>
							);
						}}
					/>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
