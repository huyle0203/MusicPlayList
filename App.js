import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App({ navigation }) {
  return (
    <Button
      title="Home"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate('Home');
      }}
    />
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name ="Home" component={HomeScreen} />
      <Stack.Screen name ="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}