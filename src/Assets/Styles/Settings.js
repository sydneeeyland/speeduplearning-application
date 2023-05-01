import { StyleSheet } from "react-native";

export const SettingsStyles = StyleSheet.create({
  wrapper: {
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonOptions: {
    backgroundColor: "#ffffff",
    height: 30,
    padding: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e2dede",
    paddingLeft: 10,
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  optionHeading: {
    fontWeight: "bold",
  },
});
