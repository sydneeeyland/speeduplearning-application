// Package
import { useState, useEffect } from "react";

// Components
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  SafeAreaView,
} from "react-native";
import Loading from "../Components/Loading";

// Modules
import ClassSchedule from "../Modules/Home/ClassSchedule";

// Images
import Courses from "../Assets/Icons/icon-Course-Filled.png";
import Books from "../Assets/Icons/icon-Books-Filled.png";
import Account from "../Assets/Icons/icon-Account.png";

// Styles
import { HomeStyle } from "../Assets/Styles/Home";

// Functions
import { GetHomeData } from "../Functions/Home";

const Home = ({ navigation }) => {
  const [HomeData, setHomeData] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetHomeData(setHomeData, setRefreshing, setLoading);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() =>
            GetHomeData(setHomeData, setRefreshing, setLoading, true)
          }
        />
      }
    >
      {loading ? (
        <Loading />
      ) : (
        <SafeAreaView styles={HomeStyle.container}>
          <View style={HomeStyle.headerCard}>
            <View style={HomeStyle.greetingsContainer}>
              <Text style={HomeStyle.greetingsLabel}>Hello There !</Text>
              <TouchableOpacity
                style={HomeStyle.greetingsAccountImageContainer}
                onPress={() => navigation.navigate("Settings")}
              >
                <Image
                  style={HomeStyle.greetingsAccountImage}
                  source={Account}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={HomeStyle.tokenContainer}>
            <View style={HomeStyle.tokenCard}>
              <Image style={HomeStyle.tokenImage} source={Courses} />
              <Text style={HomeStyle.tokenCount}>{HomeData.completed}</Text>
              <Text style={HomeStyle.tokenDescription}>Completed</Text>
            </View>
            <View style={[HomeStyle.tokenCard]}>
              <Image style={HomeStyle.tokenImage} source={Books} />
              <Text style={HomeStyle.tokenCount}>{HomeData.upcoming}</Text>
              <Text style={HomeStyle.tokenDescription}>Upcoming</Text>
            </View>
          </View>

          {/* Today Class */}
          <View style={HomeStyle.todayClassContainer}>
            <View style={HomeStyle.notchCenter}>
              <View style={HomeStyle.notch} />
            </View>
            <View style={HomeStyle.classHeaderContainer}>
              <Text style={HomeStyle.classHeaderTitle}>Todays Classes</Text>
              <TouchableOpacity
                style={HomeStyle.classHeaderSeeAllButton}
                onPress={() => navigation.navigate("Calendar")}
              >
                <Text>See all</Text>
              </TouchableOpacity>
            </View>
            <View style={HomeStyle.todayClassScheduleContainer}>
              <ClassSchedule data={HomeData.today} />
            </View>
          </View>

          {/* Tomorrow Class */}
          <View style={HomeStyle.tomorrowClassContainer}>
            <View style={HomeStyle.notchCenter}>
              <View style={HomeStyle.notch} />
            </View>
            <View style={HomeStyle.classHeaderContainer}>
              <Text style={HomeStyle.classHeaderTitle}>Tomorrow Classes</Text>
              <TouchableOpacity
                style={HomeStyle.classHeaderSeeAllButton}
                onPress={() => navigation.navigate("Calendar")}
              >
                <Text>See all</Text>
              </TouchableOpacity>
            </View>
            <View style={HomeStyle.todayClassScheduleContainer}>
              <ClassSchedule data={HomeData.tomorrow} />
            </View>
          </View>
        </SafeAreaView>
      )}
    </ScrollView>
  );
};

export default Home;
