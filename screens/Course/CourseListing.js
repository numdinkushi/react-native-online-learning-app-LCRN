import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { HorizontalCourseCard, IconButton, LineDivider } from '../../components';
import { FONTS, SIZES, images, icons, dummyData } from '../../constants';

const CourseListing = () => {
  return (
    <View>
      <Text>CourseListing</Text>
    </View>
  );
};

export default CourseListing;
