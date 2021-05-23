import React, { Component } from "react"
import { Text, View } from "react-native"
import Svg, {
  Rect,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
  Path,
} from "react-native-svg"

const BorderShadow = ({
  setting: {
    side = "bottom",
    width = 0,
    color = "#000",
    border = 0,
    opacity = 1,
    inset = false,
    style = {},
  },
  children = null,
}) => {
  const linear = (key) => {
    return [
      <Stop
        offset="0"
        stopColor={color}
        stopOpacity={opacity}
        key={key + "Linear0"}
      />,
      <Stop
        offset="1"
        stopColor={color}
        stopOpacity="0"
        key={key + "Linear1"}
      />,
    ]
  }

  const lineWidth = border

  const getComponents = () => {
    switch (side) {
      case "top":
        return [
          <Svg
            height={lineWidth}
            width={width + lineWidth}
            style={{ position: "absolute", top: inset ? 0 : -lineWidth }}
          >
            <Defs>
              <LinearGradient id="top" x1="0" y1={lineWidth} x2="0" y2="0">
                {linear("BorderTop")}
              </LinearGradient>
              <LinearGradient
                id="top-inset"
                x1="0"
                y1="0"
                x2="0"
                y2={lineWidth}
              >
                {linear("BorderTopInset")}
              </LinearGradient>
            </Defs>
            <Rect
              x={0}
              y={0}
              width={width}
              height={lineWidth}
              fill={`url(#top${inset ? "-inset" : ""})`}
            />
          </Svg>,
          children != null && { ...children },
        ]
      case "bottom":
        return [
          children != null && { ...children },
          <Svg
            height={lineWidth}
            width={width + lineWidth}
            style={{ position: "absolute", bottom: inset ? -lineWidth : 0 }}
          >
            <Defs>
              <LinearGradient id="bottom" x1="0" y1="0" x2="0" y2={lineWidth}>
                {linear("BorderBottom")}
              </LinearGradient>
              <LinearGradient
                id="bottom-inset"
                x1="0"
                y1={lineWidth}
                x2="0"
                y2="0"
              >
                {linear("BorderBottomInset")}
              </LinearGradient>
            </Defs>
            <Rect
              x={0}
              y={0}
              width={width}
              height={lineWidth}
              fill={`url(#bottom${inset ? "-inset" : ""})`}
            />
          </Svg>,
        ]
      default:
        throw new Error(
          "Wrong Type of Side! We just support 'top' and 'bottom'"
        )
        return null
    }
  }

  const components = getComponents()
  return (
    <View style={[{ position: "relative", width: width }, style]}>
      {components.map((elem, index) => {
        return <React.Fragment key={index}>{elem}</React.Fragment>
      })}
    </View>
  )
}
export default BorderShadow
