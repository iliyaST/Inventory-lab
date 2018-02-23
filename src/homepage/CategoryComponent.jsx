// @flow
import React from "react";

import ProductItemComponent from "./ProductItemComponent";

type Props = {
  name: string,
  photoURL: string,
  id: number,
  categoryOnClick: (id: number) => void,
  categoryStyle: Object
};

type State = {};

class CategoryComponent extends React.Component<Props, State> {
  categoryOnClick() {
    this.props.categoryOnClick(this.props.id);
  }

  render() {
    return (
      <div
        style={this.props.categoryStyle}
        onClick={this.categoryOnClick.bind(this)}
        className="category-item-container"
      >
        <img
          className="category-item-photo"
          src={this.props.photoURL}
          alt="product"
        />
        <label className="category-item-name">{this.props.name}</label>
      </div>
    );
  }
}

export default CategoryComponent;
