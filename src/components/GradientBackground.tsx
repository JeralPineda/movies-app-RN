import React from "react";
import {View, StyleSheet} from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface GradientBackgroundProps {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: GradientBackgroundProps) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#084f6a", "#75cedb", "#fff"]}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.5}}
        style={{...StyleSheet.absoluteFillObject}}
      />

      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
