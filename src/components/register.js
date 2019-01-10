import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Alert,
  Image
} from "react-native";
import { selectContactPhone } from "react-native-select-contact";
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
