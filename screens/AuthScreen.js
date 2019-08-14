import React from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from "react-native";
import Colors from "../constants/Colors";

export default class AuthScreen extends React.Component {
  state = { password: "" };

  static navigationOptions = ({ navigation }) => ({
    headerStyle: { backgroundColor: Colors.divider, marginTop: -37 },
    headerTitleStyle: { fontWeight: "bold" },
    headerTintColor: Colors.secondaryText,
    title: "Введите пароль:",
    headerLeft: (
      <HeaderElement
        myOnPress={navigation.navigate}
        iconName={"ios-arrow-back-outline"}
        size={24}
        destination={"Home"}
      />
    )
  });

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
            placeholder="Password for Advanced Settings"
            clearButtonMode="while-editing"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.acceptButton}
            onPress={() => {
              this._validatePassword(this.state.password)
                ? this._navigateToSettings()
                : alert("Неверный пароль!");
            }}
          >
            <Text>ВПЕРЕД</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => this._navigateToHomeScreen()}
          >
            <Text>НАЗАД</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }

  _navigateToSettings = () => {
    this.props.navigation.navigate("Settings");
  };

  _navigateToHomeScreen = () => {
    this.props.navigation.navigate("Home");
  };

  _validatePassword = password => (password === "Polymedia10" ? true : false);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryLight
  },
  inputContainer: {
    margin: 5,
    padding: 10
  },
  inputField: {
    backgroundColor: "#ffffff",
    marginTop: 10,
    padding: 5,
    fontSize: 18,
    color: Colors.primaryText,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: Colors.divider
  },
  inputLabel: {
    fontSize: 20,
    color: Colors.primaryText
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    fontSize: 17
  },
  acceptButton: {
    backgroundColor: Colors.tintColor,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 15
  },
  cancelButton: {
    backgroundColor: Colors.divider,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 15
  }
});