import React from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Colors from '../constants/Colors';
import {DefaultHeaderLeft} from '../components/HeaderElement';

export default class SettingsScreen extends React.Component {
  state = {serverAddress: '', roomTag: ''};

  static navigationOptions = ({navigation}) => ({
    title: 'Расширенные настройки',
    headerLeft: <DefaultHeaderLeft onPress={navigation.navigate} />,
  });

  componentDidMount() {
    AsyncStorage.getItem('serverAddress').then(serverAddress =>
      serverAddress
        ? this.setState({serverAddress})
        : this.setState({serverAddress: '10.2.0.3'}),
    );
    AsyncStorage.getItem('roomTag').then(roomTag =>
      roomTag
        ? this.setState({roomTag})
        : this.setState({roomTag: '04525302D34980'}),
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
            onChangeText={text => this.setState({serverAddress: text})}
            value={this.state.serverAddress}
            placeholder="UI server address"
          />
          <Text style={styles.inputLabel}>NFC идентификатор комнаты</Text>
          <TextInput
            style={styles.inputField}
            keyboardType="default"
            onChangeText={text => this.setState({roomTag: text})}
            value={this.state.roomTag}
            placeholder="NFC room id"
          />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.acceptButton}
            onPress={() => {
              this._saveSettings().then(this._navigateToHomeScreen());
            }}>
            <Text>ПРИМЕНИТЬ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => this._navigateToHomeScreen()}>
            <Text>ОТМЕНИТЬ</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }

  _saveSettings = async () => {
    await AsyncStorage.setItem('serverAddress', this.state.serverAddress);
    await AsyncStorage.setItem('roomTag', this.state.roomTag);
    alert('Сохранено!');
  };

  _navigateToHomeScreen = navigation => this.props.navigation.navigate('Home');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryLight,
  },
  inputContainer: {
    margin: 5,
    padding: 10,
  },
  inputField: {
    backgroundColor: '#ffffff',
    marginTop: 10,
    padding: 5,
    fontSize: 25,
    color: Colors.primaryText,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: Colors.divider,
  },
  inputLabel: {
    fontSize: 20,
    color: Colors.primaryText,
  },
  buttonsContainer: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  acceptButton: {
    backgroundColor: Colors.tintColor,
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
  },
  cancelButton: {
    backgroundColor: Colors.divider,
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
  },
});
