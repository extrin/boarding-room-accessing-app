import React from 'react';
import {WebView} from 'react-native-webview';
import {ActivityIndicator, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Colors from '../constants/Colors';

export default class ManageScreen extends React.Component {
  state = {serverAddress: '10.2.0.3'};

  componentDidMount() {
    AsyncStorage.getItem('serverAddress').then(res => {
      res ? this.setState({serverAddress: res}) : '10.2.0.3';
    });
  }

  render() {
    return (
      <WebView
        textZoom={100}
        startInLoadingState={true}
        source={{uri: `http://${this.state.serverAddress}:1880/ui/#!/0`}}
        renderError={errorName => <Error errorName={errorName} />}
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color={Colors.tintColor}
            style={{alignSelf: 'center'}}
          />
        )}
      />
    );
  }
}

ManageScreen.navigationOptions = {
  title: 'Управление комнатой',
};

function Error(props) {
  return <Text>{props.errorName}</Text>;
}
