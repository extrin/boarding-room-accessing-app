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
import Colors from "../constants/Colors";
import CustomIcon from "../components/CustomIcon";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={this._openAdvancedSettings}>
              <CustomIcon name="md-settings" />
            </TouchableOpacity>
          </View>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Ваша переговорная комната</Text>
            <Image
              source={require("../assets/images/vip.png")}
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.externalLinkContainer}>
            <TouchableOpacity style={styles.externalLink}>
              <Text style={styles.externalLinkText} onPress={this._handleTouch}>
                УПРАВЛЯТЬ
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  _handleTouch = () => {
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
    backgroundColor: Colors.primaryDark
  },
  headerContainer: {
    alignSelf: "flex-end",
    marginTop: 10,
    marginRight: 10
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
  welcomeText: {
    fontSize: 25,
    color: Colors.primaryText,
    lineHeight: 24,
    textAlign: "center",
    paddingTop: 15
  },
  externalLinkContainer: {
    alignItems: "center"
  },
  externalLink: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 15,
    backgroundColor: Colors.primaryLight,
    borderStyle: "dotted",
    borderWidth: 2,
    borderColor: Colors.divider,
    borderRadius: 15
  },
  externalLinkText: {
    fontSize: 25,
    color: Colors.primaryDark
  }
});
