import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import styled from "styled-components";
import { horizontalScale, verticalScale } from "../../../utils/Metrics";
import Skeleton from "./Skeleton";

const SkeletonPaquetes = () => {
  return (
    <Container entering={FadeIn} exiting={FadeOut}>
      <Skeleton width={horizontalScale(230)} rounded={8} marginRight={verticalScale(10)} height={verticalScale(111)} />
      <Skeleton width={horizontalScale(230)} rounded={8} marginRight={verticalScale(10)} height={verticalScale(111)} />
      <Skeleton width={horizontalScale(230)} rounded={8} marginRight={verticalScale(10)} height={verticalScale(111)} />
      <Skeleton width={horizontalScale(230)} rounded={8} marginRight={verticalScale(10)} height={verticalScale(111)} />
      <Skeleton width={horizontalScale(230)} rounded={8} marginRight={verticalScale(10)} height={verticalScale(111)} />
      <Skeleton width={horizontalScale(230)} rounded={8} marginRight={verticalScale(10)} height={verticalScale(111)} />
      <Skeleton width={horizontalScale(230)} rounded={8} marginRight={verticalScale(10)} height={verticalScale(111)} />
      <Skeleton width={horizontalScale(230)} rounded={8} marginRight={verticalScale(10)} height={verticalScale(111)} />
    </Container>
  );
};
1;
export default SkeletonPaquetes;

const Container = styled(Animated.View)`
  /* flex: 1; */
  flex-direction: row;
  padding-horizontal: ${verticalScale(15)}px;
`;
