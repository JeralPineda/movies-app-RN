import React from "react";
import {StyleSheet, Text, View, FlatList, ViewStyle} from "react-native";

import {Movie} from "../interfaces/movie";
import {MoviePoster} from "./MoviePoster";

interface FlatListProps {
  movies: Movie[];
  title?: string;
}

export const HorizontalSlider = ({movies, title}: FlatListProps) => {
  return (
    <View style={styles.container(title)}>
      {title && <Text style={styles.title}>{title}</Text>}

      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={(item: any) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: (title: string | undefined) =>
    ({
      height: title ? 270 : 230,
    } as ViewStyle),

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
  },
});
