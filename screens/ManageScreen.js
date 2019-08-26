import React from 'react';
import {WebView} from 'react-native-webview';
import {ActivityIndicator, Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {DefaultHeaderLeft} from '../components/HeaderElement';

import Colors from '../constants/Colors';

export default class ManageScreen extends React.Component {
  state = {serverAddress: ''};

  static navigationOptions = ({navigation}) => ({
    title: 'Управление комнатой',
    headerLeft: <DefaultHeaderLeft onPress={navigation.navigate} />,
  });

  componentDidMount() {
    AsyncStorage.getItem('serverAddress').then(serverAddress => {
      serverAddress
        ? this.setState({serverAddress})
        : this.setState({serverAddress: '10.2.0.3'});
    });
  }

  render() {
    return (
      <WebView
        textZoom={100}
        startInLoadingState={true}
        source={{uri: `http://${this.state.serverAddress}:1880/ui/#!/0`}}
        renderError={errorName => <Error errorName={errorName} />}
        renderLoading={() => <Loading />}
      />
    );
  }
}

function Error(props) {
  return <Text>{props.errorName}</Text>;
}

function Loading(props) {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}>
      <ActivityIndicator size="large" color={Colors.tintColor} />
    </View>
  );
}
