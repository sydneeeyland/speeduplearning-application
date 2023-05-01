// Package
import { useState, useEffect } from "react";

// Components
import {
  View,
  Image,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

// Images
import Hero from "../../Assets/SignIn-Hero2.png";

// Styles
import { SignUpStyle } from "../../Assets/Styles/SignUp";

// Functions
import { HandleSignUp } from "../../Functions/Authentication";

// Custom Hooks
import { useChange } from "../../Hooks/CustomHooks";

const SignUp = ({ navigation }) => {
  const [disabled, setDisabled] = useState(true);
  const [showLoading, setShowLoading] = useState(false);
  const [payload, setPayload] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    role: "student",
  });

  useEffect(() => {
    if (
      payload.firstName !== "" &&
      payload.lastName !== "" &&
      payload.email !== "" &&
      payload.username !== "" &&
      payload.password !== ""
    ) {
      setDisabled(false);
    }
  }, [payload]);
  return (
    <ScrollView style={{ backgroundColor: "#ffffff" }}>
      <View style={SignUpStyle.imageContainer}>
        <Image source={Hero} style={SignUpStyle.image} />
      </View>
      <View style={SignUpStyle.container}>
        <View style={SignUpStyle.inputContainer}>
          <Text style={SignUpStyle.inputLabel}>First name</Text>
          <TextInput
            style={SignUpStyle.inputText}
            onChangeText={(e) => useChange("firstName", e, setPayload)}
          />
        </View>
        <View style={SignUpStyle.inputContainer}>
          <Text style={SignUpStyle.inputLabel}>Last name</Text>
          <TextInput
            style={SignUpStyle.inputText}
            onChangeText={(e) => useChange("lastName", e, setPayload)}
          />
        </View>
        <View style={SignUpStyle.inputContainer}>
          <Text style={SignUpStyle.inputLabel}>Email </Text>
          <TextInput
            style={[SignUpStyle.inputText]}
            onChangeText={(e) => useChange("email", e, setPayload)}
          />
        </View>
        <View style={SignUpStyle.inputContainer}>
          <Text style={SignUpStyle.inputLabel}>Username</Text>
          <TextInput
            style={[SignUpStyle.inputText]}
            onChangeText={(e) => useChange("username", e, setPayload)}
          />
        </View>
        <View style={SignUpStyle.inputContainer}>
          <Text style={SignUpStyle.inputLabel}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={SignUpStyle.inputText}
            onChangeText={(e) => useChange("password", e, setPayload)}
          />
        </View>

        <View style={SignUpStyle.buttonContainer}>
          <TouchableOpacity
            style={[SignUpStyle.button]}
            disabled={disabled}
            onPress={() =>
              HandleSignUp(setShowLoading, payload, setDisabled, navigation)
            }
          >
            {showLoading ? (
              <ActivityIndicator size="small" color="#0000ff" />
            ) : (
              <Text>Create Account</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
