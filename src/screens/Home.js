import React from "react";
import { View, Text } from "react-native";
import Content from "../components/Content";
import Headers from "../components/Headers";
import styles from "../styles/style";

export default function Home() {
  return (
    <View style={styles.container}>
      <Headers title="Home Screen" />
      <Content />
    </View>
  );
}
