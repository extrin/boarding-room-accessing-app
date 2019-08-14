import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export default function CustomIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={props.size}
      color={props.focused ? Colors.tintColor : Colors.iconDefault}
    />
  );
}
