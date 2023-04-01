import React, { memo, useRef } from "react"
import PropTypes from "prop-types"
import Select from "react-select"
import makeAnimated from "react-select/animated"

const animatedComponents = makeAnimated()
const InputTag = ({ onSelectedValue, onChangeValue, results }) => {
  const menuPortalTarget = useRef(document.body)
  let newData
  if (results === undefined) {
    newData = []
  } else {
    newData = results.map((item) => ({ ...item, label: item.name, value: item.name }))
  }

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      placeholder=""
      isMulti
      options={newData}
      className="basic-multi-select"
      classNamePrefix="select"
      menuPortalTarget={menuPortalTarget.current}
      onChange={onSelectedValue}
      onInputChange={onChangeValue}
    />
  )
}

InputTag.propTypes = {
  onSelectedValue: PropTypes.func,
  onChangeValue: PropTypes.func,
  results: PropTypes.array,
}

export default memo(InputTag)
