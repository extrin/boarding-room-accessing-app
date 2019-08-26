import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Platform,
  ActivityIndicator,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import NfcManager, {Ndef} from 'react-native-nfc-manager';
import CustomIcon from '../components/CustomIcon';
import IconButton from '../components/IconButton';
import {DefaultHeaderLeft} from '../components/HeaderElement';
import Colors from '../constants/Colors';

export default class SearchNfcScreen extends React.Component {
  state = {
    supported: true,
    enabled: false,
    tag: {},
    text: '',
    roomTag: '',
    serverAddress: '',
  };

  static navigationOptions = ({navigation}) => ({
    title: 'Подождите...',
    headerLeft: <DefaultHeaderLeft onPress={navigation.navigate} />,
  });

  componentDidMount() {
    AsyncStorage.getItem('roomTag').then(roomTag =>
      roomTag
        ? this.setState({roomTag})
        : this.setState({roomTag: '0487828AEE3280'}),
    );
    AsyncStorage.getItem('serverAddress').then(serverAddress =>
      serverAddress
        ? this.setState({serverAddress})
        : this.setState({serverAddress: '10.2.0.3'}),
    );
    NfcManager.isSupported().then(supported => {
      this.setState({supported});
      if (supported) {
        this._startNfc();
      }
    });
  }

  componentWillUnmount() {
    if (this._stateChangedSubscription) {
      this._stateChangedSubscription.remove();
    }
    this._stopDetection();
  }

  render() {
    const {supported, enabled, tag, text} = this.state;
    if (this.state.enabled) this._startDetection();
    return (
      <ScrollView style={styles.container}>
        {!supported ? (
          <View style={styles.nfcAbsentContainer}>
            <Text>
              К сожалению, на вашем телефоне не поддерживается технология NFC.
              Сотрудники ресепшен с радостью предоставят вам электронный ключ
              для доступа в переговорную.
            </Text>
          </View>
        ) : !enabled ? (
          <View style={styles.nfcDisabledContainer}>
            <View style={styles.upperGroup}>
              <CustomIcon name="nfc-off" size={28} color={Colors.iconDefault} />
              <Text>
                На вашем телефоне отключен датчик NFC. Включите, пожалуйста,
                датчик NFC.
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <IconButton
                name="nfc-tap"
                text="Включить NFC"
                textStyle={styles.nfcText}
                backgroundColor={Colors.tintColor}
                onPress={this._goToNfcSetting}
              />
            </View>
          </View>
        ) : (
          <View style={styles.nfcEnabledContainer}>
            <Text>
              Приложите телефон к считывателю у двери переговорной комнаты...
            </Text>
            <ActivityIndicator size="large" color={Colors.tintColor} />
          </View>
        )}
      </ScrollView>
    );
  }

  _startNfc() {
    NfcManager.start({
      onSessionClosedIOS: () => {
        console.log('ios session closed');
      },
    })
      .then(result => {
        console.log('start OK', result);
      })
      .catch(error => {
        console.error('start fail', error);
        this.setState({supported: false});
      });

    if (Platform.OS === 'android') {
      NfcManager.getLaunchTagEvent()
        .then(tag => {
          console.log('launch tag', tag);
          if (tag) {
            this.setState({tag});
          }
        })
        .catch(err => {
          console.error(err);
        });
      NfcManager.isEnabled()
        .then(enabled => {
          this.setState({enabled});
        })
        .catch(err => {
          console.error(err);
        });
      NfcManager.onStateChanged(event => {
        if (event.state === 'on') {
          this.setState({enabled: true});
        } else if (event.state === 'off') {
          this.setState({enabled: false});
        } else if (event.state === 'turning_on') {
          // do whatever you want
        } else if (event.state === 'turning_off') {
          // do whatever you want
        }
      })
        .then(sub => {
          this._stateChangedSubscription = sub;
          // remember to call this._stateChangedSubscription.remove()
          // when you don't want to listen to this anymore
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  _goToNfcSetting() {
    if (Platform.OS === 'android') {
      NfcManager.goToNfcSetting()
        .then(result => {
          console.log('goToNfcSetting OK', result);
        })
        .catch(error => {
          console.error('goToNfcSetting fail', error);
        });
    }
  }

  _onTagDiscovered = tag => {
    console.log('Tag Discovered', tag);
    this.setState({tag});

    let text = tag.id;
    this.setState({text});

    if (this.state.text === this.state.roomTag) {
      const url = 'http://' + this.state.serverAddress + ':1880/open';
      fetch(url).then(
        Alert.alert(
          'Добро пожаловать!',
          'Входите!',
          [
            {
              text: 'OK',
              onPress: () => this.props.navigation.navigate('Manage'),
            },
          ],
          {cancelable: false},
        ),
      );
    } else
      Alert.alert(
        'Внимание!',
        'Вы пытаетесь войти в чужую комнату!',
        [{text: 'OK', onPress: () => this.props.navigation.navigate('Home')}],
        {cancelable: false},
      );
  };

  _startDetection = () => {
    NfcManager.registerTagEvent(this._onTagDiscovered)
      .then(result => {
        console.log('registerTagEvent OK', result);
      })
      .catch(error => {
        console.error('registerTagEvent fail', error);
      });
  };

  _stopDetection() {
    NfcManager.unregisterTagEvent()
      .then(result => {
        console.log('unregisterTagEvent OK', result);
      })
      .catch(error => {
        console.error('unregisterTagEvent fail', error);
      });
  }
}

const styles = StyleSheet.create({
  container: {},
  nfcAbsentContainer: {},
  nfcDisabledContainer: {},
  nfcEnabledContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  upperGroup: {},
  buttonContainer: {},
});
