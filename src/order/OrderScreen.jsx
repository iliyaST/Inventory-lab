// @flow
import React from "react";

import NavigationComponent from "../common/NavigationComponentContainer";
import CreateItemOverlayComponent from "./CreateItemOverlayComponent";
import ProductItemComponent from "../homepage/ProductItemComponent";

import "../styles/OrderScreen.css";

type Props = {
  returnToHomeHandler: () => void,
  db: any
};

type State = {
  createItemActive: boolean
};

class EditOverlay extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      createItemActive: false
    };
  }

  createItemHandler() {
    this.setState({ createItemActive: true });
  }

  returnToOrderScreen() {
    this.setState({ createItemActive: false });
  }

  commitOrderItem(product: any, productCount: number) {
    let currentItemOrder = { product, productCount };

    let currentOrder = localStorage.getItem("currentOrder");

    if (currentOrder) {
      currentOrder = JSON.parse(currentOrder);
    } else {
      currentOrder = [];
    }

    currentOrder.push(currentItemOrder);

    localStorage.setItem("currentOrder", JSON.stringify(currentOrder));

    this.setState({ createItemActive: false });
  }

  createOrderHandler() {
    let order = localStorage.getItem("currentOrder");

    localStorage.setItem("currentOrder", JSON.stringify([]));

    this.setState({ createItemActive: false });

    this.props.db.transaction(
      function(tx) {
        var query =
          "INSERT INTO ordersTable (orderDate, orderItem) VALUES (?,?)";

        let dateTime = new Date().toString();

        console.log(dateTime);

        tx.executeSql(
          query,
          [dateTime, order],
          function(tx, res) {
            console.log("insertId: " + res.insertId + " -- probably 1");
            console.log(
              "rowsAffected: " + res.rowsAffected + " -- should be 1"
            );
          },
          function(tx, error) {
            console.log("INSERT error: " + error.message);
          }
        );
      },
      function(error) {
        console.log("transaction error: " + error.message);
      },
      function() {
        console.log("transaction ok");
      }
    );
  }

  selectAll() {
    this.props.db.transaction(
      function(tx) {
        var query = "SELECT * FROM ordersTable";

        tx.executeSql(
          query,
          [],
          function(tx, resultSet) {
            console.log(resultSet);
          },
          function(tx, error) {
            console.log("SELECT error: " + error.message);
          }
        );
      },
      function(error) {
        console.log("transaction error: " + error.message);
      },
      function() {
        console.log("transaction ok");
      }
    );
  }

  render() {
    let currentOrder = localStorage.getItem("currentOrder");
    let submitActive = true;

    if (currentOrder === null || JSON.parse(currentOrder).length === 0) {
      submitActive = false;
    }

    return (
      <div className="order-container">
        {!this.state.createItemActive && (
          <div className="content">
            <NavigationComponent
              returnToHomeHandler={this.props.returnToHomeHandler}
              orderActive={true}
            />
            <h1>
              Здравейте моля добавете продукти към поръчката{" "}
              <span onClick={this.selectAll.bind(this)}>Test</span>
            </h1>
            {JSON.parse(
              localStorage.getItem("currentOrder") === null
                ? "[]"
                : localStorage.getItem("currentOrder")
            ).map((order, index) => {
              return (
                <div key={index} className="order">
                  <div>
                    <ProductItemComponent
                      name={order.product.name}
                      url={order.product.url}
                    />
                  </div>
                  <div className="order-count-result">
                    x {order.productCount}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {this.state.createItemActive && (
          <CreateItemOverlayComponent
            commitOrderItem={this.commitOrderItem.bind(this)}
            returnToOrderScreen={this.returnToOrderScreen.bind(this)}
          />
        )}
        {!this.state.createItemActive && (
          <div className="nav-order-result-screen">
            <div
              onClick={this.createItemHandler.bind(this)}
              className="new-item"
            >
              Нов продукт
            </div>
            {submitActive && (
              <div
                onClick={this.createOrderHandler.bind(this)}
                className="new-item"
              >
                Активирайне поръчка
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default EditOverlay;
