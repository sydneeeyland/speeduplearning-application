import { StyleSheet } from "react-native";

export const DetailsStyle = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#ffffff",
  },
  headerCard: {
    paddingTop: 20,
    paddingLeft: 35,
    paddingRight: 35,
  },
  greetingsContainer: {
    display: "flex",
    flexDirection: "row",
  },
  greetingsLabel: {
    marginBottom: 25,
    width: "80%",
    marginTop: 5,
  },
  greetingsAccountImageContainer: {
    marginBottom: 25,
    width: "25%",
    alignItems: "flex-end",
  },
  greetingsAccountImage: {
    width: 30,
    height: 30,
  },
  tokenContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    marginLeft: 30,
    marginRight: 30,
  },
  tokenCard: {
    flex: 1,
    height: 180,
    borderRadius: 8,
    backgroundColor: "#eae9e9",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#e2dede",
    borderWidth: 1,
  },
  teacherImage: {
    width: 75,
    height: 75,
  },
  tokenCount: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 21,
  },
  tokenDescription: {
    fontWeight: "bold",
  },
  formContainer: {
    marginLeft: 35,
    marginRight: 35,
    padding: 20,
    marginTop: 20,
    borderRadius: 12,
    backgroundColor: "#eae9e9",
    borderColor: "#e2dede",
    borderWidth: 1,
    height: "auto",
  },
  formInputWrapper: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  flexInputAuto: {
    flex: 1,
  },
  flexInputTextArea: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    height: 100,
  },
  formTextArea: {
    paddingLeft: 5,
  },
  formHeading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  requestResponseText: {
    textAlign: "center",
    color: "whitesmoke",
    fontWeight: "bold",
  },
});
