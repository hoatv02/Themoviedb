import React from "react"
import Navbar from "./Navbar/Navbar"
import TabHeader from "./TabHeader/TabHeader"
import PropTypes from "prop-types"

const Header = ({ display }) => {
  return (
    <div className="w-[100%] ">
      <Navbar />
      {display && <TabHeader />}
    </div>
  )
}

Header.propTypes = {
  display: PropTypes.bool,
}

export default Header
