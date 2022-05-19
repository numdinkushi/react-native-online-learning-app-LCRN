import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { constants, COLORS } from '../constants';

const IconButton = ({containerStyle, icon, iconStyle, onPress}) => {
  return (
    <TouchableOpacity
        style={{
            ...containerStyle
        }}
        onPress={onPress}
    >
        <Image
            source={icon}
            resizeMode="contain"
            style={{
                width:30,
                height:30,
                tintColor: COLORS.white,
                ...iconStyle
            }}
        />
    </TouchableOpacity>
  )
    }
export default IconButton