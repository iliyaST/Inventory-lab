// @flow
import React from "react";

import CategoryComponent from "./CategoryComponent";

type Props = {
  categoryStyle: Object,
  categoryOnClick: (id: number) => void
};

type State = {};

class CategoryWrapComponent extends React.Component<Props, State> {
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
          return (
            <CategoryComponent
              key={category.id}
              name={category.name}
              photoURL={category.url}
              id={category.id}
              categoryOnClick={this.props.categoryOnClick}
            />
          );
        })}
      </div>
    );
  }
}

export default CategoryWrapComponent;
