import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./tabs/Home";
import Building from "./tabs/Building";
import Services from "./tabs/Services";
import Issues from "./tabs/Issues";
import Chat from "./tabs/Chat";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TextInput, Button, StyleSheet, SafeAreaView } from "react-native";
import SignIn from "./SignIn";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

interface TabInfo {
  component: React.ComponentType<any>;
  componentName: string;
  componentIcon: string;
}

const tabs: TabInfo[] = [
  { component: Home, componentName: "Home", componentIcon: "home" },
  {
    component: Building,
    componentName: "Building",
    componentIcon: "office-building-outline",
  },
  {
    component: Services,
    componentName: "Services",
    componentIcon: "calendar-check-outline",
  },
  {
    component: Issues,
    componentName: "Issues",
    componentIcon: "calendar-check-outline",
  },
  { component: Chat, componentName: "Chat", componentIcon: "chat" },
];

const TabsNavigator = () => {
  return (
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
  );
};

export default function App() {
  const [state, setState] = useState<boolean>(false);

  const updateState = (newState: boolean) => {
    setState(newState);
  };
  const styles = StyleSheet.create({
    button: {
      fontSize: 12,
      padding: 5,
    },
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          {state ? (
            <Stack.Screen
              name="Xomie"
              component={TabsNavigator}
              options={({ navigation }) => ({
                headerRight: () => (
                  <Button
                    title="Log Off"
                    onPress={() => {
                      updateState(false);
                    }}
                  />
                ),
              })}
            />
          ) : (
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              initialParams={{ updateState }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
