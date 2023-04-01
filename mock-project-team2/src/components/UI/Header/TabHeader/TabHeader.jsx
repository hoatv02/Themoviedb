import React from "react"

const TabHeader = () => {
  return (
    <div className="flex justify-center gap-x-12 p-3 bg-white border-b-2">
      <a href="#" className="text-sm  leading-6 text-gray-900 flex items-center  ">
        <p>OverView</p>
        <i className="fa-solid fa-caret-down ml-2"></i>
      </a>
      <a href="#" className="text-sm  leading-6 text-gray-900 flex items-center ">
        <p>Media</p>
        <i className="fa-solid fa-caret-down ml-2"></i>
      </a>
      <a href="#" className="text-sm  leading-6 text-gray-900 flex items-center ">
        <p>Fandom</p>
        <i className="fa-solid fa-caret-down ml-2"></i>
      </a>
      <a href="#" className="text-sm  leading-6 text-gray-900 flex items-center">
        <p>Share</p>
        <i className="fa-solid fa-caret-down ml-2"></i>
      </a>
    </div>
  )
}

export default TabHeader
