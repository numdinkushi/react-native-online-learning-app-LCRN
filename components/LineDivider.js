import React from 'react'
import { View, Text } from 'react-native'
import { COLORS } from '../constants'
const LineDivider = ({lineStyle}) => {
  return (
    <View 
        style={{
            height:2,
            width:"100%",
            backgroundColor:COLORS.gray20,
            ...lineStyle 
        }}
    >
      <Text>LineDivider</Text>
    </View>
  )
}

export default LineDivider