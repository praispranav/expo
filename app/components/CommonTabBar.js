import React, { Component } from "react"

import PrimeTabBar from "../elements/PrimeTabBar"

export default class CustomTabBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <PrimeTabBar
        navigation={this.props.navigation}
        isActive={this.props.isActive}
        tabBtn0={{
          activeBtn: require("./../assets/img/healer/activeStethoscope.png"),
          inactiveBtn: require("./../assets/img/healer/stethoscope.png"),
          width: 28,
          height: 30,
          onPressButton: this._onHomeIconClick.bind(this),
        }}
        tabBtn1={{
          activeBtn: require("./../assets/img/healer/activeDrugs.png"),
          inactiveBtn: require("./../assets/img/healer/drugs.png"),
          width: 24,
          height: 24,
          buttonAction: this._onDrugsIconClick.bind(this),
        }}
        tabBtn2={{
          activeBtn: require("./../assets/img/healer/activeDoctors.png"),
          inactiveBtn: require("./../assets/img/healer/doctors.png"),
          width: 18,
          height: 24,
          buttonAction: this._onDoctorsIconClick.bind(this),
        }}
        tabBtn3={{
          activeBtn: require("./../assets/img/healer/activeDashboard.png"),
          inactiveBtn: require("./../assets/img/healer/dashboard.png"),
          width: 24,
          height: 20,
          buttonAction: this._onDashboardIconClick.bind(this),
        }}
        tabBtn4={{
          activeBtn: require("./../assets/img/healer/activeProfile.png"),
          inactiveBtn: require("./../assets/img/healer/profile.png"),
          width: 21,
          height: 25,
          buttonAction: this._onProfileIconClick.bind(this),
        }}
      />
    )
  }

  // Handle click buttons of tabbar
  _onHomeIconClick() {
    // this.props.navigation.canGoBack() && this.props.navigation.goBack()
    this.props.navigation.navigate("MainNavigator")
  }

  _onDrugsIconClick() {
    // this.props.navigation.canGoBack() && this.props.navigation.popToTop()
    this.props.navigation.navigate("DrugScreen")
  }

  _onDoctorsIconClick() {
    // this.props.navigation.canGoBack() && this.props.navigation.popToTop()
    this.props.navigation.navigate("ListDoctorsScreen")
  }

  _onDashboardIconClick() {
    // this.props.navigation.canGoBack() && this.props.navigation.popToTop()
    this.props.navigation.navigate("DashboardTestIndicatorsScreen")
  }

  _onProfileIconClick() {
    // this.props.navigation.canGoBack() && this.props.navigation.popToTop()
    this.props.navigation.navigate("UserProfileScreen")
  }
}
