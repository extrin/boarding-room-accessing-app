import React from "react";
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

const AuthSwitch = createSwitchNavigator({
  Auth: AuthScreen,
  Settings: SettingsScreen
});

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Secure: AuthSwitch,
    Manage: ManageScreen
  },
  { initialRouteName: "Home" },
  {
    defaultNavigationOptions: {
      headerTintColor: Colors.iconDefault,
      headerTitleStyle: {
        fontWeight: "bold",
        marginTop: -37
      },
      headerLeftContainerStyle: {
        marginTop: -37
      },
      headerStyle: {
        backgroundColor: Colors.divider,
        height: 15
      }
    }
  }
);

export default createAppContainer(AppNavigator);
