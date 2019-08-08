import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ManageScreen from "../screens/ManageScreen";

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  Manage: ManageScreen
});

export default createAppContainer(AppNavigator);
