// @flow
import React from "react";

type Props = {
  content: string,
  onClickHandler: () => void
};

type State = {};

class NavigationItemComponent extends React.Component<Props, State> {
  render() {
    return (
      <div onClick={this.props.onClickHandler} className="navigation-item">
        {this.props.content}
      </div>
    );
  }
}

export default NavigationItemComponent;
