import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {FONTS, COLORS, SIZES, constants, icons} from '../constants';
import LineDivider from './LineDivider';
import { connect } from 'react-redux';

const ProfileValue = ({appTheme, icon, label, value, onPress}) => {
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
          backgroundColor: appTheme?.backgroundColor3,
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
                color: appTheme?.textColor
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
         height:15,
         tintColor:appTheme?.tintColor

     }}
     />
     
    </TouchableOpacity>
  );
};

const mapStateToProps = state => {
  return {
    appTheme: state.appTheme,
  };
};


const mapDispatchToProps = dispatch => {
  return {
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileValue);

