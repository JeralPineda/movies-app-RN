// import {useFocusEffect} from "@react-navigation/native";
// import {useCallback, useEffect, useRef} from "react";
// import {Dimensions} from "react-native";
// import Animated, {
//   interpolate,
//   runOnJS,
//   useAnimatedRef,
//   useAnimatedScrollHandler,
//   useAnimatedStyle,
//   useSharedValue,
// } from "react-native-reanimated";
// import styled from "styled-components";
// import {horizontalScale, verticalScale} from "../../utils/Metrics";
// import FormLabel from "../shared/labels/FormLabel";

// const {width: SCREEN_WIDTH} = Dimensions.get("window");

// const carouselTime = 12 * 1000;

// const Carousel = ({data, title}) => {
//   const maxPosition = data.length;

//   const scrollRef = useRef(null);

//   const animatedRef = useAnimatedRef();

//   const intervalRef = useRef(null);

//   const indexPositionRef = useRef(0);

//   const prevIndexPosition = useSharedValue(0);

//   const currentIndex = useSharedValue(0);

//   /*  const currentIndex = useDerivedValue(() => {
//     return manualIndex.value;
//   }); */

//   /* useDerivedValue(() => {
//     scrollTo(animatedRef, SCREEN_WIDTH * currentIndex.value, 0, true);
//   }); */

//   useFocusEffect(
//     useCallback(() => {
//       if (scrollRef.current) {
//         handleInterval();
//       }

//       return () => clearInterval(intervalRef.current);
//     }, [scrollRef.current]),
//   );

//   useEffect(() => {
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   const handleInterval = () => {
//     clearInterval(intervalRef.current);

//     intervalRef.current = setInterval(() => {
//       handleScroll();
//     }, carouselTime);
//   };

//   const handleScroll = () => {
//     indexPositionRef.current++;

//     scrollRef.current.scrollTo({
//       x: indexPositionRef.current * SCREEN_WIDTH,
//       animated: true,
//     });

//     if (indexPositionRef.current === maxPosition) {
//       scrollRef.current.scrollTo({
//         x: 0,
//         animated: true,
//       });

//       indexPositionRef.current = 0;
//       return;
//     }
//   };

//   const addIndexPositionRef = value => {
//     indexPositionRef.current = value;
//   };

//   const onScroll = useAnimatedScrollHandler({
//     onScroll: e => {
//       const {x} = e.contentOffset;
//       currentIndex.value = x / SCREEN_WIDTH;
//       runOnJS(handleInterval)();
//     },
//     onBeginDrag: e => {
//       const {x} = e.contentOffset;
//       prevIndexPosition.value = Math.round(x / SCREEN_WIDTH);
//     },
//     onEndDrag: () => {
//       if (currentIndex.value < prevIndexPosition.value) {
//         // console.log("Carousel.jsx -> 93 ~", JSON.stringify(Math.round(currentIndex.value), null, 2));
//         runOnJS(addIndexPositionRef)(Math.floor(currentIndex.value));
//         runOnJS(handleInterval)();
//       } else {
//         runOnJS(addIndexPositionRef)(Math.floor(currentIndex.value));
//         runOnJS(handleInterval)();
//       }
//     },
//     onMomentumEnd: e => {
//       runOnJS(addIndexPositionRef)(Math.floor(currentIndex.value));
//       runOnJS(handleInterval)();
//     },
//   });

//   return (
//     <Container>
//       <FormContainer>{title && <FormLabel>{title}</FormLabel>}</FormContainer>
//       <Animated.ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         scrollEventThrottle={16}
//         decelerationRate="fast"
//         snapToInterval={SCREEN_WIDTH}
//         snapToEnd={false}
//         onMomentumScrollEnd={() => {}}
//         onScroll={onScroll}
//         ref={scrollRef}>
//         {data.map((item, index) => (
//           <RenderItem img={item.src} key={item.id} index={index} />
//         ))}
//       </Animated.ScrollView>

//       <CarouselDots>
//         {data.map((dot, index) => {
//           const inputRange = data.map((_, i) => i);

//           const outputRange = data.map((_, i) => (i === index ? 1 : 0.6));

//           const animatedDots = useAnimatedStyle(() => ({
//             transform: [
//               {scale: interpolate(currentIndex.value, inputRange, outputRange)},
//             ],
//             opacity: interpolate(currentIndex.value, inputRange, outputRange),
//           }));

//           return <CarouselDot key={dot.id} style={animatedDots} />;
//         })}
//       </CarouselDots>
//     </Container>
//   );
// };

// export default Carousel;

// const RenderItem = ({img}) => {
//   return (
//     <ImageContainer>
//       <PublicImage source={img} resizeMode="stretch" />
//     </ImageContainer>
//   );
// };

// const Container = styled.View`
//   padding-top: ${verticalScale(15)}px;
//   padding-bottom: ${verticalScale(20)}px;
// `;

// const ImageContainer = styled.View`
//   padding-horizontal: ${verticalScale(15)}px;
//   width: ${SCREEN_WIDTH}px;
//   height: ${verticalScale(180)}px;
// `;

// const PublicImage = styled.Image`
//   /* flex: 1; */
//   align-self: stretch;
//   width: 100%;
//   /* aspect-ratio: 2.4; */
//   height: 100%;
//   border-radius: ${verticalScale(8)}px;
// `;

// const CarouselDots = styled.View`
//   justify-content: center;
//   align-items: center;
//   flex-direction: row;
//   padding-top: ${verticalScale(10)}px;
// `;

// const CarouselDot = styled(Animated.View)`
//   width: ${verticalScale(8)}px;
//   height: ${verticalScale(8)}px;
//   border-radius: 100px;
//   margin-right: ${verticalScale(5)}px;
//   background-color: ${props => props.theme.GRAY_LIGHT};
// `;

// const FormContainer = styled.View`
//   padding-left: ${horizontalScale(15)}px;
// `;
