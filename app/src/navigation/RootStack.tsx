import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import TabsNavigation from "./TabsNavigation";
import ServicesOverview from "../views/ServiceOverview";
import PropertyOverview from "../views/PropertyOverview";
const Stack = createNativeStackNavigator();

//TODO: when screens increase we can separate them into stacks

const screens = {
  ServicesOverview: ServicesOverview,
  PropertyOverview: PropertyOverview,
};
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main Screen"
          component={TabsNavigation}
          options={{ headerShown: false }}
        />
        {Object.entries({
          // Use the screens normally
          ...screens,
          // Use some screens conditionally based on some condition
        }).map(([name, component]) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={{ headerShown: false }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
