import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const AddNoteScreen = ({onSave}) => {
  const [enteredText, setEnteredText] = useState("");
  const handleChange = (value) => {
    setEnteredText(value);
  };
  const handlePress = () => {
    if(enteredText.trim().length > 0){
      onSave(enteredText);
    }
  };
  return (
    <View style={styles.container}>
      {/* we made a veiw element so that we can make it has the full length and width of the screen */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Add Note</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Add A Note"
            onChangeText={handleChange}
          />
        </View>
        <Button title="add" onPress={handlePress} />
      </View>
    </View>
  );
};

export default AddNoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
  },
  input: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    fontSize: 16,
    padding: 8,
  },
});
