// @flow
import React from "react";

type Props = {
  id: number,
  name: string,
  url: string,
  count: number,
  onProductClick: (id: number) => void
};

type State = {};

class ProductItemComponent extends React.Component<Props, State> {
  render() {
    return (
      <div
        style={this.props.style}
        onClick={e => this.props.onProductClick(this.props.id)}
        key={this.props.id}
        className="category-item-wrap"
      >
        <label className="product-count">{this.props.count}</label>
        <label className="product-name">{this.props.name}</label>
        <img className="product-url" src={this.props.url} alt="product" />
      </div>
    );
  }
}

export default ProductItemComponent;
