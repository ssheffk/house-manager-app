import { Avatar, Button } from "@rneui/base";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Text } from "@rneui/themed";
const ServicesOverview = ({ navigation }: any) => {
  const manager = "Bob Davidson";
  const advisor = "Stefani Davidson";
  const managerNumber = "08123133";
  const advisorNumber = "08123133";
  const location = "Brick, dog";
  const email = "example@gmail.com";

  const ServiceProfile = () => (
    <SafeAreaView>
      <View>
        <Text h4>Manager</Text>
        <Text>{manager}</Text>
      </View>

      <View>
        <Text h4>Manager phone</Text>
        <Text>{managerNumber}</Text>
      </View>

      <View>
        <Text h4>Advisor</Text>
        <Text>{advisor}</Text>
      </View>

      <View>
        <Text h4>Advisor phone</Text>
        <Text>{advisorNumber}</Text>
      </View>
      <View>
        <Text h4>Location</Text>
        <Text>{location}</Text>
      </View>
      <View>
        <Text h4>Email</Text>
        <Text>{email}</Text>
      </View>
    </SafeAreaView>
  );
  return (
    <View style={styles.container}>
      {/* Top-left button */}
      <Button onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name={"arrow-left"} color={"black"} size={26} />
      </Button>

      <View style={styles.avatarContainer}>
        {/* Avatar and title */}
        <MaterialCommunityIcons name="home" size={60} />
        <Text style={styles.title}>Service</Text>
      </View>

      {/* List of items */}
      <ServiceProfile />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
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

export default ServicesOverview;
