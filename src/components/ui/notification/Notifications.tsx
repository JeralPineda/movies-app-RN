import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import Animated, {Layout} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppSelector} from '../../store/store';
import {normalize} from '../../utils';
import Notification from './Notification';

type Position = 'left' | 'right';

const Notifications = ({position = 'left'}: {position?: Position}) => {
  const {notifications} = useAppSelector(state => state.notification);

  const {top} = useSafeAreaInsets();

  return (
    <View style={Styles.Container(top, position)}>
      <Animated.View style={Styles.innerContainer} layout={Layout}>
        {notifications?.map(notification => (
          <Notification notification={notification} key={notification.id} />
        ))}
      </Animated.View>
    </View>
  );
};

export default Notifications;

const Styles = StyleSheet.create({
  Container: (top: number, position: Position) =>
    ({
      position: 'absolute',
      top: top + normalize(70),
      left: position === 'left' ? 0 : undefined,
      right: position === 'right' ? 0 : undefined,
    } as ViewStyle),

  innerContainer: {
    padding: normalize(15),
  },
});
