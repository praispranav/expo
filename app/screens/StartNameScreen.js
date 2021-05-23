import React, { Component } from "react"
import {
  Text,
  TextInput,
  View,
  Image,
} from "react-native"


import GradientButton from "../elements/GradientButton"
import CommonStyles, { deviceHeight, shadowOpt } from "../config/CommonStyles"
import { singleScreenNavigation } from "../config/navigatorStyle"
import SingleScreenCustomNavbar from "../elements/SingleScreenCustomNavbar"

export default class StartNameScreen extends Component {
  static navigatorStyle = singleScreenNavigation

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <SingleScreenCustomNavbar
          navigation={this.props.navigation}
          rightButtons={[
            {
              key: 1,
              buttonAction: this.onStartYourBirthDayScreen.bind(this),
            },
          ]}
        />
        <View style={CommonStyles.labelField}>
          <Text
            style={[
              CommonStyles.headerText,
              CommonStyles.greyColor,
              CommonStyles.mediumBold,
            ]}
          >
            YOUR NAME
          </Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <View style={CommonStyles.textInputField}>
            <Image
              source={require("../assets/img/healer/avatar.png")}
              style={{
                position: "absolute",
                bottom: 12,
                left: 20,
                width: 19,
                height: 22,
              }}
            />
            <TextInput
              placeholder="Full name"
              style={CommonStyles.textInput}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>
        <View style={{ height: 45, alignSelf: "center" }}>
          <GradientButton
            onPressButton={this.onStartYourBirthDayScreen.bind(this)}
            setting={shadowOpt}
            btnText="SUBMIT"
          />
        </View>
      </View>
    )
  }

  onStartYourBirthDayScreen() {
    this.props.navigation.navigate("StartBirthdayScreen")
  }
}
