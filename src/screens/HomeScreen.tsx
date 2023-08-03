import React from "react";
import {Text, View, ActivityIndicator} from "react-native";
import {useMovies} from "../hooks";

export const HomeScreen = () => {
  const {moviesInTheaters, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator color="red" size={50} />
      </View>
    );
  }

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
