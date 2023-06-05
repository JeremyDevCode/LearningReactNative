import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import StyledText from "./StyledText";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: "#E3E6E9",
    fontSize: 18,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <StyledText style={styles.text}>Repositories</StyledText>
    </View>
  );
};

export default AppBar;
