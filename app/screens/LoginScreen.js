import React from 'react';
import { View, Text, TouchableOpacity,Platform } from 'react-native';

import LoginField from '../components/LoginField';
import CustomButton from '../components/CustomButton';
import Colors from '../config/colors';

const LoginScreen = ({navigation}) => {
  const SignInButtonHandler = () => {
    navigation.navigate('StartNameScreen');
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
        <Text style={{ fontSize: 30, fontFamily: Platform.OS === "android" ? "Roboto-Black" : "System" }}>LOGIN</Text>
        <View style={{ marginVertical: 50, alignItems: 'center' }}>
          <LoginField
            placeholder='Username'
            secureTextEntry={false}
            icon={require('./../assets/icons/avatar.png')}
            isMultiline={false}
            width={'80%'}
            height={45}
          />
          <LoginField
            placeholder='Password'
            secureTextEntry={true}
            icon={require('./../assets/icons/padlock.png')}
            isMultiline={false}
            width={'80%'}
            height={45}
          />
        </View>
        <CustomButton text='LOGIN' onPress={SignInButtonHandler} />
        <View style={{ marginVertical: 10, flexDirection: 'row' }}>
          <Text style={{ color: 'rgba(150,150,150,150)' }}>
            Doesn't have an account?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp')
            }}
          >
            <Text
              style={{ color: Colors.brandInfo, fontFamily: Platform.OS === "android" ? "Roboto-Bold" : "System", }}
            >
              Sign Up!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen
