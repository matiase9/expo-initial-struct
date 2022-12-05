import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Alert } from "react-native";

export default createUser = (user, password) => {
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, user, password)
    .then((userCredential) => {
      console.log("User created: ", userCredential);
    })
    .catch((error) => {
      Alert.alert(error.message);
    });
};
