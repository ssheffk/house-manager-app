import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

const HouseHoldOverview = () => {
  const route = useRoute();
  const { apartmentNumber }: any = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Apartment detailed information will be here with number:
        {apartmentNumber}
      </Text>
    </View>
  );
};

export default HouseHoldOverview;
