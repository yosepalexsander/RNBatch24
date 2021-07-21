import React from "react";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeBaseProvider, Button } from "native-base";

// screens
import Home from "./src/screens/Home";
import Counter from "./src/screens/Counter";
import Houses from "./src/screens/Houses";
import Theme from "./src/screens/Theme";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs({ navigation, route }) {
  function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";

    switch (routeName) {
      case "Home":
        return "Home Screen";
      case "Theme":
        return "Theme Screen";
      case "House":
        return "House Screen";
    }
  }
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Theme") {
            iconName = focused ? "ios-planet" : "ios-planet-outline";
          } else {
            iconName = focused
              ? "ios-document-text"
              : "ios-document-text-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#f368e0",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Theme" component={Theme} />
      <Tab.Screen name="House" component={Houses} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Tabs}
            options={{
              headerStyle: {
                backgroundColor: "#f368e0",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "My home",
              headerStyle: {
                backgroundColor: "#f368e0",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Counter"
            component={Counter}
            options={{
              title: "Counter Screen",
              headerStyle: {
                backgroundColor: "#f368e0",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Home /> */}
      {/* <Counter /> */}
      {/* <Houses /> */}
      {/* <Theme /> */}
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
