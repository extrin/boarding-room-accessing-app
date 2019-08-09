import React from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  Text,
  Button,
  StyleSheet,
  View
} from "react-native";
import * as SecureStore from "expo-secure-store";

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
        <View style={styles.inputView}>
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
          <Button
            style={styles.acceptButton}
            onPress={() => {
              this._saveServerAddress(this.state.serverAddress).then(
                this._navigateToHomeScreen(this.props.navigation)
              );
            }}
            title="ПРИМЕНИТЬ"
            accessibilityLabel="Записать введенный адрес сервера"
          />
          <Button
            style={styles.cancelButton}
            onPress={() => this._navigateToHomeScreen(this.props.navigation)}
            title="ОТМЕНИТЬ"
            accessibilityLabel="Закрыть настройки, не изменять адрес сервера, вернуться на основной экран."
          />
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
    flex: 1
  },
  inputContainer: { margin: 20 },
  inputField: {
    fontSize: 25
  },
  inputLabel: {
    fontSize: 20
  },
  buttonsContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  acceptButton: { backgroundColor: "green" },
  cancelButton: { backgroundColor: "purple" }
});
