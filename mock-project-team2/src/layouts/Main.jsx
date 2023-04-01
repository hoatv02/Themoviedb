import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "../components/UI/Footer/Footer"
import Header from "../components/UI/Header/Header"
import PropTypes from "prop-types"

const Main = ({ display }) => {
  return (
    <div>
      <Header display={display} />
      <div className="w-full">
        <div className="flex justify-center items-center m-auto mb-[100px]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

Main.propTypes = {
  display: PropTypes.string,
}

export default Main
