import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";

class Register extends Component {
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
    title: "Registro"
  };
  registerMe = () => {
    this.props.navigation.navigate("Type");
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.title}> REGISTRO MOVILIDAPP</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.inputText}
            onChangeText={text => this.setState({ number: text })}
            underlineColorAndroid="#FFF"
            placeholder="Número"
          />
          <TextInput
            style={styles.inputText}
            onChangeText={text => this.setState({ number: text })}
            underlineColorAndroid="#FFF"
            placeholder="Contraseña"
          />
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ number: text })}
            underlineColorAndroid="#FFF"
            placeholder="Apodo referencia"
          />
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ number: text })}
            underlineColorAndroid="#FFF"
            placeholder="Número de referencia"
          />
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ number: text })}
            underlineColorAndroid="#FFF"
            placeholder="Apodo referencia"
          />
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ number: text })}
            underlineColorAndroid="#FFF"
            placeholder="Número de referencia"
          />
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ number: text })}
            underlineColorAndroid="#FFF"
            placeholder="Apodo referencia"
          />
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ number: text })}
            underlineColorAndroid="#FFF"
            placeholder="Número de referencia"
          />
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ number: text })}
            underlineColorAndroid="#FFF"
            placeholder="Apodo referencia"
          />
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ number: text })}
            underlineColorAndroid="#FFF"
            placeholder="Número de referencia"
          />
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ number: text })}
            underlineColorAndroid="#FFF"
            placeholder="Apodo referencia"
          />
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ number: text })}
            underlineColorAndroid="#FFF"
            placeholder="Número de referencia"
          />
        </View>
        <View style={styles.buttonDiv}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.registerMe()}
          >
            <Text style={styles.buttonText}>¡REGISTRARME!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Register;

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
    marginTop: "5%"
  },
  button: {
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10
  },
  buttonText: { color: "#FFF", fontSize: 20, fontWeight: "bold" }
});
