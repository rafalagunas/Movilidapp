import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Alert
} from "react-native";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      pass: ""
    };
  }
  componentDidMount = async () => {
    //AsyncStorage.removeItem("actualUser");
    let actual = await AsyncStorage.getItem("actualUser");
    if (actual) {
      this.props.navigation.navigate("Type");
    } else {
      this.props.navigation.navigate("Login");
    }
  };

  static navigationOptions = {
    header: null
  };
  registerMe = () => {
    AsyncStorage.removeItem("actualUser");
    this.props.navigation.navigate("Register");
  };

  login = () => {
    AsyncStorage.removeItem("actualUser");
    let phone = this.state.number;

    this.returnData(phone);
  };

  returnData = async phone => {
    try {
      let response = await AsyncStorage.getItem(phone);

      if (response) {
        let response_parsed = JSON.parse(response);

        if (response_parsed.pass === this.state.pass) {
          AsyncStorage.setItem("actualUser", response_parsed.phone);
          // let actualUser = await AsyncStorage.getItem("actualUser");
          this.props.navigation.navigate("Type");
        } else {
          Alert.alert(
            "ERROR",
            "USUARIO O CONTRASEÑA NO COINCIDEN O NO EXISTEN "
          );
        }
      } else {
        Alert.alert("ERROR", "USUARIO O CONTRASEÑA NO COINCIDEN O NO EXISTEN ");
      }
    } catch (error) {
      alert(error);
    }
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.title}> LOGIN MOVILIDAPP</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.inputText}
            onChangeText={text => this.setState({ number: text })}
            underlineColorAndroid="#f4a40a"
            keyboardType="phone-pad"
            placeholder="Número"
            maxLength={10}
          />
          <TextInput
            style={styles.inputText}
            onChangeText={text => this.setState({ pass: text })}
            underlineColorAndroid="#f4a40a"
            keyboardType="visible-password"
            placeholder="Contraseña"
          />
        </View>
        <View style={styles.buttonDiv}>
          <TouchableOpacity style={styles.button} onPress={() => this.login()}>
            <Text style={styles.buttonText}>¡INICIAR SESIÓN!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.secondButtonDiv}>
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

export default Login;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#f4a40a"
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
    marginTop: "30%",
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
    borderWidth: 3,
    marginTop: 5,
    color: "#000",
    borderColor: "#000",
    fontWeight: "bold"
  },
  buttonDiv: {
    marginTop: "5%"
  },
  secondButtonDiv: {
    marginTop: "2%"
  },
  button: {
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10
  },
  buttonText: { color: "#FFF", fontSize: 20, fontWeight: "bold" }
});
