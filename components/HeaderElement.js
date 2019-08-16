import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import CustomIcon from './CustomIcon';
import Colors from '../constants/Colors';

export function HeaderElement(props) {
  const {
    myOnPress,
    size,
    color,
    iconName,
    destination,
    location = 'flex-start',
  } = props;
  return (
    <View style={styles.innerContainer}>
      <TouchableOpacity onPress={() => myOnPress(destination)}>
        <View style={[styles.touch, {justifyContent: location}]}>
          <CustomIcon
            name={iconName}
            size={size}
            style={{padding: 5, marginLeft: 10}}
            color={color}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touch: {
    width: 30,
    flexDirection: 'row',
  },
});

export const DefaultHeaderLeft = props => (
  <HeaderElement
    myOnPress={props.onPress}
    iconName={'home'}
    size={24}
    destination={'Home'}
    color={Colors.secondaryText}
  />
);
