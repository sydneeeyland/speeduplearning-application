import { StyleSheet } from "react-native";

export const OnboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  button: {
    marginTop: -70,
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    width: 350,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "500",
  },
  slidesContainer: {
    flex: 3,
  },
});
