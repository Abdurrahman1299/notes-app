import { Pressable, Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { ScreenType } from "../constants/constants";

const HomeScreen = ({onExit}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => onExit(ScreenType.addNote)}>
        <View style={styles.itemButton}>
          <Text style={styles.title}>Create Some Note</Text>
          <Icon name="arrow-forward-outline" style={styles.arrow} />
        </View>
      </Pressable>
      <Pressable onPress={() => onExit(ScreenType.allNotes)}>
        <View style={styles.itemButton}>
          <Text style={styles.title}>View All Notes</Text>
          <Icon name="arrow-back-outline" style={styles.arrow} />
        </View>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 40,
  },
  itemButton: {
    width: Dimensions.get("window").width - 100,
    height: "50%",
    marginVertical: 30,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  arrow: {
    fontSize: 23,
    paddingTop: 20,
  },
});
