import React, { Component } from "react"
import {
  Text,
  View,
  StyleSheet,
} from "react-native"


import GradientButton from "../elements/GradientButton"
import CommonStyles, { shadowOpt, spaceHeight } from "../config/CommonStyles"
import { noNavTabbarNavigation } from "../config/navigatorStyle"
import GradientNavigationBar from "../elements/GradientNavigationBar"
import SelectBox from "../elements/SelectBox"

export default class AppointmentScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigation={this.props.navigation}
          titleText="Appointment"
        />
        <View style={CommonStyles.screenTitleBox}>
          <Text
            style={[
              CommonStyles.titleText,
              CommonStyles.lightgreyColor,
              CommonStyles.extraBold,
            ]}
          >
            CREATE AN APPOINTMENT.
          </Text>
        </View>
        <View style={styles.formBox}>
          <SelectBox label="Choose Clinic/Hospital" />
          <SelectBox label="Dr.Amanda" />
          <SelectBox label="Book Time" />
          <SelectBox label="Complaint" />
        </View>
        <View style={[CommonStyles.buttonBox, { marginBottom: 30 }]}>
          <GradientButton
            onPressButton={this._handleAddAppointment.bind(this)}
            setting={shadowOpt}
            btnText="ADD APPOINTMENT"
          />
        </View>
      </View>
    )
  }

  // Go to AppointmentDetailScreen
  _handleAddAppointment() {
    this.props.navigation.push("AppointmentDetailScreen")
  }
}

const styles = StyleSheet.create({
  formBox: {
    height: 255,
    alignItems: "center",
    marginBottom: spaceHeight * 0.32,
  },
})
