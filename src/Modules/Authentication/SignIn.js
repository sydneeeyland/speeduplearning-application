// Package
import { useEffect, useState } from "react";

// Component
import {
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

// Images
import Hero from "../../Assets/SignIn-Hero2.png";
import EmailFilled from "../../Assets/Icons/icon-Email-Filled-SignIn.png";
import PasswordFilled from "../../Assets/Icons/icon-Password-Filled-SignIn.png";

// Styles
import { SignInStyle } from "../../Assets/Styles/SignIn";

// Functions
import { HandleSignIn } from "../../Functions/Authentication";

// Custom Hooks
import { useChange } from "../../Hooks/CustomHooks";

const Signin = ({ navigation, signed }) => {
  const [showLoading, setShowLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [showIncorrect, setShowIncorrect] = useState(true);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (credentials.username !== "" && credentials.password !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [credentials]);

  return (
    <ScrollView style={{ backgroundColor: "#ffffff" }}>
      <View style={SignInStyle.container}>
        <View style={{ height: 350, width: "100%" }}>
          <Image source={Hero} style={SignInStyle.hero} />
        </View>
        <Text style={SignInStyle.slogan}>Connect to the</Text>
        <Text style={SignInStyle.slogan}>best mentors</Text>
        <Text style={SignInStyle.sloganMuted}>
          Book class and reach to our best teachers,
        </Text>
        <Text style={[SignInStyle.sloganMuted, { marginTop: 0 }]}>
          hassle free scheduling
        </Text>
        <View style={SignInStyle.inputContainer}>
          <Image source={EmailFilled} style={SignInStyle.inputIcon} />
          <TextInput
            style={SignInStyle.inputText}
            placeholder="Username"
            onChangeText={(e) => useChange("username", e, setCredentials)}
          />
        </View>
        <View style={[SignInStyle.inputContainer, { marginTop: 20 }]}>
          <Image source={PasswordFilled} style={SignInStyle.inputIcon} />
          <TextInput
            secureTextEntry={true}
            style={SignInStyle.inputText}
            placeholder="Password"
            onChangeText={(e) => useChange("password", e, setCredentials)}
          />
        </View>
        {!showIncorrect && (
          <View style={SignInStyle.incorrectFeedBackContainer}>
            <Text style={SignInStyle.incorrectFeedBack}>
              Incorrect Username or Password.
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={SignInStyle.button}
          onPress={() =>
            HandleSignIn(
              setShowLoading,
              credentials,
              setDisabled,
              setShowIncorrect,
              signed
            )
          }
          disabled={disabled}
        >
          {showLoading ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            <Text style={SignInStyle.signInText}>Sign In</Text>
          )}
        </TouchableOpacity>
        <View style={SignInStyle.signUpContainer}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={SignInStyle.signUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signin;
