import React from "react";
import {StyleSheet, Text, TextStyle, ViewStyle} from "react-native";
import {colors, fontSizes} from "../../../theme";

interface CustomTextProps {
  children: React.ReactNode;
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  weight?: "normal" | "semibold" | "bold";
  style?: ViewStyle | TextStyle;
  color?:
    | "extra-light"
    | "light"
    | "neutral"
    | "dark"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "info";
}

const CustomText = ({
  children,
  size = "md",
  weight = "normal",
  color = "neutral",
  style,
}: CustomTextProps) => {
  const getWeight = (param: CustomTextProps["weight"]) => {
    switch (param) {
      case "normal":
        return "OpenSans-Regular";

      case "semibold":
        return "OpenSans-SemiBold";

      case "bold":
        return "OpenSans-Bold";

      default:
        return "OpenSans-Regular";
    }
  };

  const getColor = (param: CustomTextProps["color"]) => {
    switch (param) {
      case "primary":
        return colors.primary[500];

      case "neutral":
        return colors.neutral[1000];

      case "error":
        return colors.primary[400];

      case "dark":
        return colors.neutral[1100];

      case "light":
        return colors.neutral[700];

      case "extra-light":
        return colors.neutral[400];

      default:
        return colors.neutral[900];
    }
  };

  return (
    <Text
      style={[Styles.text(size, getWeight(weight), getColor(color)), style]}>
      {children}
    </Text>
  );
};

export default CustomText;

const Styles = StyleSheet.create({
  text: (
    size: CustomTextProps["size"],
    weight: "OpenSans-Regular" | "OpenSans-SemiBold" | "OpenSans-Bold",
    color: string,
  ) => ({
    fontFamily: weight,
    fontSize: fontSizes[size!],
    lineHeight: fontSizes[size!] * 1.2,
    color: color,
  }),
});
