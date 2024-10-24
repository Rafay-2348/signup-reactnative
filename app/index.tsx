import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const SignupForm = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");

  const btn = () => {
    if (!input || !password) {
      Alert.alert("Alert", "Please fill in all the fields.");
    } else {
      setInput("");
      setPassword("");
    }
  };

  return (
    <View style={styles.div}>
      <Text style={styles.heading}>Login Page</Text>
      <TextInput
        style={styles.input1}
        placeholder="Enter Your Email"
        keyboardType="email-address"
        clearTextOnFocus
        placeholderTextColor="white"
        value={input}
        onChangeText={setInput}
        selectionColor="white"
        autoComplete="email"
        autoCorrect
        importantForAutofill="yes"
      />
      <TextInput
        style={styles.input2}
        placeholder="Enter your Password"
        keyboardType="default"
        placeholderTextColor="white"
        value={password}
        onChangeText={setPassword}
        selectionColor="white"
        secureTextEntry
        autoComplete="password"
        autoCorrect={false}
        importantForAutofill="yes"
      />
      <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={btn}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <Text
        style={{
          marginTop: 20,
          fontSize: 25,
          color: "white",
        }}
      >
        -------------- or-------------
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 30,
          marginTop: 20,
        }}
      >
        <AntDesign
          name="google"
          size={30}
          color="black"
          style={{
            borderWidth: 2,
            borderColor: "white",
            padding: 8,
            borderRadius: 5,
          }}
        />
        <Entypo
          name="facebook"
          size={30}
          color="black"
          style={{
            borderWidth: 2,
            borderColor: "white",
            padding: 8,
            borderRadius: 5,
          }}
        />
        <FontAwesome
          name="github-square"
          size={35}
          color="black"
          style={{
            borderWidth: 2,
            borderColor: "white",
            padding: 8,
            borderRadius: 5,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#4ad3e6",
  },
  input1: {
    borderColor: "white",
    height: 45,
    width: 320,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 6,
    color: "white",
  },
  input2: {
    width: 320,
    borderRadius: 6,
    borderColor: "white",
    height: 45,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    color: "white",
  },
  heading: {
    fontSize: 40,
    marginBottom: 30,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  btn: {
    alignItems: "center",
    padding: 10,
    width: 250,
    borderRadius: 5,
    backgroundColor: "white",
    marginTop: 15,
  },
  btnText: {
    color: "#4ad3e6", // Button text color
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignupForm;