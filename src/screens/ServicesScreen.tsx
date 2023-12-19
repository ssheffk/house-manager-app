import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "@rneui/themed";
const ServicesScreen = ({ navigation }: any) => {
  // const navigation = useNavigation();
  // const navigateToHouseHoldOverview = (apartmentNumber: string) => {
  //   navigation.navigate("ServicesOverview", { apartmentNumber });
  // };
  return (
    <ScrollView>
      <Card>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text onPress={() => navigation.navigate("ServicesOverview")}>
            Services Screen
          </Text>
        </View>
      </Card>
    </ScrollView>
  );
};

export default ServicesScreen;
