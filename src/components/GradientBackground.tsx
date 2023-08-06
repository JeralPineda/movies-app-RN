import React, {useContext, useEffect} from "react";
import {View, StyleSheet, Animated} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {GradientContext} from "../context/GradientContext";
import {useFade} from "../hooks/useFade";

interface GradientBackgroundProps {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: GradientBackgroundProps) => {
  const {colors, prevColors, setPrevMainColors} = useContext(GradientContext);
  const {fadeIn, opacity, fadeOut} = useFade();

  useEffect(() => {
    fadeIn(() => {
      setPrevMainColors(colors);
      fadeOut(0);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, "#fff"]}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.5}}
        style={{...StyleSheet.absoluteFillObject}}
      />

      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity,
        }}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, "#fff"]}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y: 0.5}}
          style={{...StyleSheet.absoluteFillObject}}
        />
      </Animated.View>

      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
