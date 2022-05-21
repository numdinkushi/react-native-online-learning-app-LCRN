import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {FONTS, COLORS, SIZES, constants, icons} from '../constants';
import LineDivider from './LineDivider';

const ProfileValue = ({icon, label, value, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
      }}
      onPress={onPress}>
      {/* icon */}
      <View
        style={{
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          backgroundColor: COLORS.additionalColor4,
        }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            // color: COLORS.primary,
          }}
        />
      </View>
     {/* Label and value */}
     <View 
        style={{
            flex: 1,
            marginLeft: SIZES.radius,

        }}   
     >
         {label && 
         <Text 
            style={{
                color: COLORS.gray30,
                ...FONTS.body3,

            }}
         >
             {label}
             </Text>}
            <Text 
            style={{
                ...FONTS.h3,
                color: COLORS.gray50
            }} 
             >
                 {value}
             </Text>
     </View>

     {/* Icon */}
     <Image
     source={icons.right_arrow}
     style={{
         width:15,
         height:15

     }}
     />
     
    </TouchableOpacity>
  );
};

export default ProfileValue;
