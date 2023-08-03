import React from "react";
import {View, Image, StyleSheet, ViewStyle} from "react-native";
import {Movie} from "../interfaces/movie";

interface MoviePosterProps {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({
  movie,
  height = 420,
  width = 300,
}: MoviePosterProps) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={styles.container(height, width)}>
      <Image source={{uri}} style={styles.image as any} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: (height: number, width: number) =>
    ({
      width,
      height,
      marginHorizontal: 8,
      borderRadius: 18,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,

      elevation: 9,
    } as ViewStyle),

  image: {
    flex: 1,
    borderRadius: 18,
  },
});
