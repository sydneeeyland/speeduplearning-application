// Package
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = "http://192.168.73.127:3000/speedup";

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
