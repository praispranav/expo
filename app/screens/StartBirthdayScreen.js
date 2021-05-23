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

export default class StartBirthdayScreen extends Component {
  static navigatorStyle = singleScreenNavigation

  constructor(props) {
    super(props)
    this.state = {
      showAndroidWheelPicker: false,
    }
    this.segmentedPicker = React.createRef()
  }

  onMonthSelected(index) {}

  onDaySelected(index) {}

  onYearSelected(index) {}

  render() {
    let days = []
    let days_ios = []
    for (let i = 1; i <= 31; i++) {
      days_ios.push(i.toString())
      days.push({ label: i.toString(), value: i.toString() })
    }

    let years = []
    let years_ios = []
    for (let i = 1900; i <= 2017; i++) {
      years.push({ label: i.toString(), value: i.toString() })
      years_ios.push(i.toString())
    }

    let months = [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ]

    const options = [
      {
        key: "Months",
        items: months.map((item) => {
          return { label: item, value: item }
        }),
      },
      {
        key: "Days",
        items: days,
      },
      {
        key: "Years",
        items: years,
      },
    ]

    const defaultSelections = []
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
            YOUR BIRTHDAY
          </Text>
        </View>
        {/* TODO */}
        {Platform.OS == "ios" ? (
          <View style={CommonStyles.pickerBox}>
            <WheelPicker
              onSelected={(event) => this.onMonthSelected(event)}
              isCurved={false}
              isCyclic
              selectedItemPosition={6}
              selectedItemTextColor={"#FAFAFA"}
              data={months}
              itemTextSize={28}
              style={{ width: deviceWidth / 3 }}
            />
            <WheelPicker
              onSelected={(event) => this.onDaySelected(event)}
              isCurved={false}
              isCyclic
              selectedItemPosition={8}
              selectedItemTextColor={"#FAFAFA"}
              data={days_ios}
              itemTextSize={28}
              style={{ width: deviceWidth / 3 }}
            />
            <WheelPicker
              onSelected={(event) => this.onYearSelected(event)}
              isCurved={false}
              isCyclic
              selectedItemPosition={100}
              selectedItemTextColor={"#FAFAFA"}
              data={years_ios}
              itemTextSize={28}
              style={{ width: deviceWidth / 3 }}
            />
          </View>
        ) : (
          <View style={CommonStyles.pickerBox}>
            <View style={[CommonStyles.buttonBox, { top: 80, left: 25 }]}>
              <GradientButton
                onPressButton={() =>
                  this.setState({ showAndroidWheelPicker: true })
                }
                setting={shadowOpt}
                style={{ bottom: 40 }}
                btnText="Select Birthday"
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
              onConfirm={() => this.setState({ showAndroidWheelPicker: false })}
              options={options}
            />
          </View>
        )}
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
    this.props.navigation.navigate("StartGenderScreen")
  }
}
