import React, { Component } from "react"

import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  TouchableHighlight,
} from "react-native"
import CommonStyles from "../config/CommonStyles"
import { LinearGradient } from "expo-linear-gradient"

const MenuItemBox = (props) => {
  return (
    <LinearGradient
      start={{ x: 0.2, y: 0.2 }}
      end={{ x: 1.0, y: 2.0 }}
      colors={["rgb(150,150,150)", "rgb(105,105,105)"]}
      style={styles.boxMain}
    >
      <TouchableHighlight
        underlayColor={"rgb(75,102,234)"}
        style={styles.highLightBoxMain}
        onPress={props.onPressBoxItem}
      >
        <View>
          <Image
            source={props.boxIcon}
            style={[
              styles.boxIcon,
              {
                width: props.boxIconWidth,
                height: props.boxIconHeight,
              },
            ]}
          />
          <Text
            style={[
              CommonStyles.extraBold,
              CommonStyles.itemHeaderText,
              CommonStyles.whiteColor,
            ]}
          >
            {props.boxTitle}
          </Text>
          <Text
            style={[
              CommonStyles.whiteColor,
              CommonStyles.regularBold,
              { fontSize: 14, opacity: 0.6 },
            ]}
          >
            {props.boxSubTitle}
          </Text>
        </View>
      </TouchableHighlight>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  boxMain: {
    height: 135,
    borderWidth: 0,
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 15,
    elevation: 12,
  },
  highLightBoxMain: {
    height: 135,
    backgroundColor: "transparent",
    borderWidth: 0,
    borderRadius: 9,
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  boxIcon: {
    marginBottom: 24,
  },
})

export default MenuItemBox
