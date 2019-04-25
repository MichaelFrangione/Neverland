import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
import ScrollArrow from '../ScrollArrow';

class TrainingContent extends Component {
	render() {
		return (
			<div className="section" id="training">
				<div className="overview">
					<h1>Training</h1>
					<div className="overview-content">
						<Grid container className="content-container">
							<Grid item xs={12} sm={6}>
								<p>
									Ever wanted to be part of the circus? Neverland offers training for Kids, Teens and
									Adults at every level. Whether you want to do circus as an extra-curricular
									activity, or train to be a professional circus performer, Neverland is the place for
									you!
								</p>
							</Grid>
							<Grid item xs={12} sm={6}>
								<p>
									We offer aerial and ground circus programs. For experienced circus artists, acrobats
									and trickers, we have open gym 4 nights a week thats $10 for 3 hours! So you can
									drop in and work on your skills, meet other artists or just go somewhere there are
									people like you!
								</p>
							</Grid>
						</Grid>
					</div>
					<NavLink exact to="/training" className="btn btn-sm animated-button victoria-four">
						Learn more
					</NavLink>
				</div>
				<ScrollArrow scrollToEl={'about'} arrowColor="#ccc" position="start" />
			</div>
		);
	}
}

export default TrainingContent;
