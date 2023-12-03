import React, { useRef } from "react";
import { Modal, View, Text, Button, PanResponder } from "react-native";

const ProfileModal = ({ visible, onClose, onSwipeInMiddle }: any) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <View
          style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}
        >
          <Text style={{ fontSize: 30 }}>This is a profile modal!</Text>
          <Button title="Dismiss" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default ProfileModal;
