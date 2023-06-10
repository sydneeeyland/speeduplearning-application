import { StyleSheet } from "react-native";

export const ListStyle = StyleSheet.create({
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
  tokenImage: {
    width: 45,
    height: 45,
  },
  tokenCount: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 21,
  },
  tokenDescription: {
    fontWeight: "bold",
  },
  listContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "100%",
    flexWrap: "wrap",
    overflow: "hidden",
    gap: 15,
  },
  listItem: {
    backgroundColor: "whitesmoke",
    borderWidth: 1,
    borderColor: "#e2dede",
    height: "auto",
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
  },
  listItemImage: {
    width: 55,
    height: 55,
    marginBottom: 7,
  },
  listItemSelectDate: {
    backgroundColor: "#cdcdcd",
    padding: 5,
    borderRadius: 6,
  },
  listItemSelectDateText: {
    textAlign: "center",
  },
});
