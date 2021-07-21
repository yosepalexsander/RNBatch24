import React, { Component, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  // function on change text event
  function onChangeText(value) {
    setName(value);
  }

  // function on submit input
  function onSubmit() {
    alert(`Hello ${name}, welcome to dumbways.id`);
  }
  return (
    <View style={isolateStyles.container}>
      {/* <Text style={isolateStyles.textCenter}>
        Tap the button + if you want to increment value and tap button - if you
        want to decrement value
      </Text>
      <Text style={{ ...isolateStyles.textCenter, fontSize: 36 }}>{count}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity
          onPress={decrement}
          style={isolateStyles.buttonDecrement}
        >
          <Text style={isolateStyles.textCenter}>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={increment}
          style={isolateStyles.buttonIncrement}
        >
          <Text style={isolateStyles.textCenter}>Increment</Text>
        </TouchableOpacity>
      </View> */}
      <Text style={{ ...isolateStyles.textCenter, marginBottom: 20 }}>
        Input your name
      </Text>
      <TextInput
        style={isolateStyles.input}
        onChangeText={onChangeText}
        value={name}
      />
      <TouchableOpacity
        onPress={onSubmit}
        style={isolateStyles.buttonIncrement}
      >
        <Text style={isolateStyles.textCenter}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
}

const isolateStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  textCenter: {
    textAlign: "center",
    color: "#fff",
  },
  buttonDecrement: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttonIncrement: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#15e5ea",
  },
  input: {
    backgroundColor: "#fff",
    color: "#032021",
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 10,
    width: "100%",
    marginBottom: 20,
  },
});
