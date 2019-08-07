import * as WebBrowser from "expo-web-browser";
import React from "react";
import { ScrollView, StyleSheet, Image, Text, View } from "react-native";
import Touchable from "react-native-platform-touchable";
import { Ionicons } from "@expo/vector-icons";

export default function LinksScreen() {
  return <ScrollView style={styles.container} />;
}

LinksScreen.navigationOptions = {
  title: "Links"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
