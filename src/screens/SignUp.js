import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Button,
} from "react-native";
import createUser from "../hooks/user/create";

const SignUpScreen = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const onSignUpHandler = () => {
    console.log(user, password);
    createUser(user, password);
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
        <Text>Confirm Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setCheckPassword}
          value={checkPassword}
          secureTextEntry
        />
        <Button
          onPress={onSignUpHandler}
          title="SignUp"
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

export default SignUpScreen;
