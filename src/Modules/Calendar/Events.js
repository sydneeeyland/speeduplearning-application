// Components
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import NotesModal from "../../Components/Modal/NotesModal";
import StudentUpdateModal from "../../Components/Modal/StudentUpdateModal";
import TeacherUpdateModal from "../../Components/Modal/TeacherUpdateModal";

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
  const [displayTeacherUpdateModal, setDisplayTeacherUpdateModal] =
    useState(false);
  const [participantData, setParticipantData] = useState();
  const [scheduleData, setScheduleData] = useState();
  const [displayNoteModal, setDisplayNoteModal] = useState(false);
  const [noteModalValue, setNoteModalValue] = useState("");

  const HandlePressAction = (note, isLongPress, scheduleId, userId) => {
    if (userRole === "teacher") {
      if (note !== "" && !isLongPress) {
        setNoteModalValue(note !== "" ? note : "Note has not been filled.");
        setDisplayNoteModal(true);
      } else if (isLongPress) {
        setScheduleData({
          scheduleId: scheduleId,
        });
        setDisplayTeacherUpdateModal(true);
      }
    } else if (userRole === "student" && isLongPress) {
      setParticipantData({
        scheduleId: scheduleId,
        accountId: userId,
      });
      setDisplayStudentUpdateModal(true);
    }
  };

  return (
    <>
      {userRole === "admin" ? (
        <View>
          <TouchableOpacity
            style={[
              firstItemInDay ? CalendarStyle.firstItem : CalendarStyle.item,
              {
                backgroundColor: CalendarStatusColor[item.status],
              },
            ]}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ flex: 1 }}>{`Teacher. ${item.teacherName}`}</Text>
              <Text style={{ flex: 1, textAlign: "right" }}>
                {TimeConversion[item.time]}
              </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ flex: 1 }}>{item.typeOfClass}</Text>
              <Text style={{ flex: 1, textAlign: "right" }}>{item.status}</Text>
            </View>
            <View style={CalendarStyle.hairlineSeparator} />
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Participants
            </Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              {item.participants.map((key, index) => (
                <View key={`${key.student}-${index}`} style={{ flex: 1 }}>
                  <Text
                    style={{ textAlign: "center" }}
                  >{`Name: ${key.student}`}</Text>
                  <Text
                    style={{ textAlign: "center" }}
                  >{`Status: ${key.status}`}</Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity
            style={[
              firstItemInDay ? CalendarStyle.firstItem : CalendarStyle.item,
              {
                backgroundColor: CalendarStatusColor[item.status],
              },
            ]}
            onPress={() => HandlePressAction(item.note)}
            onLongPress={() =>
              HandlePressAction("", true, item.id, item.studentId)
            }
          >
            <View style={CalendarStyle.scheduleInfoContainer}>
              <Text
                style={[
                  CalendarStyle.scheduleInfoTeacher,
                  { color: CalendarStatusTextColor[item.status] },
                ]}
              >
                {`${userRole === "teacher" ? "Student: " : "Teacher."} ${
                  item.teacherName
                }`}
              </Text>
              <Text
                style={[
                  CalendarStyle.scheduleInfoTime,
                  { color: CalendarStatusTextColor[item.status] },
                ]}
              >
                {TimeConversion[item.time]}
              </Text>
            </View>
            <View style={CalendarStyle.scheduleInfoContainer}>
              <Text
                style={[
                  CalendarStyle.scheduleInfoType,
                  { color: CalendarStatusTextColor[item.status] },
                ]}
              >
                {item.typeOfClass}
              </Text>
              <Text
                style={[
                  CalendarStyle.scheduleInfoStatus,
                  { color: CalendarStatusTextColor[item.status] },
                ]}
              >
                {item.status}
              </Text>
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
            participant={participantData}
          />
          <TeacherUpdateModal
            showModal={displayTeacherUpdateModal}
            setShowModal={setDisplayTeacherUpdateModal}
            schedule={scheduleData}
          />
        </View>
      )}
    </>
  );
}
