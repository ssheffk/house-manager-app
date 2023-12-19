import React from "react";

import { useNavigation } from "@react-navigation/core";
import { View, Text, ScrollView } from "react-native";
import { Card } from "@rneui/themed";
const ServicesScreen = () => {
  const navigation = useNavigation();
  const navigateToHouseHoldOverview = (apartmentNumber: string) => {
    navigation.navigate("ServicesOverview", { apartmentNumber });
  };
  return (
    <ScrollView>
      <Card>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text onPress={() => navigateToHouseHoldOverview("service stack")}>
            Services Screen
          </Text>
        </View>
      </Card>
    </ScrollView>
  );
};

export default ServicesScreen;
