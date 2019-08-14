import React from "react";
import { Platform, StatusBar } from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ManageScreen from "../screens/ManageScreen";
import AuthScreen from "../screens/AuthScreen";
import Colors from "../constants/Colors";

const AuthSwitch = createSwitchNavigator(
  {
    Secure: createStackNavigator({ AuthScreen }),
    Settings: createStackNavigator({ SettingsScreen })
  },
  {
    initialRouteName: "Secure",
    navigationOptions: { header: null }
  }
);

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Auth: AuthSwitch,
    Manage: ManageScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.divider,
        marginTop: -37
      },
      headerTintColor: Colors.secondaryText,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default createAppContainer(AppNavigator);
