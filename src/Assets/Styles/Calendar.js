import { StyleSheet } from "react-native";

export const CalendarStyle = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
  },
  firstItem: {
    height: "auto",
    marginTop: 40,
    marginBottom: 10,
    padding: 10,
  },
  scheduleInfoContainer: {
    display: "flex",
    flexDirection: "row",
  },
  scheduleInfoTeacher: {
    flex: 1,
    fontWeight: "bold",
  },
  scheduleInfoTime: {
    flex: 1,
    textAlign: "right",
  },
  scheduleInfoType: {
    marginTop: 10,
  },
  scheduleInfoStatus: {
    marginTop: 10,
    flex: 1,
    textAlign: "right",
  },
  item: {
    height: "auto",
    marginBottom: 10,
    padding: 10,
  },
  noSchedulePlaceHolder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  noScheduleLabel: {
    fontWeight: "bold",
    fontSize: 24,
  },
  modalWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalContainer: {
    margin: 20,
    backgroundColor: "white",
    overflow: "scroll",
    width: "80%",
    height: "60%",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalCloseContainer: {
    alignItems: "center",
  },
  modalCloseButton: {
    width: "50%",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
  },
  modalCloseButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTextContentContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  modalTextContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 10,
  },
});
