// @flow
import React from 'react';

import cake from '../assets/cake-logo.jpg';

import NavigationItemComponent from './NavigationItemComponent';

class NavigationComponent extends React.Component {

    render() {
        return (
            <div className="navigation-container">
                <img id="cake-logo" src={cake} alt="alt" />
                <NavigationItemComponent content="Продукти" />
                <NavigationItemComponent content="Поръчки" />
            </div>
        );
    }
}

export default NavigationComponent;