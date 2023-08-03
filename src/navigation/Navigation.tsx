import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {DetailScree, HomeScree} from "../screens";

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScree} />
      <Stack.Screen name="DetailScree" component={DetailScree} />
    </Stack.Navigator>
  );
};
