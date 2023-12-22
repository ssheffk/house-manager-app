import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BuildingScreen from "../screens/BuildingScreen";
import ChatScreen from "../screens/ChatScreen";
import HomeScreen from "../screens/HomeScreen";
import IssuesScreen from "../screens/IssuesScreen";
import ServicesScreen from "../screens/ServicesScreen";
import Header from "../components/Header";
import { SafeAreaView } from "react-native";
interface TabInfo {
  component: React.ComponentType<any>;
  componentName: string;
  componentIcon: string;
}

const tabs: TabInfo[] = [
  { component: HomeScreen, componentName: "Home", componentIcon: "home" },
  {
    component: BuildingScreen,
    componentName: "Building",
    componentIcon: "office-building-outline",
  },
  {
    component: ServicesScreen,
    componentName: "Services",
    componentIcon: "calendar-check-outline",
  },
  {
    component: IssuesScreen,
    componentName: "Issues",
    componentIcon: "calendar-check-outline",
  },
  { component: ChatScreen, componentName: "Chat", componentIcon: "chat" },
];
const Tab = createBottomTabNavigator();
const TabsNavigation = () => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <Header title="header" />
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
    </SafeAreaView>
  );
};

export default TabsNavigation;
