import React from "react";
import { WebView } from "react-native-webview";

export default function ManageScreen() {
  return (
    <WebView
      source={{ uri: "http://10.2.0.3:1880/ui/#!/0" }}
      style={{ marginTop: 20 }}
    />
  );
}

ManageScreen.navigationOptions = {
  header: "Управление переговорной комнатой"
};
