import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Slider
} from "react-native";

class Bus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      unit_value: 0,
      service_value: 0,
      comentario: ""
    };
  }
  static navigationOptions = {
    title: "Camión"
  };
  taxiSection = () => {
    this.props.navigation.navigate("Home");
  };

  busSection = () => {
    this.props.navigation.navigate("Type");
  };

  vanSection = () => {
    this.props.navigation.navigate("Type");
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.title}> CAMIÓN</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.inputText}
            onChangeText={text => this.setState({ number: text })}
            underlineColorAndroid="#FFF"
            placeholder="Número de camión"
            maxLength={5}
          />
          <TextInput
            style={styles.inputText}
            onChangeText={text => this.setState({ number: text })}
            underlineColorAndroid="#FFF"
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
                borderColor: "#000",
                borderWidth: 1,
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
              onPress={() => this.taxiSection()}
            >
              <Text style={styles.buttonText}>SMS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonService}
              onPress={() => this.taxiSection()}
            >
              <Text style={styles.buttonText}> SERVICIO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonAlert}
              onPress={() => this.taxiSection()}
            >
              <Text style={styles.buttonText}>ALERTA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Bus;

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
    borderWidth: 1,
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

    justifyContent: "center",
    borderRadius: 10
  },
  buttonService: {
    backgroundColor: "#022a31",
    padding: 10,
    width: "25%",
    color: "#FFF",
    justifyContent: "center",
    borderRadius: 10
  },
  buttonAlert: {
    backgroundColor: "#ff0000",
    padding: 10,
    width: "25%",

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
