import React, { useEffect, useState, memo } from "react"
import PropTypes from "prop-types"
import { Button } from "@mui/material"

const ButtonCustom = (props) => {
  const [isRound, setIsRound] = useState(4)
  const { round = false, fullWidth, width, to, link, onClickActions, arrayCheck, listData } = props

  useEffect(() => {
    if (round) {
      setIsRound(20)
    }
  }, [])

  return (
    <>
      {listData &&
        listData.map((value) => (
          <Button
            key={value.id}
            variant={arrayCheck === undefined || arrayCheck.includes(value.id) ? "contained" : "outlined"}
            style={{
              borderRadius: isRound,
              marginRight: 8,
              marginBottom: 8,
              height: 28,
              fontSize: 12,
              backgroundColor: arrayCheck === undefined || arrayCheck.includes(value.id) ? "rgb(1,180,228)" : "white"
            }}
            onClick={() => onClickActions(value.id)}
          >
            {value.name}
          </Button>
        ))}
    </>
  )
}

ButtonCustom.propTypes = {
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  width: PropTypes.number,
  to: PropTypes.string,
  link: PropTypes.string,
  variant: PropTypes.string,
  onClickActions: PropTypes.func,
  arrayCheck: PropTypes.array,
  listData: PropTypes.array,
}

export default memo(ButtonCustom)
