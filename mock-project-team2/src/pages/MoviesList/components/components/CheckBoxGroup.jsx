import React, { memo } from "react"
import PropTypes from "prop-types"
import { Checkbox } from "@mui/material"

const CheckBoxGroup = (props) => {
  const { listDetailCheckBox, onShowMenu, statusCheckedHeader, arrayCheck } = props
  return (
    <div>
      {listDetailCheckBox.map((value, index) => (
        <div key={index} className="flex h-8 items-center">
          {statusCheckedHeader === undefined || statusCheckedHeader.length !== 0 ? (
            <Checkbox
              style={{ color: "rgb(1,180,228)" }}
              disabled={value.disabled}
              className="select__checkbox text-blue-500 text-blue-400"
              onChange={() => onShowMenu(value.description)}
              checked={arrayCheck === undefined || arrayCheck.includes(value.description) ? true : false}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 18 }, paddingLeft: 0 }}
            />
          ) : (
            <Checkbox
              style={{ color: "rgb(1,180,228)" }}
              disabled={value.disabled}
              className="select__checkbox text-blue-500 text-blue-400"
              onChange={() => onShowMenu(value.description)}
              checked={
                statusCheckedHeader === undefined || statusCheckedHeader.includes(value.description) ? true : false
              }
              sx={{ "& .MuiSvgIcon-root": { fontSize: 18 }, paddingLeft: 0 }}
            />
          )}
          <div className="block items-center w-fit text-[1em] font-light mr-2.5 mb-2.5 pt-3 pb-1 px-0">
            {value.description}
          </div>
        </div>
      ))}
    </div>
  )
}

CheckBoxGroup.propTypes = {
  listDetailCheckBox: PropTypes.array,
  onShowMenu: PropTypes.func,
  statusCheckedHeader: PropTypes.array,
  arrayCheck: PropTypes.array,
}

export default memo(CheckBoxGroup)
