// Package
import { useState, useEffect, Suspense } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Component
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/Components/Navigation";
import Loading from "./src/Components/Loading";

// Functions
import {
  CheckLocalStorage,
  HandleOnboardAction,
} from "./src/Functions/Onboard";

// Screens
import { Onboard, Authentication } from "./src/Screens/Index";

export default function App() {
  const [Onboarded, setOnboarded] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [showLoadingNavigation, setShowLoadingNavigation] = useState(true);
  const [SignedIn, setSignedIn] = useState(false);
  const [role, setRole] = useState();

  useEffect(() => {
    CheckLocalStorage(setOnboarded, setShowLoading, setSignedIn, setRole);
  }, [setOnboarded]);

  useEffect(() => {
    if (SignedIn) {
      setTimeout(() => {
        setShowLoadingNavigation(false);
      }, 2000);
    }
  }, [SignedIn]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        {showLoading ? (
          <Loading />
        ) : (
          <Suspense fallback={<Loading />}>
            {Onboarded ? (
              SignedIn ? (
                showLoadingNavigation ? (
                  <Loading />
                ) : (
                  <Navigation />
                )
              ) : (
                <Authentication setSigned={setSignedIn} />
              )
            ) : (
              <Onboard onGetStarted={() => HandleOnboardAction(setOnboarded)} />
            )}
          </Suspense>
        )}
      </NavigationContainer>
    </>
  );
}

// eas build -p android --profile preview (Build)
// expo publish
