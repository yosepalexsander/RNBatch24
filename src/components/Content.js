import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "../styles/style";

export default function Content() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Welcome to Dumbways.id Batch 24</Text>
      </ScrollView>
    </View>
  );
}
