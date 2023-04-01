/* eslint-disable react/no-unescaped-entities */
import React from "react"

const ShowMe = () => {
  return (
    <div>
      <div className="px-0 py-1">
        <i className="fa-solid fa-circle-dot text-[rgb(1,180,228)] mr-2"></i>
        <span>Everything</span>
      </div>
      <div className="px-0 py-1">
        <i className="fa-solid fa-circle text-[rgb(241,243,245)] mr-2 border border-solid  border-[#ccc] rounded-[50%]"></i>
        <span>Movies I Haven't Seen</span>
      </div>
      <div className="px-0 py-1">
        <i className="fa-solid fa-circle text-[rgb(241,243,245)] mr-2 border border-solid border-[#ccc]  rounded-[50%]"></i>
        <span>Movies I Have Seen</span>
      </div>
    </div>
  )
}

ShowMe.propTypes = {}

export default ShowMe
