import React, {useContext} from "react";
import {View, StyleSheet} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {GradientContext} from "../context/GradientContext";

interface GradientBackgroundProps {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: GradientBackgroundProps) => {
  const {colors} = useContext(GradientContext);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.primary, colors.secondary, "#fff"]}
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
