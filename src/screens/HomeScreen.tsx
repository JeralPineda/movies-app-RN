import React from "react";
import {View, ActivityIndicator, ScrollView} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {useMovies} from "../hooks";
import {MovieCarousel, HorizontalSlider} from "../components";

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();

  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator color="red" size={50} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/* Películas en cine*/}
        <MovieCarousel movies={nowPlaying} />

        {/* Películas populares */}
        <HorizontalSlider movies={popular} title="Películas Populares" />

        {/* Películas mas valoradas */}
        <HorizontalSlider movies={topRated} title="Películas mas valoradas" />

        {/* Próximamente */}
        <HorizontalSlider movies={upcoming} title="Próximamente" />
      </View>
    </ScrollView>
  );
};
