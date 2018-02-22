import "react-hot-loader/patch";
import { AppContainer } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("app");

let db = null;

document.addEventListener("deviceready", function() {
  console.log("hi");
  db = window.sqlitePlugin.openDatabase({
    name: "demo.db",
    location: "default"
  });

  db.sqlBatch(
    [
      "CREATE TABLE IF NOT EXISTS DemoTable (name, score)",
      ["INSERT INTO DemoTable VALUES (?,?)", ["Alice", 101]],
      ["INSERT INTO DemoTable VALUES (?,?)", ["Betty", 202]],
      ["INSERT INTO DemoTable VALUES (?,?)", ["Cveti", 202]]
    ],
    function() {
      console.log("Populated database OK");
    },
    function(error) {
      console.log("SQL batch ERROR: " + error.message);
    }
  );

  db.executeSql(
    "SELECT * FROM DemoTable",
    [],
    function(rs) {
      console.log(rs.rows);
    },
    function(error) {
      console.log("SELECT SQL statement ERROR: " + error.message);
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
