import { StyleSheet } from "react-native";

export const HomeStyle = StyleSheet.create({
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
  todayClassContainer: {
    width: "100%",
    backgroundColor: "#fffff",
    borderColor: "#e2dede",
    borderWidth: 1,
    marginTop: 30,
    height: 240,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    padding: 15,
  },
  todayClassScheduleContainer: {
    marginTop: 25,
    marginLeft: 15,
  },
  todayClassSChedule: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
  todayClassScheduleBadge: {
    width: 40,
    height: 40,
  },
  todayClassLabel: {
    fontWeight: "bold",
    fontSize: 16,
  },
  todayClassDescriptionContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    marginTop: 2,
  },
  todayClassDescription: {
    flexDirection: "row",
    gap: 5,
  },
  todayClassDescriptionImage: {
    width: 20,
    height: 20,
  },
  tomorrowClassContainer: {
    width: "100%",
    backgroundColor: "#F0F9FF",
    borderColor: "#e2dede",
    borderWidth: 1,
    height: 260,
    padding: 15,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    marginTop: -20,
  },
  notchCenter: {
    alignItems: "center",
  },
  notch: {
    width: 50,
    backgroundColor: "#6c6161",
    height: 5,
    borderRadius: 16,
  },
  classHeaderContainer: {
    display: "flex",
    flexDirection: "row",
  },
  classHeaderSeeAllButton: {
    width: 70,
    borderColor: "#e2dede",
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 16,
  },
  classHeaderTitle: {
    flex: 1,
    fontSize: 17,
    fontWeight: "bold",
  },
  classScheduleSeparator: {
    marginTop: 25,
    marginBottom: 25,
    borderBottomColor: "#A6A1A1",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
