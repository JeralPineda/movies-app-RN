import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import styled from "styled-components";

const Skeleton = ({ width, height, rounded, marginBottom, marginRight }) => {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
        }),
      ])
    ).start();
  }, [opacity]);

  return <SkeletonAnimated style={{ opacity, height, width, marginBottom, borderRadius: rounded, marginRight }} />;
};

export default Skeleton;

const SkeletonAnimated = styled(Animated.View)`
  background-color: ${(props) => props.theme.GRAY_EXTRA_LIGHT};
  /* flex: 1; */
`;
