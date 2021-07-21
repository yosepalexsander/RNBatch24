import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Home from "./src/screens/Home";
import Counter from "./src/screens/Counter";
import Houses from "./src/screens/Houses";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <Counter /> */}
      <Houses />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#032829",
  },
});
