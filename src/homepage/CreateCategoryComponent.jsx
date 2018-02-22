// @flow
import React from "react";

type Props = {
  createCategoryHandler: (name: string, url: string) => void
};

type State = {
  name: string,
  url: string
};

class CreateCategoryComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      name: "",
      url: ""
    };
  }

  handleChangeName(target: string) {
    this.setState({ name: target });
  }

  handleChangeURL(target: string) {
    this.setState({ url: target });
  }

  createCategoryHandler() {
    this.props.createCategoryHandler(this.state.name, this.state.url);
  }

  render() {
    return (
      <div className="create-category-overlay">
        <label className="category-name-label">
          Моля въведете име на категория
        </label>
        <input
          className="name-category-input"
          value={this.state.name}
          onChange={(event: any) => this.handleChangeName(event.target.value)}
        />
        <label className="category-url-label">
          Моля въведете url на снимката за категорията
        </label>
        <input
          className="url-category-input"
          value={this.state.url}
          onChange={(event: any) => this.handleChangeURL(event.target.value)}
        />
        <div
          className="category-submit"
          onClick={this.createCategoryHandler.bind(this)}
        >
          Създай категория
        </div>
      </div>
    );
  }
}

export default CreateCategoryComponent;
