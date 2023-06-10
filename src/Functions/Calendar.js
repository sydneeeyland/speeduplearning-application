// Package
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Develop
const baseUrl = "http://192.168.254.123:3000/speedup";

// Production
// const baseUrl = "https://jellyfish-app-bn4ss.ondigitalocean.app/speedup";

export const GetCalendarData = async (
  setHomeData,
  setRefreshing,
  setLoading,
  isRefresh,
  setUserRole
) => {
  const user = await AsyncStorage.getItem("@user");
  const role = await AsyncStorage.getItem("@role");
  if (user !== undefined) {
    isRefresh && setRefreshing(true);
    const request = await axios.post(`${baseUrl}/schedule/view`, {
      accountId: user,
      screen: "Calendar",
    });
    const response = await request.data;
    if (response !== undefined) {
      setUserRole(role);
      setHomeData(response.data.calendar);
      setLoading(false);
      isRefresh && setRefreshing(false);
    }
  }
};

export const UpdateStudentStatus = async (payload, setShowModal) => {
  if (
    payload.accountId !== "" &&
    payload.scheduleId !== "" &&
    payload.status !== ""
  ) {
    const request = await axios.post(
      `${baseUrl}/schedule/update_participant`,
      payload
    );
    const response = await request.data;

    if (response.success) {
      setShowModal(false);
      alert(response.message);
    }
  }
};

export const UpdateTeacherStatus = async (payload, setShowModal) => {
  if (payload.scheduleId !== "" && payload.status !== "") {
    const request = await axios.post(`${baseUrl}/schedule/update`, payload);
    const response = await request.data;

    if (response.success) {
      setShowModal(false);
      alert(response.message);
    }
  }
};
