import React from "react"
import PropTypes from "prop-types"
import Space from "./Space"
import Tippy from "@tippyjs/react"

const CardActionMovieList = (props) => {
  const { header, content, statusIconQuestionMark, contentTippy, border } = props
  return (
    <div className="mr-4">
      {statusIconQuestionMark ? (
        <div className="flex items-center">
          <div className="block items-center w-fit text-[1em] font-light mr-2.5 mb-2.5 pt-3 px-0">{header}</div>
          <Tippy content={contentTippy}>
            <i className="fa-solid fa-circle-question text-gray-400"></i>
          </Tippy>
        </div>
      ) : (
        <div className="flex items-center">
          <div className="block items-center w-fit text-[1em] font-light mr-2.5 mb-2.5 pt-3 px-0">{header}</div>
        </div>
      )}
      <div className="card-action-content">{content}</div>
      <Space />
      {border && <div className="w-full h-px border mx-0 my-[4] border-solid border-[#EEEEEE]"></div>}
    </div>
  )
}

CardActionMovieList.propTypes = {
  header: PropTypes.string,
  content: PropTypes.element,
  statusIconQuestionMark: PropTypes.bool,
  contentTippy: PropTypes.string,
  border: PropTypes.bool,
}

export default CardActionMovieList
