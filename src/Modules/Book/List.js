// Package
import { useEffect, useState } from "react";

// Components
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Dimensions,
} from "react-native";
import Loading from "../../Components/Loading";

// Images
import RegularToken from "../../Assets/Icons/icon-Token-Filled.png";
import BrainPopToken from "../../Assets/Icons/icon-BrainPopToken-Filled.png";
import Account from "../../Assets/Icons/icon-Account.png";
import Hero1 from "../../Assets/User/Hero-Image-1.png";

// Styles
import { ListStyle } from "../../Assets/Styles/List";

import { GetTeachers } from "../../Functions/Book";

const List = ({ navigation, redirect, setSelected, setToken }) => {
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const refreshing = false;
  const ScreenWidth = Dimensions.get("window").width - 100;

  useEffect(() => {
    GetTeachers(setListData, setRefresh, setLoading);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={() =>
            GetTeachers(setListData, setRefresh, setLoading, true)
          }
        />
      }
    >
      {loading ? (
        <Loading />
      ) : (
        <View styles={ListStyle.container}>
          <View style={ListStyle.headerCard}>
            <View style={ListStyle.greetingsContainer}>
              <Text style={ListStyle.greetingsLabel}>Hello There !</Text>
              <TouchableOpacity
                style={ListStyle.greetingsAccountImageContainer}
                onPress={() => redirect.navigate("Settings")}
              >
                <Image
                  style={ListStyle.greetingsAccountImage}
                  source={Account}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={ListStyle.tokenContainer}>
            <View style={ListStyle.tokenCard}>
              <Image style={ListStyle.tokenImage} source={RegularToken} />
              <Text style={ListStyle.tokenCount}>{listData.user.regular}</Text>
              <Text style={ListStyle.tokenDescription}>Regular</Text>
            </View>
            <View style={[ListStyle.tokenCard]}>
              <Image style={ListStyle.tokenImage} source={BrainPopToken} />
              <Text style={ListStyle.tokenCount}>{listData.user.brainPop}</Text>
              <Text style={ListStyle.tokenDescription}>Brain Pop</Text>
            </View>
          </View>

          <View style={ListStyle.headerCard}>
            <Text
              style={{ marginBottom: 10, fontWeight: "bold", fontSize: 16 }}
            >
              Our Teachers
            </Text>
            <View style={ListStyle.listContainer}>
              {listData.data.map((key) => (
                <TouchableOpacity
                  key={key.id}
                  onPress={() => {
                    navigation.navigate("Details");
                    setSelected({teacherId: key.id, teacherName: key.teacherName});
                    setToken(listData.user);
                  }}
                  style={[ListStyle.listItem, { width: ScreenWidth / 3 }]}
                >
                  <Image source={Hero1} style={ListStyle.listItemImage} />
                  <Text style={{ fontWeight: "bold" }}>Teacher</Text>
                  <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                    {key.teacherName}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default List;
