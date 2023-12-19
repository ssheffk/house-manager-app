import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Button } from "react-native";
import ProfileModal from "./profile-modal/ProfileModal";
import HouseHoldOverview from "./overviews/HouseHoldOverview";
import ServicesOverview from "./overviews/ServicesOverview";

const buildingScreens = {
  HouseHoldOverview: HouseHoldOverview,
};

const servicesScreens = {
  ServicesOverview: ServicesOverview,
};

const getScreens = (tabName: string) => {
  if (tabName === "Building") return { ...buildingScreens };
  if (tabName === "Services") return { ...servicesScreens };
};

const Stack = createNativeStackNavigator();
const AbstractStackNavigator = ({ mainComponent }: any) => {
  const [state, setState] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState(false);
  const screens = getScreens(mainComponent);
  //COMMENT: dynamic routing on tabs
  const getPath = (mainComponent: string) => {
    if (mainComponent === "Services")
      return require("../screens/ServicesScreen").default;
    if (mainComponent === "Building")
      return require("../screens/BuildingScreen").default;
    if (mainComponent === "Home")
      return require("../screens/HomeScreen").default;
    if (mainComponent === "Chat")
      return require("../screens/ChatScreen").default;
    if (mainComponent === "Issues")
      return require("../screens/IssuesScreen").default;
  };
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Main Screen"
          getComponent={() => getPath(mainComponent)} // COMMENT: this is tab content
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                title="Log Off"
                onPress={() => {
                  setState(false);
                }}
              />
            ),
            headerLeft: () => (
              <Button
                title="Profile"
                onPress={() => {
                  setModalVisible(true);
                }}
              />
            ),
          })}
        />
        {Object.entries({
          // Use the screens normally
          ...screens,
          // Use some screens conditionally based on some condition
        }).map(([name, component]) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))}
      </Stack.Navigator>
      <ProfileModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};

export default AbstractStackNavigator;
