import React, { Component } from "react"
import {
  Text,
  View,
  StyleSheet,
} from "react-native"


import CommonStyles, {
  deviceHeight,
  NAV_HEIGHT,
  TAB_HEIGHT,
} from "../config/CommonStyles"
import MenuItemBox from "../components/MenuItemBox"
import CustomTabBar from "../components/CommonTabBar"
import GradientNavigationBar from "../elements/GradientNavigationBar"

export default class MainServiceScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const titleImgStyle = {
      width: 73,
      height: 18,
    }

    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigation={this.props.navigation}
          isBack={false}
          screenTitle="image"
          titleImg={require("./../assets/img/person/logoHealer2.png")}
          titleImgStyle={titleImgStyle}
          rightButtons={[
            {
              key: 1,
              buttonIcon: require("./../assets/img/healer/email.png"),
              //buttonAction: this._handleClickEmailButton.bind(this),
              buttonWidth: 24,
              buttonHeight: 19,
            },
            {
              key: 2,
              buttonIcon: require("./../assets/img/healer/notification.png"),
              //buttonAction: this._handleClickNotificationButton.bind(this),
              buttonWidth: 19,
              buttonHeight: 22,
            },
          ]}
        />
        <View style={styles.titleBox}>
          <Text
            style={[
              CommonStyles.titleText,
              CommonStyles.blackColor,
              CommonStyles.mediumBold,
              { lineHeight: 49, marginBottom: 7 },
            ]}
          >
            Hello Jonas,
          </Text>
          <Text
            style={[
              CommonStyles.titleText,
              CommonStyles.lightgreyColor,
              CommonStyles.extraBold,
            ]}
          >
            HOW CAN WE TAKE CARE YOURSELF?
          </Text>
        </View>
        <View style={styles.fullField}>
          <View style={styles.colMainLeft}>
            <MenuItemBox
              boxTitle="Find Doctor"
              boxSubTitle="113 Doctors"
              boxIcon={require("./../assets/img/healer/surgeonIcon.png")}
              boxIconWidth={20}
              boxIconHeight={26}
              //onPressBoxItem={this._handleClickFindDoctor.bind(this)}
            />
            <MenuItemBox
              boxTitle="Appointment"
              boxSubTitle="59 available"
              boxIcon={require("./../assets/img/healer/medicineBookIcon.png")}
              boxIconWidth={20}
              boxIconHeight={26}
              onPressBoxItem={this._handleClickAppointment.bind(this)}
            />
          </View>
          <View style={styles.colMainRight}>
            <MenuItemBox
              boxTitle="Find Hospital"
              boxSubTitle="269 hospital"
              boxIcon={require("./../assets/img/healer/hospital.png")}
              boxIconWidth={26}
              boxIconHeight={25}
             // onPressBoxItem={this._handleClickFindHospital.bind(this)}
            />
            <MenuItemBox
              boxTitle="Price Services"
              boxSubTitle="26 services"
              boxIcon={require("./../assets/img/healer/clipboard1.png")}
              boxIconWidth={22}
              boxIconHeight={26}
              //onPressBoxItem={this._handleClickServicePrice.bind(this)}
            />
          </View>
        </View>
        <CustomTabBar navigation={this.props.navigation} isActive="tab0" />
      </View>
    )
  }

 // Go to AppointmentScreen
 _handleClickAppointment() {
  this.props.navigation.push("AppointmentScreen")
}

_handleClickNotificationButton() {
  //this.props.navigation.push("NotificationScreen")
}

_handleClickEmailButton() {
  // TODO: Click email button
}

// Go to FindDoctorScreen
_handleClickFindDoctor() {
  //this.props.navigation.push("FindDoctorScreen")
}

// Go to FindHospitalScreen
_handleClickFindHospital() {
  //this.props.navigation.push("FindHospitalScreen")
}

// Go to ServicePriceScreen
_handleClickServicePrice() {
  //this.props.navigation.push("ServiceScreen")
}


}

const ELEMENT_HEIGHT = 430
const spaceHeight = deviceHeight - NAV_HEIGHT - TAB_HEIGHT - ELEMENT_HEIGHT

const styles = StyleSheet.create({
  titleBox: {
    marginTop: spaceHeight * 0.1 + NAV_HEIGHT,
    paddingLeft: 27,
    paddingRight: 27,
  },
  fullField: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: spaceHeight * 0.2 - 15,
    marginBottom: spaceHeight * 0.55 - 15,
  },
  colMainLeft: {
    flex: 1,
    marginRight: 8,
  },
  colMainRight: {
    flex: 1,
    marginLeft: 8,
  },
})
