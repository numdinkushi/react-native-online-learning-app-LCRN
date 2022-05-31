import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Share,
  StyleSheet,
} from 'react-native';
import {FONTS, COLORS, SIZES} from '../constants';
import {SharedElement} from 'react-navigation-shared-element';

const CategoryCard = ({
  sharedElementPrefix,
  category,
  containerStyle,
  imageStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        height: 150,
        width: 200,
        ...containerStyle,
      }}
      onPress={onPress}>
      {/* Image Background */}
      <SharedElement
        id={`${sharedElementPrefix}-CategoryCard-Bg-${category?.id}`}
        style={[StyleSheet.absoluteFillObject]}>
        <Image
          source={category?.thumbnail}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: SIZES.radius,
          }} />
      </SharedElement>
      {/* TItle */}
      <View
        style={{
          position: 'absolute',
          bottom: 50,
          left: 5,
        }}>
        <SharedElement
          id={`${sharedElementPrefix}-CategoryCard-Title-${category?.id}`}
          style={[StyleSheet.absoluteFillObject]}>
          <Text
            style={{
                position: 'absolute',
              color: COLORS.white,
              ...FONTS.h2,
            }}>
            {category?.title}
          </Text>
        </SharedElement>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
