import {StackScreenProps} from "@react-navigation/stack";
import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import {RootStackParams} from "../navigation/Navigation";
import {useMovieDetails} from "../hooks";
import {MovieDetails} from "../components";

const screenHeight = Dimensions.get("screen").height;

interface Props extends StackScreenProps<RootStackParams, "DetailScreen"> {}

export const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, cast, movieFull} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.borderImage}>
          <Image source={{uri}} style={styles.posterImage as any} />
        </View>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={30} color="gray" />
      ) : (
        <MovieDetails cast={cast} movieFull={movieFull!} />
      )}

      {/* Boton para cerrar */}
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon color="white" name="arrow-back-outline" size={25} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: screenHeight * 0.7,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,

    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  borderImage: {
    flex: 1,
    overflow: "hidden",

    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  detailContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.8,
    fontFamily: "OpenSans-SemiBold",
  },
  title: {
    fontSize: 20,
    fontFamily: "OpenSans-Bold",
  },
  backButton: {
    backgroundColor: "#3f3f3f45",
    position: "absolute",
    borderRadius: 100,
    padding: 5,

    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 5,
  },
});
