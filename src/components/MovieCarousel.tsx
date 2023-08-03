import React from "react";
import {View, Dimensions, StyleSheet} from "react-native";
import Carousel from "react-native-snap-carousel";

import {Movie} from "../interfaces/movie";
import {MoviePoster} from "./MoviePoster";

interface MovieCarouselProps {
  data: Movie[];
}

export const MovieCarousel = ({data}: MovieCarouselProps) => {
  const {width: SCREEN_WIDTH} = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={({item}: any) => <MoviePoster movie={item} />}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={300}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 440,
  },
});
