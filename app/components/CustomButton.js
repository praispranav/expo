import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Colors from '../config/colors'

const GradientButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        width: '80%',
        height: 50,
        borderRadius: 20,
        backgroundColor: Colors.brandPrimary,
      }}
      onPress={props.onPress}
    >
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text
          style={{ color: 'white', fontSize: 22, fontFamily: 'Roboto-Bold' }}
        >
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default GradientButton
