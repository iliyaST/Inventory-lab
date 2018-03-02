// @flow
import React from "react";

type Props = {
  name: string,
  count: boolean,
  price: boolean,
  createHandler: (name: string, url: string) => void
};

type State = {
  name: string,
  url: string,
  count: number,
  price: number
};

class CreateCategoryComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      name: "",
      url: "",
      count: 0,
      price: 0.0
    };
  }

  handleChangeName(target: string) {
    this.setState({ name: target });
  }

  handleChangeURL(target: string) {
    this.setState({ url: target });
  }

  handleChangeCount(target: string) {
    this.setState({ count: target });
  }

  handleChangePrice(target: string) {
    this.setState({ price: target });
  }

  createHandler() {
    this.props.createHandler(
      this.state.name,
      this.state.url,
      this.state.count,
      this.state.price
    );
  }

  render() {
    return (
      <div className="create-category-overlay">
        {/* name of product */}
        <label className="category-name-label">
          Моля въведете име на {this.props.name}
        </label>
        <input
          className="name-category-input"
          value={this.state.name}
          onChange={(event: any) => this.handleChangeName(event.target.value)}
        />

        {/* url of product */}
        <label className="category-url-label">
          Моля въведете url на снимката за {this.props.name}а
        </label>
        <input
          className="url-category-input"
          value={this.state.url}
          onChange={(event: any) => this.handleChangeURL(event.target.value)}
        />

        {/* number of product */
        this.props.count && (
          <div className="count-container">
            <label className="category-url-label">
              Моля въведете броя на {this.props.name}а
            </label>
            <input
              className="count-input"
              value={this.state.count}
              onChange={(event: any) =>
                this.handleChangeCount(event.target.value)
              }
            />
          </div>
        )}

        {/* price of product */
        this.props.price && (
          <div className="price-container">
            <label className="price-label">
              Моля въведете цената на {this.props.name}а
            </label>
            <input
              className="price-input"
              value={this.state.price}
              onChange={(event: any) =>
                this.handleChangePrice(event.target.value)
              }
            />
          </div>
        )}

        <div
          className="category-submit"
          onClick={this.createHandler.bind(this)}
        >
          Създай {this.props.name}
        </div>
      </div>
    );
  }
}

export default CreateCategoryComponent;
