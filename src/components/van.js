import React, { Component } from "react";

import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Slider,
  AsyncStorage
} from "react-native";
import call from "react-native-phone-call";
import SendSMS from "react-native-sms";
async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
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
class Van extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      unit_value: 0,
      service_value: 0,
      comentario: "",
      latitude: "",
      longitude: ""
    };
  }
  static navigationOptions = {
    title: "VAN"
  };
  componentDidMount() {
    requestLocationPermission();
    navigator.geolocation.watchPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      error => this.setState({ error: error.message }),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10
      }
    );
  }
  smsButton = () => {
    this.getPhone();
  };

  getPhone = async () => {
    try {
      let actualUser = await AsyncStorage.getItem("actualUser");
      let response = await AsyncStorage.getItem(actualUser);
      if (response) {
        let response_parsed = JSON.parse(response);
        let one = response_parsed.ref_one;
        let two = response_parsed.ref_two;
        let three = response_parsed.ref_three;
        let four = response_parsed.ref_four;
        let five = response_parsed.ref_five;

        if (this.state.latitude) {
          SendSMS.send(
            {
              //Message body
              body:
                "Hola, mi ubicación es" +
                " https://www.google.com.mx/maps/@" +
                this.state.latitude +
                "," +
                this.state.longitude,
              //Recipients Number
              recipients: [one, two, three, four, five],
              //An array of types that would trigger a "completed" response when using android
              successTypes: ["sent", "queued"],
              allowAndroidSendWithoutReadPermission: true
            },
            (completed, cancelled, error) => {
              if (completed) {
                console.log("SMS Sent Completed");
              } else if (cancelled) {
                console.log("SMS Sent Cancelled");
              } else if (error) {
                console.log("Some error occured");
              }
            }
          );
        }
      }
    } catch (error) {
      alert(error);
    }
  };
  serviceButton = () => {};

  alertButton = () => {
    const args = {
      number: "911", // String value with the number to call
      prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call
    };
    call(args).catch(console.error);
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.title}> VAN</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.inputText}
            onChangeText={text => this.setState({ number: text })}
            underlineColorAndroid="#f4a40a"
            placeholder="Número de van"
            maxLength={5}
          />
          <TextInput
            style={styles.inputText}
            onChangeText={text => this.setState({ number: text })}
            underlineColorAndroid="#f4a40a"
            placeholder="Ruta"
          />
          <View style={styles.rowContainer}>
            <View style={{ marginLeft: "5%" }}>
              <Text style={{ color: "#000", fontWeight: "bold", fontSize: 20 }}>
                UNIDAD
              </Text>
            </View>
            <View style={{ width: "40%" }}>
              <Slider
                step={1}
                minimumValue={0}
                maximumValue={10}
                onValueChange={value => this.setState({ unit_value: value })}
              />
              <Text> {this.state.unit_value}</Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={{ marginLeft: "5%" }}>
              <Text style={{ color: "#000", fontWeight: "bold", fontSize: 20 }}>
                SERVICIO
              </Text>
            </View>
            <View style={{ width: "40%" }}>
              <Slider
                step={1}
                minimumValue={0}
                maximumValue={10}
                onValueChange={value => this.setState({ service_value: value })}
              />
              <Text> {this.state.service_value}</Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: "15%",
              marginTop: "5%"
            }}
          >
            <Text
              style={{
                marginTop: 10,
                color: "#000",
                fontWeight: "bold",
                fontSize: 25
              }}
            >
              {" "}
              COMENTARIO
            </Text>
            <TextInput
              style={{
                borderWidth: 3,
                fontWeight: "bold",
                borderColor: "#000",
                height: "30%",
                width: "80%",
                justifyContent: "center"
              }}
              onChangeText={text => this.setState({ comentario: text })}
              multiline={true}
              placeholder="Redacta tu comentario."
            />
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={styles.buttonSms}
              onPress={() => this.smsButton()}
            >
              <Text style={styles.buttonText}>SMS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonService}
              onPress={() => this.serviceButton()}
            >
              <Text style={styles.buttonText}> SERVICIO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonAlert}
              onPress={() => this.alertButton()}
            >
              <Text style={styles.buttonText}>ALERTA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Van;

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
    marginTop: "2%",
    width: "100%",

    flexDirection: "row",
    justifyContent: "space-between"
  },
  formContainer: {
    marginTop: "10%",
    width: "100%"
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
    width: "40%",
    marginLeft: "5%",
    marginTop: "3%",
    borderWidth: 3,
    fontWeight: "bold",
    borderColor: "#000"
  },
  buttonDiv: {
    marginTop: "15%",
    width: "100%",
    justifyContent: "center"
  },
  buttonSms: {
    backgroundColor: "#ffc701",
    padding: 10,
    width: "25%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFF",
    justifyContent: "center",
    borderRadius: 10
  },
  buttonService: {
    backgroundColor: "#022a31",
    padding: 10,
    width: "25%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFF",
    color: "#FFF",
    justifyContent: "center",
    borderRadius: 10
  },
  buttonAlert: {
    backgroundColor: "#ff0000",
    padding: 10,
    width: "25%",

    justifyContent: "center",
    borderRadius: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFF"
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
});
