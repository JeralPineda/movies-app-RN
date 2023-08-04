import React from "react";
import {Image, StyleSheet, ViewStyle, TouchableOpacity} from "react-native";
import {Movie} from "../interfaces/movie";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";

interface MoviePosterProps {
  movie: Movie;
  height?: number;
  width?: number;
}

export type RootStackParamList = {
  DetailScreen: Movie;
};

export const MoviePoster = ({
  movie,
  height = 420,
  width = 300,
}: MoviePosterProps) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.container(height, width)}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("DetailScreen", movie)}>
      <Image source={{uri}} style={styles.image as any} />
    </TouchableOpacity>
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
