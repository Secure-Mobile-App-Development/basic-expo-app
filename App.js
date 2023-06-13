import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Pressable,
} from "react-native";

const App = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    confirmPass: "",
  });

  const handleLogin = async () => {
    // TODO: Perform login logic here
    try {
      if (
        userDetails.username === "" ||
        userDetails.phoneNumber === "" ||
        userDetails.email === "" ||
        userDetails.password === ""
      )
        throw Error("Please fill all fields");
      if (userDetails.password !== userDetails.confirmPass)
        throw Error("Password and Confirm Password are not the same");
      Alert.alert("Great Work", "Page is running Successfully", [
        {
          text: "Cancel",
          onPress: () => "",
          style: "cancel",
        },
        { text: "OK", onPress: () => "" },
      ])
    } catch (error) {
      Alert.alert("Something Went Wrong", error.message, [
        {
          text: "Cancel",
          onPress: () => "",
          style: "cancel",
        },
        { text: "OK", onPress: () => "" },
      ]);
    }
  };

  return (
    <View style={styles.loginPageContainer}>
      <Text style={styles.title}>USER REGISTER</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          name="username"
          value={userDetails.username}
          onChangeText={(text) =>
            setUserDetails((prev) => {
              return { ...prev, username: text };
            })
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          name="email"
          value={userDetails.email}
          onChangeText={(text) =>
            setUserDetails((prev) => {
              return { ...prev, email: text };
            })
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          name="phoneNumber"
          value={userDetails.phoneNumber}
          onChangeText={(text) =>
            setUserDetails((prev) => {
              return { ...prev, phoneNumber: text };
            })
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          name="password"
          secureTextEntry={true}
          onChangeText={(text) =>
            setUserDetails((prev) => {
              return { ...prev, password: text };
            })
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          name="confirmPass"
          secureTextEntry={true}
          onChangeText={(text) =>
            setUserDetails((prev) => {
              return { ...prev, confirmPass: text };
            })
          }
        />
      </View>
      <Button onPress={handleLogin} title="Register" color="#0F52BA" />
    </View>
  );
};

const styles = StyleSheet.create({
  loginPageContainer: {
    flex: 1,
    backgroundColor: "#EAF2F8",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    width: 300,
    height: 40,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  input: {
    height: 40,
    padding: 10,
    fontSize: 16,
  },
});

export default App;
