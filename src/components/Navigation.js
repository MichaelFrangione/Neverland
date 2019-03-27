import React, { Component } from 'react';
import logo from '../images/neverland-logo.svg';
import Fade from 'react-reveal/Fade';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
             hidden: false, 
             prevScrollpos: window.pageYOffset 
        };
    }

    componentDidMount() {
        
        // window.onscroll = function() {
        //     var currentScrollPos = window.pageYOffset;
        //     this.setState({
        //         hidden: this.state.prevScrollpos > currentScrollPos ? false : true,
        //         prevScrollpos: currentScrollPos
        //     })
        //   }.bind(this)
          
    }


    render() { 

        const { hidden } = this.state;

        return ( 
            <Fade delay={500}>
                <div className={`navigation ${hidden ? 'hidden' : ""}`}>
                    <img src={logo} className="logo" alt="logo" />
                    <div className="nav-items">
                            <a href="#landing">Home</a>
                            <a href="#services">Services</a>
                            <a href="#about">About</a>
                            <a href="#contact">Contact</a>
                    </div>
                </div> 
            </Fade>
        );
    }
}
 
export default Navigation;