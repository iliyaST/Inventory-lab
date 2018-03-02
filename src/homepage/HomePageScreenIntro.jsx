// @flow
import React from "react";

import NavigationComponentContainer from "../common/NavigationComponentContainer";
import CategoryWrapComponent from "./CateogryWrapComponent";
import CreateComponent from "./CreateComponent";
import Footer from "../common/Footer";
import ProductWrapComponent from "./ProductWrapComponent";

import EditOverlay from "./EditOverlay";

import "../styles/HomePageScreen.css";

type Props = {
  orderHandler: () => void
};

type State = {
  creatOverlayCategoryActive: boolean,
  creatOverlayProductActive: boolean,
  categoryWrapOpacity: Object,
  editActive: boolean,
  selectingEdit: boolean,
  selectingDelete: boolean,
  id: number,
  productActive: boolean,
  categoryClicked: number
};

class HomePageScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      creatOverlayCategoryActive: false,
      creatOverlayProductActive: false,
      categoryWrapOpacity: { opacity: "1" },
      editActive: false,
      selectingEdit: false,
      selectingDelete: false,
      id: 0,
      productActive: false,
      categoryClicked: 0
    };
  }

  onCreateCategory() {
    this.setState({ creatOverlayCategoryActive: true });
  }

  onEditCategory() {
    if (!this.state.selectingEdit) {
      let categories = localStorage.getItem("categories");

      if (categories === null || categories.length === 0) {
        alert("Моля първо създайте категория!");
      } else {
        alert("Моля изберете категория, която да редактирате!");
        const categoryWrapOpacity = { opacity: "0.5" };
        this.setState({
          categoryWrapOpacity,
          selectingEdit: true,
          selectingDelete: false
        });
      }
    } else {
      const categoryWrapOpacity = { opacity: "1" };
      this.setState({
        selectingEdit: false,
        categoryWrapOpacity
      });
    }
  }

  onCategoryEditComplete(name: string, url: string) {
    let categories = localStorage.getItem("categories");

    if (categories !== null) {
      categories = JSON.parse(categories);
      categories = categories.map(category => {
        if (category.id === this.state.id) {
          const newCategory = Object.assign({}, category);
          newCategory.id = this.state.id;
          if (name !== "" && name !== category.name) {
            newCategory.name = name;
          } else {
            newCategory.name = category.name;
          }

          if (url !== "" && url !== category.url) {
            newCategory.url = url;
          } else {
            newCategory.url = category.url;
          }

          return newCategory;
        } else {
          return category;
        }
      });

      localStorage.setItem("categories", JSON.stringify(categories));
    }

    const categoryWrapOpacity = { opacity: "1" };
    this.setState({ editActive: false, categoryWrapOpacity });
  }

  onDeleteCategory() {
    if (!this.state.selectingDelete) {
      let categories = localStorage.getItem("categories");

      if (categories === null || categories.length === 0) {
        alert("Моля първо създайте категория!");
      } else {
        alert("Моля изберете категория, която да изтриете!");
        const categoryWrapOpacity = { opacity: "0.5" };
        this.setState({
          categoryWrapOpacity,
          selectingDelete: true,
          selectingEdit: false
        });
      }
    } else {
      const categoryWrapOpacity = { opacity: "1" };
      this.setState({ selectingDelete: false, categoryWrapOpacity });
    }
  }

  createCategory(name: string, url: string) {
    const categoryWrapOpacity = { opacity: "1" };
    this.setState({
      selectingEdit: false,
      selectingDelete: false,
      categoryWrapOpacity
    });

    let categories =
      localStorage.getItem("categories") === null
        ? []
        : JSON.parse(localStorage.getItem("categories"));

    let newCategory = {
      id: new Date().valueOf(),
      name,
      url,
      products: []
    };

    if (newCategory.name !== "") {
      categories.push(newCategory);
      localStorage.setItem("categories", JSON.stringify(categories));
    }

    this.setState({ creatOverlayCategoryActive: false });
  }

  returnToHome() {
    this.setState({
      creatOverlayCategoryActive: false,
      productActive: false,
      creatOverlayProductActive: false
    });
  }

  categoryOnClick(id: number) {
    if (this.state.selectingEdit) {
      this.setState({ selectingEdit: false, editActive: true, id });
    } else if (this.state.selectingDelete) {
      this.setState({ selectingDelete: false, id }, () => {
        let categories = localStorage.getItem("categories");

        if (categories !== null) {
          categories = JSON.parse(categories);
          categories.forEach((category, index) => {
            if (category.id === this.state.id) {
              categories.splice(index, 1);
            }
          });

          localStorage.setItem("categories", JSON.stringify(categories));
        }

        const categoryWrapOpacity = { opacity: "1" };
        this.setState({ editActive: false, categoryWrapOpacity });
      });
    } else {
      this.setState({ productActive: true, categoryClicked: id });
    }
  }

  render() {
    return (
      <div className="home-page-wrapper">
        {this.state.editActive && (
          <EditOverlay onEdit={this.onCategoryEditComplete.bind(this)} />
        )}
        <NavigationComponentContainer
          returnToHomeHandler={this.returnToHome.bind(this)}
          orderHandler={this.props.orderHandler}
          orderActive={false}
        />
        {this.state.creatOverlayCategoryActive &&
          !this.state.creatOverlayProductActive && (
            <CreateComponent
              createHandler={this.createCategory.bind(this)}
              name={"категория"}
            />
          )}
        {!this.state.creatOverlayCategoryActive &&
          !this.state.creatOverlayProductActive &&
          !this.state.productActive && (
            <CategoryWrapComponent
              categoryStyle={this.state.categoryWrapOpacity}
              categoryOnClick={this.categoryOnClick.bind(this)}
            />
          )}
        {!this.state.creatOverlayCategoryActive &&
          !this.state.creatOverlayProductActive &&
          this.state.productActive && (
            <ProductWrapComponent categoryId={this.state.categoryClicked} />
          )}
        {!this.state.creatOverlayCategoryActive &&
          !this.state.creatOverlayProductActive &&
          !this.state.productActive && (
            <Footer
              create="Нова категория"
              edit="Редактиране категория"
              delete="Изтриване категория"
              onCreate={this.onCreateCategory.bind(this)}
              onEdit={this.onEditCategory.bind(this)}
              onDelete={this.onDeleteCategory.bind(this)}
            />
          )}
      </div>
    );
  }
}

export default HomePageScreen;
