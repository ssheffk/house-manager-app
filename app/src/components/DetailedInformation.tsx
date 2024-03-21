import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text, View } from "react-native";

const DetailedInformation = () => {
  const mockData = {
    ownerNames: "Dave Davidson, Stefani Davidson",
    parkingDetails: "Space 5, car H1632BT",
    petInfo: "Brick, dog",
    contactNumber: "0889991991",
    email: "example@gmail.com",
  };

  return (
    <SafeAreaView>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Owners</Text>
        <Text style={styles.text}>{mockData.ownerNames}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Parking</Text>
        <Text style={styles.text}>{mockData.parkingDetails}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pet</Text>
        <Text style={styles.text}>{mockData.petInfo}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <Text style={styles.text}>{mockData.contactNumber}</Text>
        <Text style={styles.text}>{mockData.email}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default DetailedInformation;
