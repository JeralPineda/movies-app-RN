import React from "react";
import {View, Animated, Button, StyleSheet, ViewStyle} from "react-native";
import {useFade} from "../hooks/useFade";

export const FadeScreen = () => {
  const {opacity, fadeIn, fadeOut} = useFade();

  return (
    <View style={styles.container}>
      <Animated.View style={styles.box(opacity)} />

      <Button title="FadeIn" onPress={fadeIn} />
      <Button title="FadeOut" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  box: (opacity: any) =>
    ({
      backgroundColor: "#084f6a",
      width: 150,
      height: 150,
      borderColor: "#fff",
      borderWidth: 10,
      marginBottom: 10,
      opacity,
    } as ViewStyle),
});
