import React from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { Card, Text } from "@rneui/themed";
import { Image } from "@rneui/base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const ServicesScreen = ({ navigation }: any) => {
  // const navigation = useNavigation();
  // const navigateToHouseHoldOverview = (apartmentNumber: string) => {
  //   navigation.navigate("ServicesOverview", { apartmentNumber });
  // };
  return (
    <ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate("ServicesOverview")}>
        <Card>
          <Image
            style={{
              width: "100%",
              height: 100,
              alignItems: "center",
            }}
            resizeMode="stretch"
            source={{
              uri: "https://images.unsplash.com/photo-1565966800825-b2ba3b262570?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
          >
            <Text h4>House manager</Text>
          </Image>
          <Card.Divider />
          <View>
            <MaterialCommunityIcons
              name={"card-account-phone-outline"}
              color={"black"}
              size={20}
            >
              <Text>08-001-00-80</Text>
            </MaterialCommunityIcons>
            <MaterialCommunityIcons
              name={"email-outline"}
              color={"black"}
              size={20}
            >
              <Text>example@example.com</Text>
            </MaterialCommunityIcons>
          </View>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ServicesOverview")}>
        <Card>
          <Image
            style={{
              width: "100%",
              height: 100,
              alignItems: "center",
            }}
            resizeMode="stretch"
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1661719336375-6bfc58b8ff59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
          >
            <Text h4>Cleaning service</Text>
          </Image>
          <Card.Divider />
          <View>
            <MaterialCommunityIcons
              name={"card-account-phone-outline"}
              color={"black"}
              size={20}
            >
              <Text>054-011-20-80</Text>
            </MaterialCommunityIcons>
            <MaterialCommunityIcons
              name={"email-outline"}
              color={"black"}
              size={20}
            >
              <Text>example@example.com</Text>
            </MaterialCommunityIcons>
          </View>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ServicesOverview")}>
        <Card>
          <Image
            style={{
              width: "100%",
              height: 100,
              alignItems: "center",
            }}
            resizeMode="stretch"
            source={{
              uri: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
          >
            <Text h4>Handy man</Text>
          </Image>
          <Card.Divider />
          <View>
            <MaterialCommunityIcons
              name={"card-account-phone-outline"}
              color={"black"}
              size={20}
            >
              <Text>054-011-20-80</Text>
            </MaterialCommunityIcons>
            <MaterialCommunityIcons
              name={"email-outline"}
              color={"black"}
              size={20}
            >
              <Text>example@example.com</Text>
            </MaterialCommunityIcons>
          </View>
        </Card>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ServicesScreen;
