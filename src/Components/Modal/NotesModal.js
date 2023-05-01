// Components
import { View, Text, Modal, Pressable, ScrollView } from "react-native";

// Styles
import { CalendarStyle } from "../../Assets/Styles/Calendar";

export default function NotesModal({ showModal, setShowModal, modalContent }) {
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
              <Text style={CalendarStyle.modalCloseButtonText}>
                Hide Information
              </Text>
            </Pressable>
          </View>

          <View style={CalendarStyle.modalTextContentContainer}>
            <Text>Overview</Text>
          </View>
          <ScrollView>
            <View style={CalendarStyle.modalTextContent}>
              <Text>{modalContent}</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
