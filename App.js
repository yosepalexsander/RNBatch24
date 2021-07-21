import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import Home from "./src/screens/Home";
import Counter from "./src/screens/Counter";
import Houses from "./src/screens/Houses";
import Theme from "./src/screens/Theme";
export default function App() {
  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        bg="#e6e6e6"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        {/* <Home /> */}
        {/* <Counter /> */}
        {/* <Houses /> */}
        <Theme />
        <StatusBar style="auto" />
      </Box>
    </NativeBaseProvider>
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
