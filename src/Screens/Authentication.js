// Package
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Modules
import SignIn from "../Modules/Authentication/SignIn";
import SignUp from "../Modules/Authentication/SignUp";

const Stack = createNativeStackNavigator();

export default function Authentication({ setSigned }) {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen name="Signin" options={{ headerShown: false }}>
          {(props) => <SignIn {...props} signed={setSigned} />}
        </Stack.Screen>
        <Stack.Screen name="Signup">
          {(props) => <SignUp {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
