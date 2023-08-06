import React, {useContext} from "react";
import {View, ActivityIndicator, ScrollView, StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {useMovies} from "../hooks";
import {
  MovieCarousel,
  HorizontalSlider,
  GradientBackground,
} from "../components";
import {generateUri, getImageColors} from "../helpers";
import {GradientContext} from "../context/GradientContext";
// import {useImageColors} from "../hooks/useImageColors";

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {setMainColors} = useContext(GradientContext);
  // useImageColors();

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = generateUri(movie.poster_path);

    const [primary = "green", secondary = "blue"] = await getImageColors(uri);

    setMainColors({primary, secondary});
  };

  if (isLoading) {
    return (
      <View style={styles.spiner}>
        <ActivityIndicator color="red" size={50} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          {/* Películas en cine*/}
          <MovieCarousel
            movies={nowPlaying}
            getPosterColors={(value: number) => getPosterColors(value)}
          />
          {/* Películas populares */}
          <HorizontalSlider movies={popular} title="Películas Populares" />
          {/* Películas mas valoradas */}
          <HorizontalSlider movies={topRated} title="Películas mas valoradas" />
          {/* Próximamente */}
          <HorizontalSlider movies={upcoming} title="Próximamente" />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  spiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
