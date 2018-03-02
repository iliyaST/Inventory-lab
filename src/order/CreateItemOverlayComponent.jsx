// @flow
import React from "react";

import ProductItemComponent from "../homepage/ProductItemComponent";

type Props = {
  returnToOrderScreen: () => void,
  commitOrderItem: (product: any, orderChoosen: number) => void
};

type State = {
  productChosen: booelan,
  currentProductSelected: any,
  acceptActive: boolean,
  countOrdered: number
};

class CreateItemOverlayComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      productChosen: false,
      currentProductSelected: {},
      acceptActive: false,
      countOrdered: 0
    };
  }

  itemSelected(product: any) {
    this.setState({ currentProductSelected: product, productChosen: true });
  }

  onSelectedProductClick() {}

  countOrdered(target: number) {
    if (target > 0) {
      this.setState({ acceptActive: true, countOrdered: target });
    } else {
      this.setState({ acceptActive: false, countOrdered: target });
    }
  }

  render() {
    let categories = localStorage.getItem("categories");

    if (categories) {
      categories = JSON.parse(categories);
    }

    return (
      <div className="new-item-container">
        {!this.state.productChosen && (
          <div>
            <h1>Изберете продукт...</h1>
            <div className="all-products-container">
              {categories.map(category => {
                let result = category.products.map(product => {
                  return (
                    <ProductItemComponent
                      name={product.name}
                      url={product.url}
                      count={product.count}
                      price={product.price}
                      onProductClick={() => this.itemSelected(product)}
                    />
                  );
                });

                return result;
              })}
            </div>
          </div>
        )}
        {this.state.productChosen && (
          <div className="product-selected">
            <ProductItemComponent
              name={this.state.currentProductSelected.name}
              url={this.state.currentProductSelected.url}
              count={this.state.currentProductSelected.count}
              price={this.state.currentProductSelected.price}
              onProductClick={this.onSelectedProductClick.bind(this)}
            />

            <h2>
              Моля изберете бройка {this.state.currentProductSelected.name}
            </h2>
            <input
              value={this.state.countOrdered}
              onChange={event => this.countOrdered(event.target.value)}
              className="count-ordered-items"
            />
          </div>
        )}

        <div className="footer-order-navigation">
          <div onClick={this.props.returnToOrderScreen} className="return">
            Върни се
          </div>
          {this.state.acceptActive && (
            <div
              onClick={() =>
                this.props.commitOrderItem(
                  this.state.currentProductSelected,
                  this.state.countOrdered
                )
              }
              className="commit"
            >
              Потвърждаване
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CreateItemOverlayComponent;
