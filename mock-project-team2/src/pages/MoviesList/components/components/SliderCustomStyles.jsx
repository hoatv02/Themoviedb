import Slider from "@mui/material/Slider"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import PropTypes from "prop-types"
import { memo } from "react"

const defaultBoxShadow = "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)"
const SliderCustom = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "rgb(1,180,228)" : "rgb(1,180,228)",
  height: 2,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 12,
    width: 12,
    backgroundColor: "#fff",
    boxShadow: defaultBoxShadow,
    "&:focus, &:hover, &.Mui-active": {
      boxShadow: "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: defaultBoxShadow,
      },
    },
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: -6,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&:before": {
      display: "none",
    },
    "& *": {
      background: "transparent",
      color: theme.palette.mode === "dark" ? "#fff" : "#000",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "currentColor",
    },
  },
}))

function SliderCustomStyles({ marks, handleChangeValue, maxValue, step, defaultValue }) {
  return (
    <div>
      <Box>
        <SliderCustom
          aria-label="slider-custom"
          step={step}
          defaultValue={defaultValue}
          marks={marks}
          valueLabelDisplay="auto"
          max={maxValue}
          onChange={handleChangeValue}
        />
      </Box>
    </div>
  )
}

SliderCustomStyles.propTypes = {
  step: PropTypes.number,
  defaultValue: PropTypes.number,
  marks: PropTypes.array,
  maxValue: PropTypes.number,
  handleChangeValue: PropTypes.func,
}

export default memo(SliderCustomStyles)
