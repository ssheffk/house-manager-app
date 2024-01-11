import React from "react";
import "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import RootStack from "./navigation/RootStack";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RootStack />
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
