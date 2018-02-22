// @flow
import React from "react";

type Props = {
  onEdit: (name: string, url: string) => void
};

type State = {
  name: string,
  url: string
};

class EditCategoryOverlay extends React.Component<Props, State> {
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

  onEdit() {
    this.props.onEdit(this.state.name, this.state.url);
  }

  render() {
    return (
      <div className="edit-category-container">
        <label>Желано от вас име за смяна</label>
        <input
          onChange={(event: any) => this.handleChangeName(event.target.value)}
          value={this.state.name}
          className="edit-name"
        />
        <label className="edit-name-label">Желано от вас url за смяна</label>
        <input
          onChange={(event: any) => this.handleChangeURL(event.target.value)}
          value={this.state.url}
          className="edit-url"
        />
        <div onClick={this.onEdit.bind(this)} className="category-submit edit">
          Промяна
        </div>
      </div>
    );
  }
}

export default EditCategoryOverlay;
