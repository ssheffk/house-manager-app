import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native";
import BuildingTab from "./tabs/BuildingTab";
import ServicesTab from "./tabs/ServicesTab";
import HomeTab from "./tabs/HomeTab";
import ChatTab from "./tabs/ChatTab";
import IssuesTab from "./tabs/IssuesTab";

const Tab = createBottomTabNavigator();

interface TabInfo {
  component: React.ComponentType<any>;
  componentName: string;
  componentIcon: string;
}

const tabs: TabInfo[] = [
  { component: HomeTab, componentName: "Home", componentIcon: "home" },
  {
    component: BuildingTab,
    componentName: "Building",
    componentIcon: "office-building-outline",
  },
  {
    component: ServicesTab,
    componentName: "Services",
    componentIcon: "calendar-check-outline",
  },
  {
    component: IssuesTab,
    componentName: "Issues",
    componentIcon: "calendar-check-outline",
  },
  { component: ChatTab, componentName: "Chat", componentIcon: "chat" },
];

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator>
          {tabs.map((tab: TabInfo) => {
            return (
              <Tab.Screen
                key={tab.componentName}
                name={tab.componentName}
                component={tab.component}
                options={{
                  headerShown: false,
                  tabBarLabel: tab.componentName,
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                      name={tab.componentIcon}
                      color={color}
                      size={26}
                    />
                  ),
                }}
              />
            );
          })}
        </Tab.Navigator>
        {/* <Stack.Navigator initialRouteName="SignIn">
          {state ? (
            <Stack.Screen name="Xomie" component={TabsNavigator} />
          ) : (
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              initialParams={{ updateState }}
            />
          )}
        </Stack.Navigator> */}
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
