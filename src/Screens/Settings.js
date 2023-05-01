// Package
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Modules
import List from "../Modules/Settings/List";
import Token from "../Modules/Settings/Token";

const Stack = createNativeStackNavigator();

const Settings = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" options={{ headerShown: false }}>
          {(props) => <List {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Token" options={{ headerShown: true }}>
          {(props) => <Token {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Settings;
