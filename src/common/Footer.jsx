// @flow
import React from "react";

type Props = {
  create: string,
  edit: string,
  detelet: string,
  onCreate: () => void,
  onEdit: () => void,
  onDelete: () => void
};

type State = {};

class Footer extends React.Component<Props, State> {
  render() {
    return (
      <div className="footer-container">
        <div onClick={this.props.onCreate} className="create-new-item">
          {this.props.create}
        </div>
        <div onClick={this.props.onEdit} className="edit-item">
          {this.props.edit}
        </div>
        <div onClick={this.props.onDelete} className="delete-item">
          {this.props.delete}
        </div>
      </div>
    );
  }
}

export default Footer;
