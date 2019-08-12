import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ManageScreen from "../screens/ManageScreen";
import Colors from "../constants/Colors";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
    Manage: ManageScreen
  },
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
