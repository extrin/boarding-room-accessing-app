import React from "react";
import { StatusBar } from "react-native";
import Colors from "../constants/Colors";

export default function CustomStatusBar() {
  return (
    <StatusBar
      barStyle="light-content"
      translucent={true}
      backgroundColor={Colors.primary}
    />
  );
}
