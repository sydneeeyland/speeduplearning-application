import { StyleSheet } from "react-native";

export const SignUpStyle = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    height: "100%",
    borderColor: "#dadada",
    borderWidth: 1,
    width: "100%",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 20,
  },
  label: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 220,
    height: 220,
  },
  inputContainer: {
    display: "flex",
    gap: 7,
    marginBottom: 20,
  },
  inputLabel: {
    fontWeight: "bold",
    fontSize: 16,
  },
  inputText: {
    backgroundColor: "#EBF7FF",
    height: 40,
    paddingLeft: 15,
    borderRadius: 8,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#ffd952",
    width: 120,
    height: 50,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
