import { Avatar } from "@rneui/base";
import React, { useRef } from "react";
import {
  Modal,
  View,
  Text,
  Button,
  PanResponder,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import DetailedInformation from "../DetailedInformation";

const ProfileModal = ({ visible, onClose, onSwipeInMiddle }: any) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      style={{ backgroundColor: "white" }}
    >
      <View style={styles.container}>
        <Button title="Dismiss" onPress={onClose} />
        {/* Top-left button */}

        <View style={styles.avatarContainer}>
          {/* Avatar and title */}
          <Avatar
            size={120}
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/35.jpg" }}
          />
          <Text style={styles.title}>Avatar Title</Text>
        </View>

        {/* List of items */}
        <DetailedInformation />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarContainer: {
    alignItems: "center",
    marginVertical: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
});

export default ProfileModal;
