import { StyleSheet } from "react-native";

export const SignInStyle = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  hero: {
    width: 250,
    height: 250,
    marginTop: 70,
  },
  slogan: {
    fontSize: 26,
    fontWeight: "bold",
  },
  sloganMuted: {
    fontSize: 14,
    marginTop: 20,
    color: "#C2BEBE",
  },
  inputContainer: {
    backgroundColor: "#EBF7FF",
    width: "80%",
    height: 50,
    marginTop: 40,
    borderRadius: 15,
    alignItems: "center",
    padding: 10,
    paddingLeft: 30,
    display: "flex",
    flexDirection: "row",
  },
  inputIcon: {
    width: 25,
    height: 25,
  },
  inputText: {
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 9,
    width: "80%",
  },
  button: {
    marginTop: 25,
    backgroundColor: "#ffd952",
    width: "50%",
    alignItems: "center",
    padding: 12,
    borderRadius: 16,
  },
  signInText: {
    color: "#0b2d48",
    fontSize: 16,
  },
  signUpContainer: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    gap: 5,
    marginBottom: 20,
  },
  signUpText: {
    color: "#ffd952",
    fontWeight: "bold",
  },
  incorrectFeedBackContainer: {
    height: 30,
    width: 250,
    marginTop: 20,
    borderRadius: 6,
    backgroundColor: "#EBF7FF",
    justifyContent: "center",
    alignItems: "center",
  },
  incorrectFeedBack: {
    color: "#ff3333",
    fontStyle: "italic",
  },
});
