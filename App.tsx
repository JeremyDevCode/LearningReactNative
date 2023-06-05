import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => alert("Hemos tocado el texto!")}>
        <Text style={styles.text}>Testing React Native!</Text>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#e3e6e8",
  },
});
