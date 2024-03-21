import { Avatar, Button } from "@rneui/base";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Text } from "@rneui/themed";

const ServiceProfile = () => {
  const mockData = {
    manager: "Bob Davidson",
    advisor: "Stefani Davidson",
    managerNumber: "08123133",
    advisorNumber: "08123133",
    location: "Brick, dog",
    email: "example@gmail.com",
  };
  return (
    <SafeAreaView>
      <View>
        <Text h4>Manager</Text>
        <Text>{mockData.manager}</Text>
      </View>

      <View>
        <Text h4>Manager phone</Text>
        <Text>{mockData.managerNumber}</Text>
      </View>

      <View>
        <Text h4>Advisor</Text>
        <Text>{mockData.advisor}</Text>
      </View>

      <View>
        <Text h4>Advisor phone</Text>
        <Text>{mockData.advisorNumber}</Text>
      </View>
      <View>
        <Text h4>Location</Text>
        <Text>{mockData.location}</Text>
      </View>
      <View>
        <Text h4>Email</Text>
        <Text>{mockData.email}</Text>
      </View>
    </SafeAreaView>
  );
};

const ServicesOverview = ({ navigation }: any) => {
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
});

export default ServicesOverview;
