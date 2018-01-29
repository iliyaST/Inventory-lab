// @flow
import React from 'react';

import NavigationComponent from './NavigationComponent';

import '../styles/HomePageScreen.css';

class HomePageScreen extends React.Component {

    render() {
        return (
            <div className="home-page-wrapper">
                <NavigationComponent />
            </div>
        );
    }
}

export default HomePageScreen;