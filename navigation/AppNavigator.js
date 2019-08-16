import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import {Platform, StatusBar} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ManageScreen from '../screens/ManageScreen';
import AuthScreen from '../screens/AuthScreen';
import Colors from '../constants/Colors';
import {headerHeight} from '../constants/Dimensions';
import {defaultNavigatorConfig} from '../constants/NavigatorConfig';

const AuthSwitch = createSwitchNavigator(
  {
    Secure: createStackNavigator(
      {AuthScreen},
      {defaultNavigationOptions: defaultNavigatorConfig},
    ),
    Settings: createStackNavigator(
      {SettingsScreen},
      {defaultNavigationOptions: defaultNavigatorConfig},
    ),
  },
  {
    initialRouteName: 'Secure',
    navigationOptions: {header: null},
  },
);

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Auth: AuthSwitch,
    Manage: ManageScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: defaultNavigatorConfig,
  },
);

export default createAppContainer(AppNavigator);
