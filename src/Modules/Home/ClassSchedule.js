// Components
import { View, Text, Image } from "react-native";

// Images
import LightningFilled from "../../Assets/Icons/icon-Lightning-Filled.png";
import OrchidFilled from "../../Assets/Icons/icon-Orchid-Filled.png";
import FidgetFilled from "../../Assets/Icons/icon-Fidget-Filled.png";
import Clock from "../../Assets/Icons/icon-Clock.png";
import User from "../../Assets/Icons/icon-User.png";

// Styles
import { HomeStyle } from "../../Assets/Styles/Home";

const TodayClass = ({ data }) => {
  const icon = {
    "Regular (1 Participant)": FidgetFilled,
    "Brain Pop (1 Participant)": OrchidFilled,
    "Brain Pop (2 Participant)": LightningFilled,
  };
  return (
    <View>
      {data.map((key, index) => (
        <View key={`${index}-${key.id}`}>
          <View style={HomeStyle.todayClassSChedule}>
            <Image
              source={icon[key.typeOfClass]}
              style={HomeStyle.todayClassScheduleBadge}
            />
            <View>
              <Text style={HomeStyle.todayClassLabel}>{key.teacherName}</Text>
              <View style={HomeStyle.todayClassDescriptionContainer}>
                <View style={HomeStyle.todayClassDescription}>
                  <Image
                    source={Clock}
                    style={HomeStyle.todayClassDescriptionImage}
                  />
                  <Text>{key.time}</Text>
                </View>

                <View style={HomeStyle.todayClassDescription}>
                  <Image
                    source={User}
                    style={HomeStyle.todayClassDescriptionImage}
                  />
                  <Text>{key.typeOfClass}</Text>
                </View>
              </View>
            </View>
          </View>
          {index < 1 && <View style={HomeStyle.classScheduleSeparator} />}
        </View>
      ))}
    </View>
  );
};

export default TodayClass;
