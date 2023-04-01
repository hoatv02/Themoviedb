import React from "react"
import PropTypes from "prop-types"

const HeaderSideBar = ({ header }) => {
  return <div className="h-[50px] flex items-center">{header}</div>
}

HeaderSideBar.propTypes = {
  header: PropTypes.string,
}

export default HeaderSideBar
