import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

class GalleryContainer extends Component {
    
    componentDidMount() {

        // const bodyRect = document.body.getBoundingClientRect();
        // const elemRect = this.bgEl.getBoundingClientRect();
        // const offset = elemRect.top - bodyRect.top;

        // window.addEventListener('scroll', (e) => {
        //     if (this.bgEl) {
        //         let wScroll = window.scrollY;

        //         this.bgEl.style.transform = `translate(0px, ${(offset - wScroll) / 60}%`;
        //     }
        // });
    }

    render() { 

        const style = {
            background: `linear-gradient(rgba(5,5,5,0.3), rgba(5,5,5,0.3)), url(${this.props.image}) no-repeat fixed`,
            backgroundSize: 'cover'
        }

        return (
            <ScrollableAnchor id={'gallery'}>
                <div className="gallery">
                    <div className="background-img" style={style} ref={n => this.bgEl = n}/>
                </div>
            </ScrollableAnchor>
        );
    }
}
 
export default GalleryContainer;