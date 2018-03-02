import "react-hot-loader/patch";
import { AppContainer } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("app");

let db = null;

document.addEventListener("deviceready", function() {
  db = window.sqlitePlugin.openDatabase(
    { name: "inventoryProject.db", location: "default" },
    function(db) {
      db.transaction(
        function(tx) {
          tx.executeSql("CREATE TABLE ordersTable (orderDate, orderItem)");
        },
        function(error) {
          console.log("transaction error: " + error.message);
        },
        function() {
          console.log("transaction ok");
        }
      );
    },
    function(error) {
      console.log("Open database ERROR: " + JSON.stringify(error));
    }
  );
});

ReactDOM.render(
  <AppContainer>
    <App db={db} />
  </AppContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootElement
    );
  });
}
