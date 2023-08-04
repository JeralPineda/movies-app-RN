/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from "react";
import {StyleSheet, View, ViewStyle} from "react-native";
import Animated, {
  FadeInRight,
  FadeOutRight,
  Layout,
} from "react-native-reanimated";
import {
  Notification as INotification,
  removeNotification,
} from "../../store/notificationSlice";
import {useAppDispatch} from "../../store/store";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {normalize} from "../../../utils";
import {colors} from "../../../theme";
import {CustomText} from "../custom-text";

const Notification = ({notification}: {notification: INotification}) => {
  const dispatch = useAppDispatch();

  const getBackgroundColor = (type: INotification["type"]) => {
    switch (type) {
      case "success":
        return colors.success[50];

      case "error":
        return colors.error[50];
    }
  };

  const getIcon = (type: INotification["type"]) => {
    switch (type) {
      case "success":
        return (
          <MaterialCommunityIcons
            name="check-circle"
            color={colors.success[500]}
            size={normalize(18)}
          />
        );

      case "error":
        return (
          <MaterialCommunityIcons
            name="close-circle"
            color={colors.error[500]}
            size={normalize(18)}
          />
        );
    }
  };

  const getColor = (type: INotification["type"]) => {
    switch (type) {
      case "success":
        return colors.success[500];

      case "error":
        return colors.error[500];
    }
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(removeNotification(notification.id));
    }, 3000);
  }, []);

  return (
    <Animated.View
      layout={Layout.delay(200)}
      key={notification.id}
      entering={FadeInRight}
      exiting={FadeOutRight}
      style={Styles.notification(getBackgroundColor(notification.type)!)}>
      <View style={Styles.decoration(getColor(notification.type)!)} />
      {getIcon(notification.type)}
      <CustomText
        style={Styles.text(getColor(notification.type)!)}
        size="sm"
        weight="semibold">
        {notification.message}
      </CustomText>
    </Animated.View>
  );
};

export default Notification;

const Styles = StyleSheet.create({
  notification: (backgroundColor: string) =>
    ({
      paddingVertical: normalize(10),
      paddingHorizontal: normalize(15),
      borderRadius: normalize(15),
      backgroundColor,
      marginBottom: normalize(10),
      alignSelf: "flex-start",
      overflow: "hidden",
      flexDirection: "row",
      alignItems: "center",
    } as ViewStyle),

  text: (color: string) => ({
    color,
    marginLeft: normalize(5),
  }),

  decoration: (backgroundColor: string) =>
    ({
      width: normalize(5),
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      borderBottomLeftRadius: normalize(10),
      backgroundColor,
    } as ViewStyle),
});
