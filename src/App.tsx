import React, { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Button, SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileModal from "./components/profile-modal/ProfileModal";
import ServicesOverview from "./components/overviews/ServicesOverview";
import HouseHoldOverview from "./components/overviews/HouseHoldOverview";
import TabsNavigator from "./components/TabsNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  const [state, setState] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState(false);
  const screens = {
    ServicesOverview: ServicesOverview,
    HouseHoldOverview: HouseHoldOverview,
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main Screen"
            component={TabsNavigator}
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
      </NavigationContainer>
    </SafeAreaView>
  );
}

// {...panResponder.panHandlers}
// const panResponder = useRef(
//   PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onMoveShouldSetPanResponder: () => true,
//     // onPanResponderMove: (_, gesture) => {
//     //   // Check if the swipe enters the middle section of the screen
//     //   // console.log(gesture.moveX);
//     //   if (gesture.moveX > 220 && gesture.moveX < 250) {
//     //     // Adjust these values based on your layout
//     //     // setModalVisible(true);
//     //   }
//     // },
//     onPanResponderTerminate: (_, gesture) => {
//       // Reset or handle any necessary actions when the swipe is released
//       if (gesture.moveX > 220 && gesture.moveX < 250) {
//         // Adjust these values based on your layout
//         setModalVisible(true);
//         console.log(gesture);
//       }
//     },
//   })
// ).current;
