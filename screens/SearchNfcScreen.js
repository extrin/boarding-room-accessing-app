import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import NfcManager, {Ndef} from 'react-native-nfc-manager';
import CustomIcon from '../components/CustomIcon';
import IconButton from '../components/IconButton';
import Colors from '../constants/Colors';

export default class SearchNfcScreen extends React.Component {
  state = {
    supported: true,
    enabled: false,
    tag: {},
  };

  componentDidMount() {
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
  }

  render() {
    let {supported, enabled, tag} = this.state;
    return (
      <ScrollView>
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
            <Text>{tag}</Text>
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
        console.warn('start fail', error);
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
          console.log(err);
        });
      NfcManager.isEnabled()
        .then(enabled => {
          this.setState({enabled});
        })
        .catch(err => {
          console.log(err);
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
          console.warn(err);
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
          console.warn('goToNfcSetting fail', error);
        });
    }
  }
}

SearchNfcScreen.navigationOptions = {
  title: 'Подождите...',
};

const styles = StyleSheet.create({
  nfcAbsentContainer: {},
  nfcDisabledContainer: {},
  nfcEnabledContainer: {},
  upperGroup: {},
  buttonContainer: {},
  nfcText: {},
});
