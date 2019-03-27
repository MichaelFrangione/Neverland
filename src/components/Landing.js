import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

class Landing extends Component {
    componentDidMount() {
        
        window.addEventListener('scroll', (e) => {
            let wScroll = window.scrollY;
            let vHeight = document.documentElement.clientHeight;
            
            this.contentEl.classList.add('scrolled');

            if (this.contentEl) {
                this.contentEl.style.transform = `translate(0px, ${wScroll / 2}%`;
                this.contentEl.style.opacity = 1 - wScroll / (vHeight);
            }
            if (this.bgEl) {
                this.bgEl.style.filter = `blur(${wScroll/300}px)`;
            }
        });
    }

    render() { 
        return (
            <ScrollableAnchor id={'landing'}>
                <div>
                    <header className="landing" ref={n => this.landingEl = n}>
                        <div className="background-img" ref={n => this.bgEl = n}/>
                        <div className="content-container" ref={n => this.contentEl = n}>
                            <h2 className="page-title">Are you looking for something fun and exciting?</h2>
                            <h4>Neverland Arts &amp; Entertainment can help bring your vision to life and give your guests a performance they wont forget!</h4>
                            <a href='#contact'>
                                <button className="button">Book Now</button>
                            </a>
                        </div>
                        <a href='#services'>
                            <div className="arrow bounce" />
                        </a>
                    </header>
                </div>
            </ScrollableAnchor>
        );
    }
}
 
export default Landing;