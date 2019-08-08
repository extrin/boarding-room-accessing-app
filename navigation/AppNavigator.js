import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen
});

export default createAppContainer(AppNavigator);
