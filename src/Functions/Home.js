// Package
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = "https://jellyfish-app-bn4ss.ondigitalocean.app/speedup";

export const GetHomeData = async (
  setHomeData,
  setRefreshing,
  setLoading,
  isRefresh
) => {
  const user = await AsyncStorage.getItem("@user");
  if (user !== undefined) {
    isRefresh && setRefreshing(true);
    const request = await axios.post(`${baseUrl}/schedule/view`, {
      accountId: user,
      screen: "Home",
    });
    const response = await request.data;

    if (response !== undefined) {
      setHomeData(response.data);
      setLoading(false);
      isRefresh && setRefreshing(false);
    }
  }
};
