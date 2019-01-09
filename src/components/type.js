import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";

class Transport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      pass: "",
      name: "",
      nick_one: "",
      ref_one: "",
      nick_two: "",
      ref_two: "",
      nick_three: "",
      ref_three: "",
      nick_four: "",
      ref_four: "",
      nick_five: "",
      ref_five: ""
    };
  }
  static navigationOptions = {
    title: "Tipo de transporte"
  };
  taxiSection = () => {
    this.props.navigation.navigate("Taxi");
  };

  busSection = () => {
    this.props.navigation.navigate("Bus");
  };

  vanSection = () => {
    this.props.navigation.navigate("Van");
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.title}> ¿USTED VA EN?</Text>
        <View style={styles.buttonDiv}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.taxiSection()}
          >
            <Text style={styles.buttonText}>TAXI</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.busSection()}
          >
            <Text style={styles.buttonText}>CAMIÓN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.vanSection()}
          >
            <Text style={styles.buttonText}>VAN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Transport;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  title: {
    marginTop: "10%",
    alignSelf: "center",
    color: "#000",
    fontSize: 30,
    fontWeight: "bold"
  },
  rowContainer: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  formContainer: {
    marginTop: "10%",
    width: "100%",
    justifyContent: "center"
  },
  rowInput: {
    height: 50,
    width: "40%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#000"
  },
  inputText: {
    height: 50,
    width: "80%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#000"
  },
  buttonDiv: {
    marginTop: "15%",
    width: "100%",
    justifyContent: "center"
  },
  button: {
    marginTop: "3%",
    backgroundColor: "#000",
    padding: 35,
    width: "50%",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
});
