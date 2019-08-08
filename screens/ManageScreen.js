import React from "react";
import { WebView } from "react-native-webview";

export default function ManageScreen() {
  return (
    <WebView source={{ uri: "https://expo.io" }} style={{ marginTop: 20 }} />
  );
}

ManageScreen.navigationOptions = {
  header: "Управление переговорной комнатой"
};
