import React from "react";
import {View, Image, StyleSheet} from "react-native";
import {Movie} from "../interfaces/movie";

interface MoviePosterProps {
  movie: Movie;
}

export const MoviePoster = ({movie}: MoviePosterProps) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={styles.imageContainer}>
      <Image source={{uri}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 300,
    height: 420,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
