// Package
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CheckLocalStorage = async (
  setOnboarded,
  setShowLoading,
  setSignedIn
) => {
  try {
    const OnboardStatus = await AsyncStorage.getItem("@OnboardSuccess");
    OnboardStatus ? setOnboarded(true) : setOnboarded(false);

    const SignedStatus = await AsyncStorage.getItem("@user");
    SignedStatus ? setSignedIn(true) : setSignedIn(false);

    // await AsyncStorage.removeItem("@user");
    // await AsyncStorage.removeItem("@role");
    // await AsyncStorage.removeItem("@OnboardSuccess");

    setShowLoading(false);
  } catch (err) {
    console.log(err);
  }
};

export const HandleOnboardAction = async (setOnboarded) => {
  await AsyncStorage.setItem("@OnboardSuccess", "true");
  setOnboarded(true);
};
