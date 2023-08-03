import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {DetailScree, HomeScree} from "../screens";

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: "transparent", //IOS
        },
        cardStyle: {
          backgroundColor: "white",
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScree} />
      <Stack.Screen name="DetailScree" component={DetailScree} />
    </Stack.Navigator>
  );
};
