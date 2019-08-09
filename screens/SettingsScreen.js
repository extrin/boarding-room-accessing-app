import React from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from "react-native";
import * as SecureStore from "expo-secure-store";
import Colors from "../constants/Colors";

export default class SettingsScreen extends React.Component {
  state = { serverAddress: "" };

  componentDidMount() {
    SecureStore.getItemAsync("serverAddress").then(result =>
      result
        ? this.setState({ serverAddress: result })
        : this.setState({ serverAddress: "10.2.0.3" })
    );
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Адрес сервера с интерфейсом</Text>
          <TextInput
            style={styles.inputField}
            keyboardType="number-pad"
            onChangeText={text => this.setState({ serverAddress: text })}
            value={this.state.serverAddress}
            placeholder="UI server address"
          />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.acceptButton}
            onPress={() => {
              this._saveServerAddress(this.state.serverAddress).then(
                this._navigateToHomeScreen(this.props.navigation)
              );
            }}
          >
            <Text>ПРИМЕНИТЬ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => this._navigateToHomeScreen(this.props.navigation)}
          >
            <Text>ОТМЕНИТЬ</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }

  _saveServerAddress = async serverAddress => {
    await SecureStore.setItemAsync("serverAddress", serverAddress);
    alert("Сохранено!");
  };

  _navigateToHomeScreen = navigation => navigation.navigate("Home");
}

SettingsScreen.navigationOptions = {
  title: "Расширенные настройки"
};

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
    marginTop: 10,
    padding: 5,
    fontSize: 25,
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
    justifyContent: "space-around"
  },
  acceptButton: {
    backgroundColor: Colors.tintColor,
    alignItems: "center",
    padding: 10,
    borderRadius: 15
  },
  cancelButton: {
    backgroundColor: Colors.divider,
    alignItems: "center",
    padding: 10,
    borderRadius: 15
  }
});
