import React from 'react'
import { View, TextInput, Image } from 'react-native'

import Colors from '../config/colors'

const LoginField = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: props.width,
        height: props.height,
        marginBottom: 25,
        borderColor: 'rgb(229,229,229)',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 50,
        backgroundColor: '#FFFFFF',
      }}
    >
      <View
        style={{
          position: 'absolute',
          bottom: 12,
          left: 20,
          width: 22,
          height: 17,
        }}
      >
        <Image source={props.icon} style={props.style} />
      </View>
      <TextInput
        multiline={props.isMultiline}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        style={{
          width: 300,
          height: 45,
          paddingLeft: 50,
          color: 'rgb(150,150,150)',
          fontSize: 16,
        }}
        underlineColorAndroid='transparent'
      />
    </View>
  )
}

export default LoginField
