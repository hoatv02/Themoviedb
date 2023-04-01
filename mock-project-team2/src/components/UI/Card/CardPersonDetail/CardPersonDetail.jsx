/* eslint-disable react/prop-types */
import React, { useRef } from "react"
// eslint-disable-next-line react/prop-types
const CardPersonDetail = ({ children }) => {
  const elRef = useRef()
  const handleHover = (e) => {
    if (e.target.scrollLeft > 0) {
      elRef.current.style.opacity = 0
    } else {
      elRef.current.style.opacity = 1
    }
  }
  return (
    <div className="relative">
      <div className="flex gap-2 slider cursor-pointer relative">
        <div
          id="scrollnav" className = "flex overflow-x-auto gap-2  slider max-w-[1320px] cursor-pointer"
          onScroll={(e) => handleHover(e)}
        >
          {children}
        </div>
        <div
          id="scrollnavs"
          className="absolute bg-gradient-to-r transition-[linear] duration-500 opacity-100 top-0 right-0  from-transparent to-white w-[100px] h-full p-10"
          ref={elRef}
        ></div>
      </div>
    </div>
  )
}

export default CardPersonDetail
