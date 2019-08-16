import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import Colors from '../constants/Colors';
import CustomIcon from '../components/CustomIcon';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Ваша переговорная комната</Text>
            <Image
              source={require('../assets/images/vip.png')}
              style={styles.welcomeImage}
            />
          </View>
          <View style={styles.externalLinkContainer}>
            <TouchableOpacity
              style={styles.externalLink}
              onPress={this._openManagingScreen}>
              <Text style={styles.externalLinkText}>УПРАВЛЯТЬ</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={this._openAdvancedSettings}>
            <CustomIcon name="settings" size={26} color={Colors.iconDefault} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this._openNfcScreen}>
            <CustomIcon name="nfc" size={26} color={Colors.iconDefault} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _openManagingScreen = () => this.props.navigation.navigate('Manage');

  _openAdvancedSettings = () => this.props.navigation.navigate('Secure');

  _openNfcScreen = () => this.props.navigation.navigate('Nfc');
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryLight,
  },
  footerContainer: {
    alignSelf: 'flex-end',
    marginRight: 5,
    marginBottom: 5,
  },

  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    resizeMode: 'contain',
    width: 350,
    padding: 10,
  },
  welcomeText: {
    fontSize: 25,
    color: Colors.primaryText,
    lineHeight: 24,
    textAlign: 'center',
    paddingTop: 15,
  },
  externalLinkContainer: {
    alignItems: 'center',
  },
  externalLink: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 15,
    backgroundColor: Colors.tintColor,
    borderRadius: 15,
  },
  externalLinkText: {
    fontSize: 25,
    color: Colors.primaryText,
  },
});
