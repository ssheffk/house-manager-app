import React from "react";
import { StyleSheet, TextInput, Button } from "react-native";

const SignIn = ({ route }: any) => {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const { updateState } = route.params;

  const handleLogin = () => {
    // Custom logic to check login details
    const isSignedIn = password.length + username.length > 5; // Example condition

    if (isSignedIn) {
      updateState(true); // Update the state in the App component
    }
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
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} />
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
