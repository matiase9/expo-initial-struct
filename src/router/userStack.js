import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import SettingsScreen from "../screens/Settings";
const Stack = createNativeStackNavigator();

const UserStack = (user) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: "#0e1529",
          },
          //headerShown: false for the moment
          initialRouteName: "Home",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ user: user }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          initialParams={{ user: user }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UserStack;
