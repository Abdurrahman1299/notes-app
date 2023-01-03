import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenType } from "../constants/constants";
// we put the button inside the veiw element to style it
const BackButton = ({ onButtonPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          onPress={() => onButtonPress(ScreenType.home)}
          color={"#444"}
          title="< back"
        />
      </View>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  button: {
    margin: 15,
  },
});
