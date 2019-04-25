import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { CSSTransition } from 'react-transition-group';

const interests = [ 'Weddings', 'Corporate Events', 'Productions', 'Open Training', 'Aerial Class' ];

class ContactForm extends Component {
	state = { name: '', email: '', phone: '', message: '', interest: '', error: false };

	componentDidMount() {}

	handleChange = (name) => (event) => {
		this.setState({
			[name]: event.target.value,
			error: false
		});
	};

	submitForm() {
		console.log('submitted', this.state);
		const { name, email, interest } = this.state;

		if (!name || !email || !interest) {
			this.setState({ error: true });
		} else {
			this.form.submit();
		}
	}

	render() {
		const { name, email, phone, message, interest, error } = this.state;

		return (
			<section className="form-container">
				<form
					autoComplete="off"
					action="https://formspree.io/info@neverlandartsent.com"
					method="POST"
					ref={(f) => {
						this.form = f;
					}}
				>
					<TextField
						id="name"
						label="Name"
						name="Name"
						required
						value={name}
						className="text-field"
						onChange={this.handleChange('name')}
						margin="normal"
					/>
					<TextField
						id="email"
						name="Email"
						label="Email"
						type="email"
						value={email}
						required
						className="text-field"
						onChange={this.handleChange('email')}
						margin="normal"
					/>
					<TextField
						id="phone"
						name="Phone"
						label="Phone"
						value={phone}
						className="text-field"
						onChange={this.handleChange('phone')}
						margin="normal"
					/>

					<TextField
						id="interest"
						name="Area of Interest"
						select
						label="Area of Interest"
						className="form-select"
						required
						value={interest}
						onChange={this.handleChange('interest')}
						SelectProps={{
							MenuProps: {
								className: 'selected'
							}
						}}
						helperText="Please make a selection"
						margin="normal"
					>
						{interests.map((option) => (
							<MenuItem key={option} value={option}>
								{option}
							</MenuItem>
						))}
					</TextField>

					<TextField
						id="message"
						label="Message"
						name="Message"
						className="text-field"
						value={message}
						multiline
						rows="4"
						onChange={this.handleChange('message')}
						margin="normal"
					/>
					<div type="submit" className="button-container">
						<div className="btn btn-sm animated-button victoria-four" onClick={() => this.submitForm()}>
							SEND
						</div>
					</div>
					<CSSTransition timeout={10000} classNames="popup" in={error} mountOnEnter unmountOnExit>
						<div className="error-box">One or more fields have an error. Please check and try again.</div>
					</CSSTransition>
				</form>
			</section>
		);
	}
}

export default ContactForm;
