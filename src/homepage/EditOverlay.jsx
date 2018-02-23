// @flow
import React from "react";

type Props = {
  onEdit: (name: string, url: string, count?: number) => void,
  editCount?: boolean
};

type State = {
  name: string,
  url: string,
  count: number
};

class EditOverlay extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      name: "",
      url: "",
      count: 0
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

  onEdit() {
    this.props.onEdit(this.state.name, this.state.url, this.state.count);
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
        {this.props.editCount && (
          <label>Ново количество от дадения продукт </label>
        )}
        {this.props.editCount && (
          <input
            onChange={(event: any) =>
              this.handleChangeCount(event.target.value)
            }
            value={this.state.count}
            className="edit-count"
          />
        )}

        <div onClick={this.onEdit.bind(this)} className="category-submit edit">
          Промяна
        </div>
      </div>
    );
  }
}

export default EditOverlay;