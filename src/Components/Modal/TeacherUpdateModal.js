// Package
import { useState } from "react";

// Components
import { SelectList } from "react-native-dropdown-select-list";
import { View, Text, Modal, Pressable, ScrollView, Button } from "react-native";

// Styles
import { CalendarStyle } from "../../Assets/Styles/Calendar";

// Functions
import { UpdateTeacherStatus } from "../../Functions/Calendar";

export default function TeacherUpdateModal({
  showModal,
  setShowModal,
  schedule,
}) {
  const [selectedStatus, setSelectedStatus] = useState();
  const Status = [
    { key: "1", value: "Cancelled" },
    { key: "2", value: "Teacher Unavailable" },
  ];
  const payload = {
    ...schedule,
    status: selectedStatus,
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => setShowModal(false)}
    >
      <View style={CalendarStyle.modalWrapper}>
        <View style={CalendarStyle.modalContainer}>
          <View style={CalendarStyle.modalCloseContainer}>
            <Pressable
              style={CalendarStyle.modalCloseButton}
              onPress={() => setShowModal(false)}
            >
              <Text style={CalendarStyle.modalCloseButtonText}>Hide</Text>
            </Pressable>
          </View>
          <ScrollView>
            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
            >
              <Text style={{ flex: 1, marginTop: 15 }}>Status</Text>
              <SelectList
                style={{ flex: 1 }}
                setSelected={(val) => setSelectedStatus(val)}
                data={Status}
                save="value"
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Button
                title="Update"
                onPress={() => UpdateTeacherStatus(payload, setShowModal)}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
