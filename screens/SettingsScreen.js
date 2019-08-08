import React from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  Text,
  Button,
  StyleSheet
} from "react-native";

export default class SettingsScreen extends React.Component {
  state = { text: "" };
  componentDidMount() {}

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.inputLabel}>Адрес сервера с интерфейсом</Text>
        <TextInput
          style={styles.inputField}
          keyboardType="number-pad"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          placeholder="UI server address"
        />
        <Button
          onPress={this._saveServerAddress}
          title="ПРИМЕНИТЬ"
          color="#841584"
          accessibilityLabel="Записать введенный адрес сервера"
        />
        <Button
          onPress={this._navigateToHomeScreen}
          title="ОТМЕНИТЬ"
          color="#841584"
          accessibilityLabel="Закрыть настройки, не изменять адрес сервера, вернуться на основной экран."
        />
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
    flex: 1,
    backgroundColor: "#ffffff"
  },
  inputField: {
    fontSize: 25
  },
  inputLabel: {
    fontSize: 20
  }
});
