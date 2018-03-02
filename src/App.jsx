import React from "react";
import ReactDOM from "react-dom";

import HomePageScreenIntro from "./homepage/HomePageScreenIntro";
import OrderScreen from "./order/OrderScreen";

type Props = {
  db: any
};
type State = {
  storage: any,
  orderActive: boolean,
  homePageActive: boolean
};

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      storage: {},
      homePageActive: true,
      orderActive: false
    };
  }

  orderHandler() {
    this.setState({ homePageActive: false, orderActive: true });
  }

  returnToHome() {
    this.setState({ homePageActive: true, orderActive: false });
  }

  render() {
    return (
      <div>
        {this.state.orderActive && (
          <OrderScreen
            returnToHomeHandler={this.returnToHome.bind(this)}
            db={this.props.db}
          />
        )}
        {this.state.homePageActive && (
          <HomePageScreenIntro orderHandler={this.orderHandler.bind(this)} />
        )}
      </div>
    );
  }
}
