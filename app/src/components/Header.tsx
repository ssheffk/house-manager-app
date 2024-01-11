import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Header as HeaderRNE } from "@rneui/themed";
import { Avatar } from "@rneui/base";
import ProfileModal from "./profile-modal/ProfileModal";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

type HeaderComponentProps = {
  title: string;
  view?: string;
};

type ParamList = {
  Detail: {
    openDrawer: void;
  };
};

const Header: React.FunctionComponent<HeaderComponentProps> = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    // <SafeAreaProvider>
    <>
      <HeaderRNE
        backgroundColor="white"
        leftComponent={
          <Avatar
            size={40}
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/35.jpg" }}
            onPress={() => {
              setModalVisible(true);
            }}
          />
        }
        rightComponent={
          <MaterialCommunityIcons name={"logout"} color={"black"} size={26} />
        }
        centerComponent={{ text: "Header" }}
      />
      <ProfileModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>

    // </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#397af8",
    marginBottom: 20,
    width: "100%",
    paddingVertical: 15,
  },
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
  subheaderText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Header;
