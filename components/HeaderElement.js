import React from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import CustomIcon from "../CustomIcon";

export default function HeaderElement(props) {
  const {
    myOnPress,
    size,
    iconName,
    destination,
    location = "flex-start"
  } = props;
  return (
    <View style={styles.innerContainer}>
      <TouchableHighlight onPress={() => myOnPress(destination)}>
        <View style={[styles.touch, { justifyContent: location }]}>
          <CustomIcon name={iconName} size={size} style={{ padding: 5 }} />
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  touch: {
    width: 30,
    flexDirection: "row"
  }
});
