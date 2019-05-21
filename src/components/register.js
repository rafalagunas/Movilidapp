import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Alert,
  Image
} from "react-native";
import { selectContactPhone } from "react-native-select-contact";
import axios from "../routing";
import logo from "../images/add.png";

async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: "Location Permission",
        message: "This app needs access to your location"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the location");
    } else {
      console.log("Location permission denied");
    }
  } catch (err) {
    console.log(error);
  }
}

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

  getPhoneNumber = () => {
    return selectContactPhone().then(selection => {
      if (!selection) {
        return null;
      }

      let { contact, selectedPhone } = selection;
      console.log(
        `Selected ${selectedPhone.type} phone number ${
          selectedPhone.number
        } from ${contact.name}`
      );
      return selectedPhone.number;
    });
  };

  componentDidMount() {
    //requestLocationPermission();
  }

  registerMe = () => {
    const user = {
      phone:      this.state.number,
      name:       this.state.name,
      pass:       this.state.pass,
      ref_one:    this.state.ref_one,
      ref_two:    this.state.ref_two,
      ref_three:  this.state.ref_three,
      ref_four:   this.state.ref_four,
      ref_five:   this.state.ref_five,
      nick_one:   this.state.nick_one,
      nick_two:   this.state.nick_two,
      nick_three: this.state.nick_three,
      nick_four:  this.state.nick_four,
      nick_five:  this.state.nick_five
    };

    AsyncStorage.removeItem(user.phone);
    let users = AsyncStorage.setItem(user.phone, JSON.stringify(user));

    if (user.ref_one && user.nick_one) {
      this.signUp(user);
      this.returnData(users);
    } else {
      Alert.alert("ERROR", "COMPLETA TODOS LOS CAMPOS");
    }
  };

  signUp = user => {
    axios.post("user/register", {
      numero:       user.phone,
      contrasena:   user.password,
      referencia_1: user.nick_one,
      referencia_2: user.nick_two,
      referencia_3: user.nick_three,
      referencia_4: user.nick_four,
      referencia_5: user.nick_five,
      numero_1:     user.ref_one,
      numero_2:     user.ref_two,
      numero_3:     user.ref_three,
      numero_4:     user.ref_four,
      numero_5:     user.ref_five
    })
      .then(response => {
        // TODO Store api_token somewhere secure. Successful registration.
      })
      .catch(e => {
        if (error.response.status == 422) {
          Alert.alert("Error", "Completa todos los campos.");
        } else if (error.response) {
          Alert.alert("Error", "Ha sucedido un error inesperado. Vuelve a intentar, o comunícate con soporte.");
        } else if (error.request) {
          Alert.alert("Error", "No se recibió información del servidor.");
        } else {
          Alert.alert("Error", "No se pudo iniciar sesión. Verifica que estés conectado a internet, y vuelve a intentar.");
        }
      });
  }

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
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}> REGISTRO MOVILIDAPP</Text>
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
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ nick_one: text })}
            underlineColorAndroid="#f4a40a"
            keyboardType="default"
            placeholder="Apodo referencia"
          />
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ ref_one: text })}
            underlineColorAndroid="#f4a40a"
            keyboardType="phone-pad"
            placeholder="Número de referencia"
            maxLength={10}
          />
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ nick_two: text })}
            underlineColorAndroid="#f4a40a"
            keyboardType="default"
            placeholder="Apodo referencia"
          />
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ ref_two: text })}
            underlineColorAndroid="#f4a40a"
            keyboardType="phone-pad"
            placeholder="Número de referencia"
            maxLength={10}
          />
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ nick_three: text })}
            underlineColorAndroid="#f4a40a"
            keyboardType="default"
            placeholder="Apodo referencia"
          />
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ ref_three: text })}
            underlineColorAndroid="#f4a40a"
            keyboardType="phone-pad"
            placeholder="Número de referencia"
            maxLength={10}
          />
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ nick_four: text })}
            underlineColorAndroid="#f4a40a"
            keyboardType="default"
            placeholder="Apodo referencia"
          />
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ ref_four: text })}
            underlineColorAndroid="#f4a40a"
            keyboardType="phone-pad"
            placeholder="Número de referencia"
            maxLength={10}
          />
        </View>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ nick_five: text })}
            underlineColorAndroid="#f4a40a"
            keyboardType="name-phone-pad"
            placeholder="Apodo referencia"
          />
          <TextInput
            style={styles.rowInput}
            onChangeText={text => this.setState({ ref_five: text })}
            underlineColorAndroid="#f4a40a"
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
      </ScrollView>
    );
  }
}

export default Register;

const styles = StyleSheet.create({
  container: {
    // Remove to ensure that the view is Scrollable.
    // width: "100%",
    // height: "100%",
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
    marginTop: "10%",
    width: "100%",
    justifyContent: "center"
  },
  rowInput: {
    height: 50,
    width: "40%",
    padding: 10,
    marginLeft: 5,
    borderWidth: 3,
    borderColor: "#000",
    fontWeight: "bold"
  },
  contactButton: {
    height: 50,
    width: 60,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000",
    borderRadius: 0
  },
  contactButtonText: {
    color: "#FFF"
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
  button: {
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10
  },
  buttonText: { color: "#FFF", fontSize: 20, fontWeight: "bold" }
});

/* <TouchableOpacity
            style={styles.contactButton}
            onPress={() => this.getPhoneNumber()}
          >
            <Image style={{ width: 50, height: 30 }} source={logo} />
          </TouchableOpacity>*/
