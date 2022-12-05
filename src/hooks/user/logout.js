import { signOut, getAuth } from "firebase/auth";
import { Alert } from "react-native";

export default Logout = () => {
  console.log("Entra al signIn");

  const auth = getAuth();
  console.log("pasa");
  signOut(auth)
    .then((userCredential) => {
      console.log("Logout: ", userCredential);
      return userCredential;
    })
    .catch((error) => {
      Alert.alert(error.message);
    });
};
