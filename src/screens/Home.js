import React, { Component } from 'react';
import Landing from '../components/Landing';
import Navigation from '../components/Navigation';
import ServicesContainer from '../components/ServicesContainer';
import AboutContainer from '../components/AboutContainer';
import GalleryContainer from '../components/GalleryContainer';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

import image from '../images/carousel/silks.jpg'; 
import image2 from '../images/carousel/pole.jpg'; 

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navigation />
                <Landing />
                <ServicesContainer />
                <GalleryContainer  image={image}/>
                <AboutContainer />
                <GalleryContainer image={image2}/>
                <ContactForm />
                <Footer/>
            </div>  
        );
    }
}
 
export default Home;