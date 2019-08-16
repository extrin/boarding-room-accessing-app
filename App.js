/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar, StyleSheet, View, Text} from 'react-native';
import Colors from './constants/Colors';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  state = {
    statusBarHeight:
      Platform.OS === 'android'
        ? StatusBar.currentHeight || (Platform.Version < 23 ? 25 : 24)
        : 0,
  };

  render() {
    const {statusBarHeight} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Colors.primaryLight}
          translucent={true}
          barStyle="light-content"
        />
        <AppNavigator screenProps={{statusBarHeight}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
