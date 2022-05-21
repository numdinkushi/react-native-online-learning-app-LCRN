import React from 'react'
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native'
import { FONTS, COLORS, SIZES,  } from '../constants'

const CategoryCard = ({category, containerStyle, imageStyle}) => {
  return (
   <TouchableOpacity 
   >
       <ImageBackground 
        source={category?.thumbnail}
        resizeMode="cover"
        style={{
            height:150,
            width:200,
            paddingVertical: SIZES.padding,
            paddingHorizontal: SIZES.radius,
            justifyContent:"flex-end",
            ...containerStyle,
        }}
        imageStyle={imageStyle}
       >
           <Text
            style={{
                color:COLORS.white,
                ...FONTS.h2
            }}
           >
            {category?.title}
           </Text>
       </ImageBackground>
   </TouchableOpacity>
  )
}

export default CategoryCard