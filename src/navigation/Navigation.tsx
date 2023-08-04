import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {DetailScreen, HomeScreen} from "../screens";
import {Movie} from "../interfaces/movie";

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: "transparent", //IOS
        },
        cardStyle: {
          backgroundColor: "white",
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
