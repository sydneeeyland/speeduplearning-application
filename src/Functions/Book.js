// Package
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Develop
// const baseUrl = "http://192.168.73.127:3000/speedup";

// Production
const baseUrl = "https://jellyfish-app-bn4ss.ondigitalocean.app/speedup";

export const GetTeachers = async (
  setListData,
  setRefreshing,
  setLoading,
  isRefresh
) => {
  const user = await AsyncStorage.getItem("@user");
  if (user !== undefined) {
    isRefresh && setRefreshing(true);
    const request = await axios.post(`${baseUrl}/booking/view`, {
      accountId: user,
    });
    const response = await request.data;

    if (response.data.length > 0) {
      setListData(response);
      setLoading(false);
      isRefresh && setRefreshing(false);
    }
  }
};

export const SubmitBooking = async (
  payload,
  setRequestResponse,
  navigation,
  setShowLoading
) => {
  setShowLoading(true);
  const request = await axios.post(`${baseUrl}/schedule/create`, payload);
  const response = await request.data;
  setRequestResponse(response);
  if (response.success) {
    navigation.navigate("List");
    alert(response.message);
    setShowLoading(false);
  }
};
