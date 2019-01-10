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
    let phone = this.state.number;
    let password = this.state.pass;
    let name = this.state.name;
    let reference_one = this.state.ref_one;
    let reference_two = this.state.ref_two;
    let reference_three = this.state.ref_three;
    let reference_four = this.state.ref_four;
    let reference_five = this.state.ref_five;

    const user = {
      phone: phone,
      name: name,
      pass: password,
      ref_one: reference_one,
      ref_two: reference_two,
      ref_three: reference_three,
      ref_four: reference_four,
      ref_five: reference_five
    };
    AsyncStorage.removeItem(phone);
    let users = AsyncStorage.setItem(phone, JSON.stringify(user));

    //this.props.navigation.navigate("Type");
    if (reference_one) {
      fetch("https://coderscave-prueba.000webhostapp.com/save-account.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "text/html"
        },
        body: JSON.stringify({
          number: phone,
          pass: password,
          ref_one: reference_one,
          ref_two: reference_two,
          ref_three: reference_three,
          ref_four: reference_four,
          ref_five: reference_five
        })
      })
        .then(response => response.json())
        .catch(e => {
          throw e;
        });

      this.returnData(users);
    } else {
      Alert.alert("ERROR", "COMPLETA TODOS LOS CAMPOS");
    }
  };

  returnData = async () => {
    let phone = this.state.number;
    try {
      let users = await AsyncStorage.getItem(phone);
      alert(users);
      this.props.navigation.navigate("Home");
    } catch (error) {
      alert(error);
    }
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
            keyboardType="phone-pad"
            placeholder="Número"
            maxLength={10}
          />
          <TextInput
            style={styles.inputText}
            onChangeText={text => this.setState({ pass: text })}
            underlineColorAndroid="#FFF"
            keyboardType="visible-password"
            placeholder="Contraseña"
          />
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ nick_one: text })}
            underlineColorAndroid="#FFF"
            keyboardType="default"
            placeholder="Apodo referencia"
          />
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ ref_one: text })}
            underlineColorAndroid="#FFF"
            keyboardType="phone-pad"
            placeholder="Número de referencia"
            maxLength={10}
          />
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ nick_two: text })}
            underlineColorAndroid="#FFF"
            keyboardType="default"
            placeholder="Apodo referencia"
          />
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ ref_two: text })}
            underlineColorAndroid="#FFF"
            keyboardType="phone-pad"
            placeholder="Número de referencia"
            maxLength={10}
          />
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ nick_three: text })}
            underlineColorAndroid="#FFF"
            keyboardType="default"
            placeholder="Apodo referencia"
          />
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ ref_three: text })}
            underlineColorAndroid="#FFF"
            keyboardType="phone-pad"
            placeholder="Número de referencia"
            maxLength={10}
          />
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ nick_four: text })}
            underlineColorAndroid="#FFF"
            keyboardType="default"
            placeholder="Apodo referencia"
          />
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ ref_four: text })}
            underlineColorAndroid="#FFF"
            keyboardType="phone-pad"
            placeholder="Número de referencia"
            maxLength={10}
          />
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ nick_five: text })}
            underlineColorAndroid="#FFF"
            keyboardType="name-phone-pad"
            placeholder="Apodo referencia"
          />
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ ref_five: text })}
            underlineColorAndroid="#FFF"
            keyboardType="phone-pad"
            placeholder="Número de referencia"
            maxLength={10}
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
