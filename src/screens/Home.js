import React from "react";
import { Text, View, Button } from "react-native";

const HomeScreen = ({ route, navigation }) => {
  const { user } = route.params;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
      }}
    >
      <Text>Hi, {user.user.email} </Text>
      <Button
        onPress={() => navigation.navigate("Settings")}
        title="Settings"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default HomeScreen;
