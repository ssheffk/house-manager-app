import { Button } from "@rneui/base";
import React from "react";
import { Text, View } from "react-native";

const ServicesOverview = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Text>Service detailed information will be here</Text>
    </View>
  );
};

export default ServicesOverview;
