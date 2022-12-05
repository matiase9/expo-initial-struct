import React from "react";
import { Text, View, Button } from "react-native";
import Logout from "../hooks/user/logout";

const SettingsScreen = ({ route, navigation }) => {
  const { user } = route.params;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
      }}
    >
      <Text>Setting use === , {user.user.email} </Text>
      <Button
        onPress={() => Logout()}
        title="SignOut"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default SettingsScreen;
