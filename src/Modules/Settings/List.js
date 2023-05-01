// Package
import AsyncStorage from "@react-native-async-storage/async-storage";

// Components
import { View, Text, TouchableOpacity } from "react-native";

// Style
import { SettingsStyles } from "../../Assets/Styles/Settings";

const List = ({ navigation }) => {
  const Options = {
    student: [
      {
        name: "Request Token",
        action: () => console.log("a"),
      },
    ],
  };

  const RemoveLocalStorage = async () => {
    await AsyncStorage.removeItem("@user");
    await AsyncStorage.removeItem("@role");
    await AsyncStorage.removeItem("@OnboardSuccess");
  };

  return (
    <View style={SettingsStyles.wrapper}>
      <View style={SettingsStyles.optionsContainer}>
        <Text style={SettingsStyles.optionHeading}>User</Text>
        {Options["student"].map((key) => (
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
  );
};

export default List;
