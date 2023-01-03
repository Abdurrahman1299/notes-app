import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import AddNoteScreen from "./Screens/AddNoteScreen";
import AllNotesScreen from "./Screens/AllNotesScreen";
import { ScreenType } from "./constants/constants";
import BackButton from "./Components/BackButton";

export default function App() {
  const [screen, setScreen] = useState(ScreenType.home);
  const [notes, setNotes] = useState([]);

  let content;
  if (screen === ScreenType.addNote) {
    content = (
      <AddNoteScreen
        onSave={(data) => setNotes([...notes, { id: Date.now(), note: data }])}
      />
    );
  } else if (screen === ScreenType.allNotes) {
    content = <AllNotesScreen />;
  } else if (screen === ScreenType.home) {
    content = (
      <HomeScreen
        onExit={(data) => {
          setScreen(data);
        }}
      />
    );
  }

  console.log(notes);
  return (
    <View style={styles.container}>
      <Header />
      <BackButton onButtonPress={(data) => setScreen(data)} />
      <StatusBar style="auto" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
