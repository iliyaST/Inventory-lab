import React from "react";
import ReactDOM from "react-dom";

import HomePageScreenIntro from "./homepage/HomePageScreenIntro";

type Props = { db: any };
type State = { storage: any };

export default class App extends React.Component {
  constructor(props: Props) {
    super(props);

    this.state = {
      storage: {}
    };
  }

  render() {
    return <HomePageScreenIntro />;
  }
}
