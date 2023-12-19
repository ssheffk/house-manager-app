import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Card } from "@rneui/themed";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const buildingData: { floor: number; apartments: number[] }[] = [
  {
    floor: 1,
    apartments: [1, 2, 3, 4],
  },
  {
    floor: 2,
    apartments: [5, 6, 7, 8],
  },
  {
    floor: 3,
    apartments: [9, 10, 11, 12],
  },
  {
    floor: 4,
    apartments: [13, 14, 15, 16],
  },
];

const BuildingScreen = () => {
  const navigation = useNavigation();
  const navigateToHouseHoldOverview = (apartmentNumber: number) => {
    navigation.navigate("HouseHoldOverview", { apartmentNumber });
  };

  return (
    <ScrollView>
      {buildingData.map(
        (building: { floor: number; apartments: number[] }, i) => {
          return (
            <Card key={i}>
              <View style={styles.container}>
                {building.apartments.map((apt, i) => (
                  <Text
                    key={i}
                    style={styles.apartmentBubble}
                    onPress={() => navigateToHouseHoldOverview(apt)}
                  >
                    <MaterialCommunityIcons
                      name="door-open"
                      color="black"
                      size={16}
                    />
                    {`apt ${apt}`}
                  </Text>
                ))}
              </View>
              <Card.Divider />
              <Card.Title key={building.floor}>
                <MaterialCommunityIcons name="hiking" color="black" size={26} />
                {`${building.floor} floor`}
              </Card.Title>
            </Card>
          );
        }
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  floorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  apartmentBubble: {
    width: 150,
    height: 30,
    borderRadius: 25,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
});
export default BuildingScreen;
