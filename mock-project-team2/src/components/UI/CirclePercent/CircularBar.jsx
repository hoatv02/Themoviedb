import React from "react"

import PropTypes from "prop-types"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import ChangingProgressProvider from "./ChangingProgressProvider"

const CirclePercent = (props) => {
  const { width, height, percent } = props
  const newPercent = percent * 10

  const handleColor = (percent) => {
    let isColor
    if (percent >= 0 && percent <= 40) isColor = "rgb(219,35,96)"
    else if (percent >= 40 && percent <= 70) isColor = "rgb(210,213,49)"
    else isColor = "rgb(33,208,122)"
    return isColor
  }

  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: "#333",
        borderRadius: "50%",
        padding: 2,
      }}
    >
      <ChangingProgressProvider values={[0, newPercent]}>
        {(newPercent) => (
          <CircularProgressbar
            value={newPercent}
            text={`${newPercent}%`}
            styles={buildStyles({
              textColor: "#fff",
              textSize: "28px",
              fontWeight: 700,
              pathTransition: newPercent === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s",
              pathColor: handleColor(newPercent),
              trailColor: "#423D0F",
              fontSize: "40px",
            })}
          />
        )}
      </ChangingProgressProvider>
    </div>
  )
}

CirclePercent.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  percent: PropTypes.number,
}

export default CirclePercent
