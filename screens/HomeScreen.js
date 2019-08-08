import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View>
            <Button
              title="Advanced Settings"
              onPress={this._openAdvancedSettings}
            />
          </View>
          <View style={styles.welcomeContainer}>
            <Text style={styles.getStartedText}>Ваша переговорная комната</Text>
            <Image
              source={require("../assets/images/vip.png")}
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity style={styles.helpLink}>
              <Text
                style={styles.helpLinkText}
                onPress={this._handlePressEnter}
              >
                ВОЙТИ
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  _handlePressEnter = () => {
    WebBrowser.openBrowserAsync("http://10.2.0.3:1880/ui/#!/0");
  };

  _openAdvancedSettings = () => this.props.navigation.navigate("Settings");
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20
  },
  welcomeImage: {
    resizeMode: "contain",
    width: 350,
    padding: 10
  },
  getStartedText: {
    fontSize: 25,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    paddingTop: 15
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 25,
    color: "#2e78b7"
  }
});
