import { AppRegistry } from "react-native";
import App from "./src/navigator";
import { Provider } from "react-redux";
import store from "./src/store";
import React, { Component } from "react";
console.disableYellowBox = true;
const Movilidapp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent("Movilidapp", () => Movilidapp);
