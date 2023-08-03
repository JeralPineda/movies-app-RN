import React from "react";
import {View, Dimensions, StyleSheet} from "react-native";
import Carousel from "react-native-snap-carousel";

import {Movie} from "../interfaces/movie";
import {MoviePoster} from "./MoviePoster";

interface MovieCarouselProps {
  movies: Movie[];
}

export const MovieCarousel = ({movies}: MovieCarouselProps) => {
  const {width: SCREEN_WIDTH} = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <Carousel
        data={movies}
        renderItem={({item}: any) => <MoviePoster movie={item} />}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={300}
        inactiveSlideOpacity={0.8}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 440,
  },
});
