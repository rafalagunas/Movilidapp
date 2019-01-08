import React, { Component } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

class Main extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;

    return <View style={styles.container} />;
  }
}

const window = Dimensions.get("window");

export default Main;

const styles = StyleSheet.create({
  container: {
    width: window.width * 1,
    height: window.height * 1,
    alignItems: "center",
    backgroundColor: "#FFF"
  }
});
