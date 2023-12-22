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

const ProfileModal = ({ visible, onClose, onSwipeInMiddle }: any) => {
  const ownerNames = "Dave Davidson, Stefani Davidson";
  const parkingDetails = "Space 5, car H1632BT";
  const petInfo = "Brick, dog";
  const contactNumber = "0889991991";
  const email = "example@gmail.com";

  const ApartmentProfile = () => (
    <SafeAreaView>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Owners</Text>
        <Text style={styles.text}>{ownerNames}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Parking</Text>
        <Text style={styles.text}>{parkingDetails}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pet</Text>
        <Text style={styles.text}>{petInfo}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <Text style={styles.text}>{contactNumber}</Text>
        <Text style={styles.text}>{email}</Text>
      </View>
    </SafeAreaView>
  );
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
        <ApartmentProfile />
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
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
});

export default ProfileModal;
