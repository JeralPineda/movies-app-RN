import React from "react";
import {View, ActivityIndicator} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {useMovies} from "../hooks";
import {MovieCarousel} from "../components";

export const HomeScreen = () => {
  const {moviesInTheaters, isLoading} = useMovies();

  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator color="red" size={50} />
      </View>
    );
  }

  return (
    <View style={{marginTop: top + 20}}>
      <MovieCarousel data={moviesInTheaters} />
    </View>
  );
};
