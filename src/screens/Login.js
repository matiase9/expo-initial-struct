import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Button,
} from "react-native";
import signIn from "../hooks/user/signin";

const LoginScreen = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const onLoginHandler = () => {
    console.log(user, password);
    signIn(user, password);
  };
  return (
    <View>
      <SafeAreaView>
        <Text>Email</Text>
        <TextInput style={styles.input} onChangeText={setUser} value={user} />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <Button
          onPress={onLoginHandler}
          title="Login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => navigation.navigate("SignUp")}
          title="Create a new account"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginScreen;
