// Package
import { useState, useEffect } from "react";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Components
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { SelectList } from "react-native-dropdown-select-list";
import Modal from "react-native-modal";

// Images
import Hero3 from "../../Assets/User/Hero-Image-3.png";

// Styles
import { DetailsStyle } from "../../Assets/Styles/Details";

// Hook
import { useChange } from "../../Hooks/CustomHooks";

// Functions
import { SubmitBooking } from "../../Functions/Book";

// Constant
import { Time, TypesOfClass } from "../../Constant/Application";

const Details = ({ selected, navigation }) => {
  const [showLoading, setShowLoading] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [requestResponse, setRequestResponse] = useState({
    success: true,
    message: "",
  });

  const [payload, setPayload] = useState({
    teacherId: selected.teacherId,
    teacherName: selected.teacherName,
    date: moment().format("MM/DD/YYYY"),
    time: "",
    typeOfClass: "",
    status: "Pending",
    userId: "",
    student: "",
    note: "",
  });

  useEffect(() => {
    if (
      payload.time != "" &&
      payload.typeOfClass !== "" &&
      payload.student !== "" &&
      payload.note !== ""
    ) {
      setDisableSubmit(false);
    }
  }, [payload]);

  useEffect(() => {
    const GetUserId = async () => {
      const userId = await AsyncStorage.getItem("@user");
      useChange("userId", userId, setPayload);
    };
    GetUserId();
  }, []);

  console.log(requestResponse);

  return (
    <ScrollView>
      <View styles={DetailsStyle.container}>
        <View style={[DetailsStyle.tokenContainer, { marginTop: 20 }]}>
          <View style={DetailsStyle.tokenCard}>
            <Image style={DetailsStyle.teacherImage} source={Hero3} />
            <Text style={DetailsStyle.tokenCount}>{selected.teacherName}</Text>
            <Text style={DetailsStyle.tokenDescription}>Teacher</Text>
          </View>
        </View>

        {!requestResponse.success && (
          <View
            style={[DetailsStyle.formContainer, { backgroundColor: "#ff3333" }]}
          >
            <Text style={DetailsStyle.requestResponseText}>
              Schedule is Un-available
            </Text>
          </View>
        )}

        <View style={DetailsStyle.formContainer}>
          <Text style={DetailsStyle.formHeading}>Booking Information</Text>
          <View style={DetailsStyle.formInputWrapper}>
            <Text style={DetailsStyle.flexInputAuto}>Select Date</Text>
            <View style={DetailsStyle.flexInputAuto}>
              <Button
                title={`${date}`}
                onPress={() => setShowCalendar(true)}
                color="gray"
              />
            </View>
          </View>
          <View style={DetailsStyle.formInputWrapper}>
            <Text style={DetailsStyle.flexInputAuto}>Select Time</Text>
            <View style={DetailsStyle.flexInputAuto}>
              <SelectList
                setSelected={(val) => useChange("time", val, setPayload)}
                data={Time}
                save="value"
              />
            </View>
          </View>
          <View style={DetailsStyle.formInputWrapper}>
            <Text style={DetailsStyle.flexInputAuto}>Select Class</Text>
            <View style={DetailsStyle.flexInputAuto}>
              <SelectList
                setSelected={(val) => useChange("typeOfClass", val, setPayload)}
                data={TypesOfClass}
                save="value"
              />
            </View>
          </View>
          <View style={DetailsStyle.formInputWrapper}>
            <Text style={DetailsStyle.flexInputAuto}>Student Name</Text>
            <View style={{ flex: 1, borderWidth: 1, borderRadius: 8 }}>
              <TextInput
                style={{ paddingLeft: 5 }}
                onChangeText={(val) => useChange("student", val, setPayload)}
              />
            </View>
          </View>
          <View style={DetailsStyle.formInputWrapper}>
            <Text style={DetailsStyle.flexInputAuto}>Note</Text>
            <View style={DetailsStyle.flexInputTextArea}>
              <TextInput
                style={DetailsStyle.formTextArea}
                multiline
                onChangeText={(val) => useChange("note", val, setPayload)}
              />
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            {showLoading ? (
              <ActivityIndicator size="small" color="#0000ff" />
            ) : (
              <Button
                title="BOOK"
                disabled={disableSubmit}
                onPress={() =>
                  SubmitBooking(
                    payload,
                    setRequestResponse,
                    navigation,
                    setShowLoading
                  )
                }
              />
            )}
          </View>

          <Modal isVisible={showCalendar}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <View style={{ marginBottom: 5, alignItems: "flex-end" }}>
                <Button title="Close" onPress={() => setShowCalendar(false)} />
              </View>
              <Calendar
                current={date}
                onDayPress={(day) => {
                  setDate(day.dateString);
                  setShowCalendar(false);
                  useChange(
                    "date",
                    moment(day.dateString).format("MM/DD/YYYY"),
                    setPayload
                  );
                }}
                markedDates={{
                  [date]: {
                    selected: true,
                    disableTouchEvent: true,
                    selectedDotColor: "orange",
                  },
                }}
              />
            </View>
          </Modal>
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;
