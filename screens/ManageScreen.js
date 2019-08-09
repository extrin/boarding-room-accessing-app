import React from "react";
import { WebView } from "react-native-webview";
import { ActivityIndicator, Text } from "react-native";
import Colors from "../constants/Colors";

export default class ManageScreen extends React.Component {
  render() {
    return (
      <WebView
        textZoom={100}
        startInLoadingState={true}
        source={{ uri: "http://10.2.0.3:1880/ui/#!/0" }}
        renderError={errorName => <Error errorName={errorName} />}
        renderLoading={() => (
          <ActivityIndicator size="large" color={Colors.tintColor} />
        )}
      />
    );
  }
}

ManageScreen.navigationOptions = {
  title: "Управление комнатой"
};

function Error(props) {
  return <Text>{props.errorName}</Text>;
}
