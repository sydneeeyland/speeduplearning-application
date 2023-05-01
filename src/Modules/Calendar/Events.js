// Components
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import NotesModal from "../../Components/Modal/NotesModal";
import StudentUpdateModal from "../../Components/Modal/StudentUpdateModal";

// Style
import { CalendarStyle } from "../../Assets/Styles/Calendar";

// Constant
import {
  TimeConversion,
  CalendarStatusColor,
  CalendarStatusTextColor,
} from "../../Constant/Application";

export default function Events({ item, firstItemInDay, userRole }) {
  const [displayStudentUpdateModal, setDisplayStudentUpdateModal] =
    useState(false);
  const [scheduleId, setScheduleId] = useState();
  const [displayNoteModal, setDisplayNoteModal] = useState(false);
  const [noteModalValue, setNoteModalValue] = useState("");

  const HandlePressAction = (note, isLongPress, scheduleId) => {
    if (userRole === "teacher") {
      if (note !== "" && !isLongPress) {
        setNoteModalValue(note !== "" ? note : "Note has not been filled.");
        setDisplayNoteModal(true);
      } else if (isLongPress) {
        console.log(scheduleId);
      }
    } else if (userRole === "student" && isLongPress) {
      setScheduleId(scheduleId);
      setDisplayStudentUpdateModal(true);
    }
  };
  console.log(item);
  return (
    <View>
      <TouchableOpacity
        style={[
          firstItemInDay ? CalendarStyle.firstItem : CalendarStyle.item,
          {
            backgroundColor: CalendarStatusColor[item.status],
            color: CalendarStatusTextColor[item.status],
          },
        ]}
        onPress={() => HandlePressAction(item.note)}
        onLongPress={() => HandlePressAction("", true, item.id)}
      >
        <View style={CalendarStyle.scheduleInfoContainer}>
          <Text style={CalendarStyle.scheduleInfoTeacher}>
            {`${userRole === "teacher" ? "Student: " : "Teacher."} ${
              item.teacherName
            }`}
          </Text>
          <Text style={CalendarStyle.scheduleInfoTime}>
            {TimeConversion[item.time]}
          </Text>
        </View>
        <View style={CalendarStyle.scheduleInfoContainer}>
          <Text style={CalendarStyle.scheduleInfoType}>{item.typeOfClass}</Text>
          <Text style={CalendarStyle.scheduleInfoStatus}>{item.status}</Text>
        </View>
      </TouchableOpacity>

      <NotesModal
        showModal={displayNoteModal}
        setShowModal={setDisplayNoteModal}
        modalContent={noteModalValue}
      />
      <StudentUpdateModal
        showModal={displayStudentUpdateModal}
        setShowModal={setDisplayStudentUpdateModal}
        id={scheduleId}
      />
    </View>
  );
}
