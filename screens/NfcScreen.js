import React from 'react';
import {View} from 'react-native';
import NfcComponent from '../components/NfcComponent';

export default function NfcScreen(props) {
  return <NfcComponent />;
}

NfcScreen.navigationOptions = {
  title: 'Управление NFC',
};
