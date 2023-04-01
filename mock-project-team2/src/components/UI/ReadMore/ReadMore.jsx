/* eslint-disable react/prop-types */
import { useState } from "react"

const ReadMore = ({ text }) => {
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }
  return (
    <div className="text">
      {isReadMore ? <span>{text?.slice(0, 740)}</span> : <span>{text}</span>}
      <span onClick={toggleReadMore} className="read-or-hide">
        {text.length < 740 ? (
          <span>{text}</span>
        ) : isReadMore ? (
          <span className="text-blue-800 font-bold cursor-pointer ml-2 hover:text-[#01b4e4]">
            ... Read more <i className="fa-solid fa-angle-right text-sm"></i>
          </span>
        ) : (
          <span className="cursor-pointer text-blue-800 font-bold ml-2">Show less </span>
        )}
      </span>
    </div>
  )
}

export default ReadMore
