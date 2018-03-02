// @flow
import React from "react";

import cake from "../assets/cake-logo.jpg";

import NavigationItemComponent from "./NavigationItemComponent";

type Props = {
  orderHandler: () => void,
  returnToHomeHandler: () => void,
  orderActive: boolean
};

type State = {};

class NavigationComponentContainer extends React.Component<Props, State> {
  render() {
    return (
      <div className="navigation-container">
        {!this.props.orderActive && (
          <img
            onClick={this.props.orderHandler}
            id="cake-logo"
            src={cake}
            alt="alt"
          />
        )}
        <NavigationItemComponent
          onClickHandler={this.props.returnToHomeHandler}
          content="Продукти"
        />
        <NavigationItemComponent content="Поръчки" />
        <NavigationItemComponent content="Отчет" />
      </div>
    );
  }
}

export default NavigationComponentContainer;
