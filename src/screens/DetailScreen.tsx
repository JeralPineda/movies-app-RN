import {StackScreenProps} from "@react-navigation/stack";
import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import {RootStackParams} from "../navigation/Navigation";
import Icon from "react-native-vector-icons/Ionicons";
import {useMovieDetails} from "../hooks";

const screenHeight = Dimensions.get("screen").height;

interface Props extends StackScreenProps<RootStackParams, "DetailScreen"> {}

export const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  console.log(movie.id);

  const {state} = useMovieDetails(movie.id);

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

      <View style={styles.detailContainer}>
        <Icon name="star-outline" color="gray" size={20} />
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
});
