// @flow
import React from "react";

import CategoryComponent from "./CategoryComponent";

type Props = {
  categoryStyle: Object,
  categoryOnClick: (id: number) => void
};

type State = {};

class CategoryWrapComponent extends React.Component<Props, State> {
  calculateStyle(id: number) {
    let categories = localStorage.getItem("categories");

    if (categories === null) {
      categories = [];
    }

    categories = JSON.parse(categories);

    let result = {};

    categories.forEach(category => {
      if (category.id === id) {
        category.products.forEach(product => {
          if (product.count === 0) {
            result = Object.assign(
              {},
              { border: "1vw solid red", opacity: "0.5" }
            );
          }

          if (product.count > 0 && product.count < 3) {
            result = Object.assign(
              {},
              { border: "1vw solid yellow", opacity: "0.5" }
            );
          }

          if (product.count > 3) {
            result = Object.assign(
              {},
              { border: "1vw solid green", opacity: "1" }
            );
          }
        });
      }
    });

    return result;
  }

  render() {
    let categories = localStorage.getItem("categories");

    if (categories === null) {
      categories = [];
    } else if (categories !== null) {
      categories = JSON.parse(categories);
    }

    return (
      <div style={this.props.categoryStyle} className="category-wrapper">
        {categories.map(category => {
          let resultStyle = this.calculateStyle(category.id);

          return (
            <CategoryComponent
              key={category.id}
              name={category.name}
              photoURL={category.url}
              id={category.id}
              categoryOnClick={this.props.categoryOnClick}
              categoryStyle={resultStyle}
            />
          );
        })}
      </div>
    );
  }
}

export default CategoryWrapComponent;
