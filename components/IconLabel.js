import React from 'react';
import {View, Text, Image} from 'react-native';
import {SIZES, COLORS, FONTS} from '../constants';

const IconLabel = ({containerStyle, icon, iconStyle, label, labelStyle}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        ...containerStyle,
      }}>
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.gray20,
          ...iconStyle,
        }}
      />
      <Text
        style={{
          marginLeft: SIZES.base,
          color: COLORS.gray30,
          ...FONTS.body3,
          ...labelStyle,
        }}> 
        {label}
      </Text>
    </View>
  );
};

export default IconLabel;
