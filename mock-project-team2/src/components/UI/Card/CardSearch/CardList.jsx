import React from "react"
import PropTypes from "prop-types"
import { Skeleton } from "@mui/material"

const CardList = ({ data, status }) => {
  if (status === "loading" || status === "idle") {
    return (
      <div className="pr-0 pl-[30px] bg-white flex w-[calc(100vw_-_80px_-_268px)] max-w-[calc(1400px - 80px - 268px)] flex-wrap flex-initial mb-2">
        <Skeleton variant="rounded" width="100%" height="40px" animation="wave" className="border-y border-[#ccc]" />
        <Skeleton variant="rounded" width="100%" height="40px" animation="wave" className="border-y border-[#ccc]" />
        <Skeleton variant="rounded" width="100%" height="40px" animation="wave" className="border-y border-[#ccc]" />
        <Skeleton variant="rounded" width="100%" height="40px" animation="wave" className="border-y border-[#ccc]" />
        <Skeleton variant="rounded" width="100%" height="40px" animation="wave" className="border-y border-[#ccc]" />
        <Skeleton variant="rounded" width="100%" height="40px" animation="wave" className="border-y border-[#ccc]" />
        <Skeleton variant="rounded" width="100%" height="40px" animation="wave" className="border-y border-[#ccc]" />
        <Skeleton variant="rounded" width="100%" height="40px" animation="wave" className="border-y border-[#ccc]" />
      </div>
    )
  }

  return (
    <div className="pr-0 pl-[30px] bg-white flex w-[calc(100vw_-_80px_-_268px)] max-w-[calc(1400px - 80px - 268px)] flex-wrap flex-initial mb-2">
      <ul className="list-none m-0 p-0 w-full">
        {data.map((e) => {
          return (
            <li key={e.id} className="border-y border-[#ccc] h-[40px] flex ml-0 items-center">
              <a className="no-underline font-normal">
                <div className="flex items-center text-[20px]">{e.name}</div>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

CardList.propTypes = {
  data: PropTypes.array,
  status: PropTypes.string,
}

export default CardList
