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
import {
  singleScreenNavigation,
} from "../config/navigatorStyle"
import SingleScreenCustomNavbar from "../elements/SingleScreenCustomNavbar"
export default class StartHeightScreen extends Component {
  static navigatorStyle = singleScreenNavigation

  constructor(props) {
    super(props)
    this.state = {
      showAndroidWheelPicker: false,
    }
    this.segmentedPicker = React.createRef()
  }

  onHeightSelected(index) {}

  onUnitSelected(index) {}

  render() {
    let heightItems = []
    let heightItems_android = []
    for (let i = 1; i <= 200; i++) {
      heightItems.push(i.toString())
      heightItems_android.push({ label: i.toString(), value: i.toString() })
    }

    let units = ["Cm", "m"]

    const options = [
      {
        key: "Height",
        items: heightItems_android,
      },
      {
        key: "Units",
        items: units.map((item) => {
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
            YOUR HEIGHT
          </Text>
        </View>
        {/* TODO */}
        {Platform.OS == "ios" ? (
          <View
            style={[
              CommonStyles.pickerBox,
              { justifyContent: "space-between" },
            ]}
          >
            <WheelPicker
              onSelected={(event) => this.onHeightSelected(event)}
              isCurved={false}
              isCyclic
              selectedItemPosition={178}
              selectedItemTextColor={"#FAFAFA"}
              data={heightItems}
              itemTextSize={24}
              style={{ width: deviceWidth / 3 }}
            />
            <WheelPicker
              onSelected={(event) => this.onUnitSelected(event)}
              isCurved={false}
              selectedItemTextColor={"#FAFAFA"}
              data={units}
              itemTextSize={24}
              style={{ width: deviceWidth / 3 }}
            />
          </View>
        ) : (
          <View>
            <View style={[CommonStyles.buttonBox, { top: 80 }]}>
              <GradientButton
                onPressButton={() =>
                  this.setState({ showAndroidWheelPicker: true })
                }
                setting={shadowOpt}
                style={{ bottom: 40 }}
                btnText="Select Height"
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
    this.props.navigation.navigate("UserProfileScreen")
  }
}
