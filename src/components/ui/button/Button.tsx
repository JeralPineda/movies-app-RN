import React, {ReactNode} from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import {normalize} from "../../../utils";
import {colors} from "../../../theme";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  intent?: "primary" | "secondary" | "tertiary" | "special";
  rounded?: "small" | "medium" | "large" | "full";
  label: string;
  fullwidth?: boolean;
  onPress: () => void;
  leftIcon?: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  containerStyle?: any;
  textStyle?: TextStyle;
}

const getSize = (param: ButtonProps["size"]) => {
  switch (param) {
    case "small":
      return normalize(20);
    case "medium":
      return normalize(50);
    case "large":
      return normalize(70);

    default:
      return normalize(50);
  }
};

const getContainerColor = (color: ButtonProps["intent"]) => {
  switch (color) {
    case "primary":
      return colors.primary[500];
    case "secondary":
      return colors.neutral[50];
    case "tertiary":
      return "transparent";
    case "special":
      return colors.neutral[100];
    default:
      return colors.primary[500];
  }
};

const getTextColor = (color: ButtonProps["intent"]) => {
  switch (color) {
    case "primary":
      return colors.white.neutral;
    case "secondary":
      return colors.primary[500];
    case "tertiary":
      return colors.primary[500];
    case "special":
      return colors.neutral[500];
    default:
      return colors.white.neutral;
  }
};

const getRounded = (size: ButtonProps["rounded"]) => {
  switch (size) {
    case "small":
      return normalize(2);
    case "medium":
      return normalize(6);
    case "large":
      return normalize(8);
    case "full":
      return normalize(100);
    default:
      return normalize(8);
  }
};

const Button = ({
  intent,
  rounded,
  size,
  label,
  fullwidth = true,
  containerStyle,
  isLoading,
  leftIcon,
  onPress,
  textStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        Styles.container(getSize(size), intent, getRounded(rounded), fullwidth),
        containerStyle,
      ]}>
      {isLoading ? (
        <ActivityIndicator color={colors.white.neutral} />
      ) : (
        <>
          {leftIcon && leftIcon}
          <Text style={[Styles.text(getTextColor(intent)), textStyle]}>
            {label}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const Styles = StyleSheet.create({
  container: (
    size: number,
    intent: ButtonProps["intent"],
    rounded: number,
    fullwidth: boolean,
  ) => ({
    // flex: 1,
    width: fullwidth ? "100%" : undefined,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: getContainerColor(intent),
    borderWidth: normalize(1),
    borderColor: intent === "secondary" ? colors.primary[500] : "transparent",
    height: size,
    borderRadius: rounded,
    paddingHorizontal: normalize(20),
  }),

  text: (color: string) => ({
    color: color,
    marginLeft: normalize(10),
    fontFamily: "OpenSans-Bold",
    fontSize: normalize(14),
  }),
});
