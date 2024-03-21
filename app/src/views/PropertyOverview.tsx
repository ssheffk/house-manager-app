import { Button } from "@rneui/base";
import { Avatar } from "@rneui/themed";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DetailedInformation from "../components/DetailedInformation";

const PropertyOverview = ({ navigation, route }: any) => {
  // route comes from react
  return (
    <View style={styles.container}>
      {/* Top-left button */}
      <Button onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name={"arrow-left"} color={"black"} size={26} />
      </Button>

      <View style={styles.avatarContainer}>
        {/* Avatar and title */}
        <Avatar
          size={120}
          rounded
          source={{ uri: "https://randomuser.me/api/portraits/men/35.jpg" }}
        />
        <Text
          style={styles.title}
        >{`Apartment number ${route.params.props}`}</Text>
      </View>

      {/* List of items */}
      <DetailedInformation />
    </View>
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
});

export default PropertyOverview;
