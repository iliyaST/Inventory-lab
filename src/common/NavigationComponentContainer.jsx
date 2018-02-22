// @flow
import React from "react";

import cake from "../assets/cake-logo.jpg";

import NavigationItemComponent from "./NavigationItemComponent";

type Props = {
  returnToHomeHandler: () => void
};

type State = {};

class NavigationComponentContainer extends React.Component<Props, State> {
  render() {
    return (
      <div className="navigation-container">
        <img id="cake-logo" src={cake} alt="alt" />
        <NavigationItemComponent
          onClickHandler={this.props.returnToHomeHandler}
          content="Продукти"
        />
        <NavigationItemComponent content="Поръчки" />
      </div>
    );
  }
}

export default NavigationComponentContainer;
