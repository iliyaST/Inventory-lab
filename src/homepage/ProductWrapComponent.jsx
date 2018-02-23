// @flow
import React from "react";

import Footer from "../common/Footer";
import CreateComponent from "./CreateComponent";
import EditOverlay from "./EditOverlay";
import ProductItemComponent from "./ProductItemComponent";

type Props = {
  categoryId: number
};

type State = {
  category: Object,
  createProductActive: boolean,
  categories: any[],
  isDeleteSelecting: boolean,
  isEditSelecting: boolean,
  editOverlayActive: boolean,
  id: number
};

class ProductWrapComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      category: {},
      createProductActive: false,
      categories: [],
      isDeleteSelecting: false,
      isEditSelecting: false,
      editOverlayActive: false,
      id: 0
    };
  }

  componentWillMount() {
    let categories = JSON.parse(localStorage.getItem("categories"));

    let category = {};

    categories.forEach(category => {
      if (category.id === this.props.categoryId) {
        category = Object.assign({}, category);
        this.setState({ category, categories });
      }
    });
  }

  onCreateProduct() {
    this.setState({ createProductActive: true });
  }

  createProductHandler(name: string, url: string) {
    this.setState({ isEditSelecting: false, isDeleteSelecting: false });

    if (name !== "") {
      let categories = this.state.categories.slice();

      categories.forEach((category, index) => {
        if (category.id === this.props.categoryId) {
          category.products.push({
            id: new Date().valueOf(),
            name,
            url,
            count: 0
          });
        }
      });

      localStorage.setItem("categories", JSON.stringify(categories));

      this.setState({ createProductActive: false, categories });
    }
  }

  onEditProduct() {
    if (!this.state.isEditSelecting) {
      alert("Моля изберете продукт, който да редактирате!");
    }
    this.setState({
      isEditSelecting: !this.state.isEditSelecting,
      isDeleteSelecting: false
    });
  }

  onDeleteProduct() {
    if (!this.state.isDeleteSelecting) {
      alert("Моля изберете продукт, който да изтриете!");
    }
    this.setState({
      isDeleteSelecting: !this.state.isDeleteSelecting,
      isEditSelecting: false
    });
  }

  onProductClick(id: number) {
    if (this.state.isDeleteSelecting) {
      this.setState({ isDeleteSelecting: false, isEditSelecting: false, id });

      let categories = this.state.categories.slice();

      categories.forEach(category => {
        if (category.id === this.props.categoryId) {
          category.products.forEach((product, index) => {
            if (product.id === id) {
              category.products.splice(index, 1);
            }
          });
        }
      });

      localStorage.setItem("categories", JSON.stringify(categories));

      this.setState({ categories });
    } else if (this.state.isEditSelecting) {
      this.setState({ editOverlayActive: true, id });
    } else {
    }
  }

  onEditComplelete(name: string, url: string, count?: number) {
    let categories = this.state.categories.slice();
    categories.forEach(category => {
      if (category.id === this.props.categoryId) {
        category.products = category.products.map(product => {
          if (product.id === this.state.id) {
            let newProduct = Object.assign({}, product);
            if (url !== "" && url !== newProduct.url) {
              newProduct.url = url;
            }
            if (name !== "" && name !== newProduct.name) {
              newProduct.name = name;
            }

            if (count && count !== newProduct.count) {
              newProduct.count = count;
            }

            return newProduct;
          } else {
            return product;
          }
        });

        this.setState({ category });
      }
    });

    localStorage.setItem("categories", JSON.stringify(categories));

    this.setState({
      categories,
      createProductActive: false,
      isDeleteSelecting: false,
      isEditSelecting: false,
      editOverlayActive: false
    });
  }

  render() {
    let opacity = { opacity: "1" };

    if (
      !this.state.createProductActive &&
      (this.state.isEditSelecting || this.state.isDeleteSelecting)
    ) {
      opacity = { opacity: "0.5" };
    } else {
      opacity = { opacity: "1" };
    }

    return (
      <div>
        {!this.state.editOverlayActive &&
          !this.state.createProductActive && (
            <div style={opacity} className="products-wrap">
              {this.state.category.products.map(product => {
                return (
                  <ProductItemComponent
                    key={product.id}
                    name={product.name}
                    url={product.url}
                    id={product.id}
                    count={product.count}
                    onProductClick={this.onProductClick.bind(this)}
                  />
                );
              })}
            </div>
          )}
        {!this.state.editOverlayActive &&
          this.state.createProductActive && (
            <CreateComponent
              name={"продукт"}
              createHandler={this.createProductHandler.bind(this)}
            />
          )}
        {!this.state.editOverlayActive &&
          !this.state.createProductActive && (
            <Footer
              create="Нов продукт"
              edit="Редактиране продукт"
              delete="Изтриване продукт"
              onCreate={this.onCreateProduct.bind(this)}
              onEdit={this.onEditProduct.bind(this)}
              onDelete={this.onDeleteProduct.bind(this)}
            />
          )}

        {this.state.editOverlayActive && (
          <EditOverlay
            onEdit={this.onEditComplelete.bind(this)}
            editCount={true}
          />
        )}
      </div>
    );
  }
}

export default ProductWrapComponent;
