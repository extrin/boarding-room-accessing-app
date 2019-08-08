import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

export default function ManageScreen() {
  return (
    <View>
      <WebView
        source={{ uri: "http://10.2.0.3:1880/ui/#!/0" }}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

ManageScreen.navigationOptions = {
  title: "Управление переговорной комнатой"
};
