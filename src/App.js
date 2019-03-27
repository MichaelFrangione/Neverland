import React, { Component } from 'react';
import Home from './screens/Home';
import { configureAnchors } from 'react-scrollable-anchor'
import { ParallaxProvider } from 'react-scroll-parallax';

import './sass/App.scss';

class App extends Component {
    componentDidMount() {
        configureAnchors({offset: -32, scrollDuration: 500, scrollUrlHashUpdate:false});
    }
    render() {
        return (
            <ParallaxProvider>
                <div className="App">
                    <Home/>
                </div>
            </ParallaxProvider>
        );
    }
}

export default App;
