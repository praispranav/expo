import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  StyleSheet
} from 'react-native'

import Colors from '../config/colors';
import Wrapper from '../components/Wrapper';

const PinScreen = (props) => {
  const [value, setValue] = useState('')

  const Pin = (props) => {
    return (
      <View
        style={{
          width: 15,
          height: 15,
          borderWidth: 1,
          borderRadius: 100,
          ...props.style,
        }}
      />
    )
  }

  const Keyboard = (props) => {
    const keyboardHandler = () => {
      if (value.length > 4) {
        setValue(value)
      } else {
        setValue(value + props.num)
      }
    }

    return (
    
      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor='#DDDDDD'
        onPress={keyboardHandler}
        style={{
          backgroundColor: 'rgb(229,229,229)',
          width: 60,
          height: 60,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 30,
            color: 'rgba(150,150,150,150)',
            fontFamily: 'Roboto-Bold',
          }}
        >
          {props.num}
        </Text>
      </TouchableHighlight>
    )
  }

  const deleteHandler = () => {
    setValue(value.slice(0, value.length - 1))
  }

  return (
    <Wrapper>
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginTop: 40 }}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{ width: 150, height: 150 }}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 25, fontFamily: 'Roboto-Black' }}>
          LOGIN WITH THE PIN
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
          }}
        >
          <View style={{ marginHorizontal: 5 }}>
            {value.length > 0 ? (
              <Pin style={{ backgroundColor: 'black' }} />
            ) : (
              <Pin />
            )}
          </View>
          <View style={{ marginHorizontal: 5 }}>
            {value.length > 1 ? (
              <Pin style={{ backgroundColor: 'black' }} />
            ) : (
              <Pin />
            )}
          </View>
          <View style={{ marginHorizontal: 5 }}>
            {value.length > 2 ? (
              <Pin style={{ backgroundColor: 'black' }} />
            ) : (
              <Pin />
            )}
          </View>
          <View style={{ marginHorizontal: 5 }}>
            {value.length > 3 ? (
              <Pin style={{ backgroundColor: 'black' }} />
            ) : (
              <Pin />
            )}
          </View>
          <View style={{ marginHorizontal: 5 }}>
            {value.length > 4 ? (
              <Pin style={{ backgroundColor: 'black' }} />
            ) : (
              <Pin />
            )}
          </View>
        </View>
        <View
          style={{ flexDirection: 'row', marginVertical: 10, marginTop: 40 }}
        >
          <View style={{ marginHorizontal: 20 }}>
            <Keyboard num='1' />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Keyboard num='2' />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Keyboard num='3' />
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <View style={{ marginHorizontal: 20 }}>
            <Keyboard num='4' />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Keyboard num='5' />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Keyboard num='6' />
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <View style={{ marginHorizontal: 20 }}>
            <Keyboard num='7' />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Keyboard num='8' />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Keyboard num='9' />
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <View style={{ marginHorizontal: 20 }}>
            <TouchableOpacity
              onPress={deleteHandler}
              style={{
                width: 60,
                height: 60,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                source={require('../assets/icons/backspace.png')}
                style={{ width: 35, height: 35, tintColor: Colors.brandDanger }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Keyboard num='0' />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <TouchableOpacity
              onPress={() => {
                if (value.length === 5) {
                  //props.navigation.navigate('ForumCategories')
                  props.navigation.navigate('MainNavigator')
                }
              }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                source={require('../assets/icons/check-mark.png')}
                style={{
                  width: 35,
                  height: 35,
                  tintColor: Colors.brandSuccess,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginVertical: 20, flexDirection: 'row' }}>
          <Text style={{ color: 'rgba(150,150,150,150)' }}>Forgot Pin? </Text>
          <TouchableOpacity>
            <Text
              style={{ color: Colors.brandInfo, fontFamily: 'Roboto-Bold' }}
            >
              Set Up New
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

    </Wrapper>
  )
}
const styles = StyleSheet.create({
  container:{
    paddingBottom:20,
    flex: 1, 
    backgroundColor: '#FFFFFF',
 
  }
})
export default PinScreen
