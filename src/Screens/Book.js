// Package
import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Modules
import List from "../Modules/Book/List";
import Details from "../Modules/Book/Details";

const Stack = createNativeStackNavigator();

const Book = ({ navigation }) => {
  const [selectedTeacher, setSelectedTeacher] = useState(0);
  const [userToken, setUserToken] = useState({
    regular: 0,
    brainPop: 0,
  });

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" options={{ headerShown: false }}>
          {(props) => (
            <List
              {...props}
              redirect={navigation}
              setSelected={setSelectedTeacher}
              setToken={setUserToken}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Details" options={{ headerShown: true }}>
          {(props) => (
            <Details {...props} selected={selectedTeacher} token={userToken} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Book;
