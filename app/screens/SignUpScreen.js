import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import LoginField from '../components/LoginField'
import CustomButton from '../components/CustomButton'
import Colors from '../config/colors'
import CheckBox from '../components/CheckBox'

const LoginScreen = (props) => {
  const [toggleCheckbox, setToggleCheckbox] = useState(false)

  const SignInButtonHandler = () => {
    if (toggleCheckbox === true) {
      //props.navigation.navigate('ForumCategories')
      props.navigation.navigate('MainNavigator')
    }
  }

  const toggleHandler = () => {
    if (toggleCheckbox) {
      setToggleCheckbox(false)
    } else {
      setToggleCheckbox(true)
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 150,
        }}
      >
        <Text style={{ fontSize: 30, fontFamily: 'Roboto-Black' }}>
          SIGN UP
        </Text>
        <View style={{ marginVertical: 50, alignItems: 'center' }}>
          <LoginField
            placeholder='Username'
            secureTextEntry={false}
            icon={require('../assets/icons/avatar.png')}
            isMultiline={false}
            width={'80%'}
            height={45}
          />
          <LoginField
            placeholder='Password'
            secureTextEntry={true}
            icon={require('../assets/icons/padlock.png')}
            isMultiline={false}
            width={'80%'}
            height={45}
          />
          <LoginField
            placeholder='Email'
            secureTextEntry={false}
            icon={require('../assets/icons/envelope.png')}
            isMultiline={false}
            width={'80%'}
            height={45}
          />
          <View style={{ flexDirection: 'row', width: '75%', marginRight: 20 }}>
            {/* checkbox */}
            <CheckBox
              label='Do you agree with our Term of Use and Policy?'
              checked={toggleCheckbox}
              onChange={toggleHandler}
              checkedImage={require('../assets/icons/check.png')}
              uncheckedImage={require('../assets/icons/icUncheck.png')}
            />
          </View>
        </View>
        {!toggleCheckbox ? (
          <View style={{ width: '80%', paddingVertical: 20 }}>
            <Text
              style={{
                color: Colors.brandDanger,
                fontFamily: 'Roboto-Bold',
                fontSize: 16,
                textAlign: 'left',
              }}
            >
              You have to accept Terms of Use and our Policy to sign up!
            </Text>
          </View>
        ) : null}
        <CustomButton text='SIGN UP' onPress={SignInButtonHandler} />
        <View style={{ marginVertical: 10, flexDirection: 'row' }}>
          <Text style={{ color: 'rgba(150,150,150,150)' }}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Login')
            }}
          >
            <Text
              style={{ color: Colors.brandInfo, fontFamily: 'Roboto-Bold' }}
            >
              Login!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen
