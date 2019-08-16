import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from 'react-native';

export default function IconButton(props) {
  const {name, backgroundColor, text, textStyle, onPress} = props;
  return (
    <Icon.Button
      name={name}
      backgroundColor={backgroundColor}
      onPress={() => onPress()}>
      <Text style={textStyle}>{text}</Text>
    </Icon.Button>
  );
}
