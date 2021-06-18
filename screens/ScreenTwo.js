import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ScreenTwo = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text>{props.title} Test 2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ScreenTwo;