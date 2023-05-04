// Package
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Components
import { View, Text, TouchableOpacity } from "react-native";
import Loading from "../../Components/Loading";

// Style
import { SettingsStyles } from "../../Assets/Styles/Settings";

const List = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState("student");

  const Options = {
    student: [
      {
        name: "Request Token",
        action: () => console.log("a"),
      },
    ],
    teacher: [],
    admin: [
      {
        name: "Token",
        action: () => console.log("a"),
      },
      {
        name: "Users",
        action: () => console.log("a"),
      },
      {
        name: "Statistics",
        action: () => console.log("a"),
      },
      {
        name: "Promos",
        action: () => console.log("a"),
      },
      {
        name: "Chat logs",
        action: () => console.log("a"),
      },
    ],
  };

  useEffect(() => {
    const GetUserRole = async () => {
      const role = await AsyncStorage.getItem("@role");
      setUserRole(role);
      setLoading(false);
    };
    GetUserRole();
  }, []);

  const RemoveLocalStorage = async () => {
    await AsyncStorage.removeItem("@user");
    await AsyncStorage.removeItem("@role");
    await AsyncStorage.removeItem("@OnboardSuccess");
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View style={SettingsStyles.wrapper}>
          <View style={SettingsStyles.optionsContainer}>
            <Text style={SettingsStyles.optionHeading}>
              {userRole === "admin" ? "Manage" : "User"}
            </Text>
            {Options[userRole].map((key) => (
              <TouchableOpacity
                key={key.name}
                style={SettingsStyles.buttonOptions}
                onPress={key.action}
              >
                <Text>{key.name}</Text>
              </TouchableOpacity>
            ))}
            <Text style={SettingsStyles.optionHeading}>Application</Text>
            <TouchableOpacity
              style={SettingsStyles.buttonOptions}
              onPress={() => RemoveLocalStorage()}
            >
              <Text>Clear Cache</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default List;
