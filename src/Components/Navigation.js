// Package
import { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Components
import { View, StyleSheet, Image } from "react-native";
import Loading from "./Loading";

// Constant
import { navigation } from "../Constant/Navigation";

// Variables
const Tab = createBottomTabNavigator();

const Navigation = () => {
  const [role, setRole] = useState("student");

  useEffect(() => {
    const GetRole = async () => {
      const UserRole = await AsyncStorage.getItem("@role");
      setRole(UserRole);
    };

    GetRole();
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      {navigation[role].map(
        ({ name, component: Component, icon, iconActive, headerShown }) => (
          <Tab.Screen
            key={name}
            name={name}
            options={() => ({
              headerShown: headerShown,
              tabBarIcon: ({ focused }) => (
                <View>
                  <Image
                    source={focused ? iconActive : icon}
                    style={styles.navigationIcon}
                  />
                </View>
              ),
            })}
          >
            {(props) => <Component {...props} />}
          </Tab.Screen>
        )
      )}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  navigationIcon: {
    width: 30,
    height: 30,
  },
});

export default Navigation;
