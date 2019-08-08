import React from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  Text,
  Button,
  StyleSheet,
  View
} from "react-native";
import { CustomStatusBar } from "../components/CustomStatusBar";

export default class SettingsScreen extends React.Component {
  state = { text: "" };
  componentDidMount() {}

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <CustomStatusBar />
        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Адрес сервера с интерфейсом</Text>
          <TextInput
            style={styles.inputField}
            keyboardType="number-pad"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            placeholder="UI server address"
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            style={styles.acceptButton}
            onPress={this._saveServerAddress}
            title="ПРИМЕНИТЬ"
            accessibilityLabel="Записать введенный адрес сервера"
          />
          <Button
            style={styles.cancelButton}
            onPress={this._navigateToHomeScreen}
            title="ОТМЕНИТЬ"
            accessibilityLabel="Закрыть настройки, не изменять адрес сервера, вернуться на основной экран."
          />
        </View>
      </KeyboardAvoidingView>
    );
  }

  _saveServerAddress = () => {
    return 0;
  };

  _navigateToHomeScreen = () => this.props.navigation.navigate("Home");
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
