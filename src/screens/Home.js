import { Button } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import Content from "../components/Content";
import Headers from "../components/Headers";
import styles from "../styles/style";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Headers title="Home Screen" />
      <Button onPress={() => navigation.navigate("Counter")}>
        Go to Counter
      </Button>
      <Content />
    </View>
  );
}
