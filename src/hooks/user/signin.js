import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { Alert } from "react-native";

export default signIn = (user, password) => {
  console.log("Entra al signIn");

  const auth = getAuth();
  console.log("pasa");
  signInWithEmailAndPassword(auth, user, password)
    .then((userCredential) => {
      console.log("Login: ", userCredential);
      return userCredential;
    })
    .catch((error) => {
      Alert.alert(error.message);
    });

  return "no";
};
