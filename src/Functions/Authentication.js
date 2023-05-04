// Package
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Develop
// const baseUrl = "http://192.168.73.127:3000/speedup";

// Production
const baseUrl = "https://jellyfish-app-bn4ss.ondigitalocean.app/speedup";

export const HandleSignIn = async (
  setShowLoading,
  credentials,
  setDisabled,
  setShowIncorrect,
  signed
) => {
  setDisabled(true);
  setShowLoading(true);
  const request = await axios.post(`${baseUrl}/auth/login`, credentials);
  const response = await request.data;

  if (response.success) {
    setDisabled(false);
    setShowLoading(false);
    setShowIncorrect(response.success);
    signed(true);
    await AsyncStorage.setItem("@user", response.user);
    await AsyncStorage.setItem("@role", response.role);
  } else {
    setDisabled(false);
    setShowLoading(false);
    setShowIncorrect(response.success);
  }
};

export const HandleSignUp = async (
  setShowLoading,
  payload,
  setDisabled,
  navigation
) => {
  setShowLoading(true);
  setDisabled(true);
  const request = await axios.post(`${baseUrl}/auth/register`, payload);
  const response = await request.data;

  if (response.success) {
    navigation.navigate("Signin");
    alert("Register Complete, you may now log in.");
  } else {
    alert("Encountered an error while registering.");
  }
};
