import React from "react";
import { WebView } from "react-native-webview";
import { CustomStatusBar } from "../components/CustomStatusBar";

export default function ManageScreen() {
  return (
    <View>
      <CustomStatusBar />
      <WebView
        source={{ uri: "http://10.2.0.3:1880/ui/#!/0" }}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

ManageScreen.navigationOptions = {
  header: "Управление переговорной комнатой"
};
