import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ScrollArrow from './ScrollArrow';

class ContentContainer extends Component {
	render() {
		const { title } = this.props;

		return (
			<div className="section" id="home-details">
				<div className="overview">
					<h1>{title}</h1>
					<div className="overview-content">
						<Grid container className="content-container">
							<Grid item xs={12}>
								<p className="subtext">
									Neverland Arts &amp; Entertainment can give your guests a performance they won't
									forget!
								</p>
							</Grid>
							<Grid item xs={12} sm={6}>
								<p>
									Neverland Arts & Entertainment is a creative production company, operating worldwide
									from its headquarters in Brampton, Ontario. With over a decade of international
									experience in creating and producing live entertainment for weddings, corporate
									events, and live shows.
								</p>
							</Grid>
							<Grid item xs={12} sm={6}>
								<p>
									We customize everything to fit to your brand, venue, region, guest demographics and
									your budget! We create shows for theatres, open air venues, corporate events,
									weddings, night life, dinner theatres, arenas, as well as, city squares and
									unconventional venues anywhere in the world.
								</p>
							</Grid>
						</Grid>
					</div>
				</div>
				<ScrollArrow scrollToEl={'productions'} arrowColor="#ccc" />
			</div>
		);
	}
}

export default ContentContainer;
