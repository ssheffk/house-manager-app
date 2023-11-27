import React from "react";
import { StyleSheet, TextInput, Button } from "react-native";

const SignIn = ({ navigation }: any) => {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const getIsSignedIn = (loginDetails: string) => {
    // custom logic
    return loginDetails.length >= 5;
  };
  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="password"
        textContentType="password"
      />
      <Button
        title="Login"
        onPress={() =>
          getIsSignedIn(password) ? navigation.navigate("Xomie") : false
        }
      />
    </>
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
export default SignIn;
