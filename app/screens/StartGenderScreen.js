import React, { Component } from "react"
import {
  Text,
  View,
  Platform,
} from "react-native"

import { WheelPicker } from "react-native-wheel-picker-android"
import AndroidWheelPicker from "react-native-segmented-picker"

import GradientButton from "../elements/GradientButton"

import CommonStyles, {
  deviceHeight,
  deviceWidth,
  shadowOpt,
  blueGradient,
} from "../config/CommonStyles"
import { singleScreenNavigation } from "../config/navigatorStyle"
import SingleScreenCustomNavbar from "../elements/SingleScreenCustomNavbar"

export default class StartGenderScreen extends Component {
  static navigatorStyle = singleScreenNavigation

  constructor(props) {
    super(props)
    this.state = {
      showAndroidWheelPicker: false,
    }
    this.segmentedPicker = React.createRef()
  }

  onGenderSelected(index) {}

  render() {
    const genders = ["FEMALE", "MALE", "OTHER", "SECRET"]

    const options = [
      {
        key: "Genders",
        items: genders.map((item) => {
          return { label: item, value: item }
        }),
      },
    ]

    return (
      <View style={CommonStyles.normalPage}>
        <SingleScreenCustomNavbar
          navigation={this.props.navigation}
          rightButtons={[
            {
              key: 1,
              buttonAction: this._handleClickNext.bind(this),
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
            YOUR GENDER
          </Text>
        </View>
        <View style={CommonStyles.pickerBox}>
          {/* TODO */}
          {Platform.OS == "ios" ? (
            <WheelPicker
              onSelected={(event) => this.onGenderSelected(event)}
              isCurved={false}
              selectedItemPosition={1}
              selectedItemTextColor={"#FAFAFA"}
              data={genders}
              itemTextSize={24}
              style={{ width: deviceWidth / 3 }}
            />
          ) : (
            <View>
              <View style={[CommonStyles.buttonBox, { top: 80, left: 25 }]}>
                <GradientButton
                  onPressButton={() =>
                    this.setState({ showAndroidWheelPicker: true })
                  }
                  setting={shadowOpt}
                  style={{ bottom: 40 }}
                  btnText="Select Gender"
                />

                <GradientButton
                  onPressButton={this._handleClickNext.bind(this)}
                  setting={shadowOpt}
                  btnText="NEXT"
                />
              </View>
              <AndroidWheelPicker
                visible={this.state.showAndroidWheelPicker}
                ref={this.segmentedPicker}
                onConfirm={() =>
                  this.setState({ showAndroidWheelPicker: false })
                }
                options={options}
              />
            </View>
          )}
        </View>
        {Platform.OS == "ios" && (
          <View style={[CommonStyles.buttonBox, { marginBottom: 20 }]}>
            <GradientButton
              onPressButton={this._handleClickNext.bind(this)}
              setting={shadowOpt}
              btnText="NEXT"
            />
          </View>
        )}
      </View>
    )
  }

  _handleClickNext() {
    this.props.navigation.navigate("StartWeightScreen")
  }
}
