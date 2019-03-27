import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ScrollableAnchor from 'react-scrollable-anchor'

const interests = [
    "Weddings", "Corporate Events", "Productions", "Open Training", "Aerial Class"
  ];

class ContactForm extends Component {
    state = { name: "", email: "", phone: "", message: "", interest: ""}

    componentDidMount() {
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() { 
        const { name, email, phone, message, interest } = this.state;

        return (
            <ScrollableAnchor id={'contact'}>
                <div className="contact-form-container">               
                    <hr className="hr-text section-header" data-content="Contact Us" />
                    <p className="form-title">We would love to hear from you, please complete the form below and we will get back to you within 24 hours.</p>
                    <section className="about-container">
                        <form noValidate autoComplete="off">
                            <TextField
                                id="standard-name"
                                label="Name"
                                value={name}
                                className="text-field"
                                onChange={this.handleChange('name')}
                                margin="normal"
                            />
                            <TextField
                                id="standard-name"
                                label="Email"
                                value={email}
                                className="text-field"
                                onChange={this.handleChange('email')}
                                margin="normal"
                            />
                            <TextField
                                id="standard-name"
                                label="Phone"
                                value={phone}
                                className="text-field"
                                onChange={this.handleChange('phone')}
                                margin="normal"
                            />

                            <TextField
                                id="standard-select"
                                select
                                label="Area of Interest"
                                className='form-select'
                                value={interest}
                                onChange={this.handleChange('interest')}
                                SelectProps={{
                                    MenuProps: {
                                    className: "selected",
                                    },
                                }}
                                helperText="Please select your currency"
                                margin="normal"
                            >
                                {interests.map(option => (
                                    <MenuItem key={option} value={option}>
                                    {option}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <TextField
                                id="standard-name"
                                label="Message"
                                className="text-field"
                                value={message}
                                multiline
                                rows="4"
                                onChange={this.handleChange('message')}
                                margin="normal"
                            />
                            <Button variant="contained" color="primary" className='form-submit-btn'>
                                Submit
                            </Button>
                        </form>
                    </section>
                </div>
            </ScrollableAnchor>
        );
    }
}
 
export default ContactForm;