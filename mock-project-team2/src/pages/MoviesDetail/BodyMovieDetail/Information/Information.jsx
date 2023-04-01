import React from "react"
import { useSelector } from "react-redux"

const Information = () => {
  const status = useSelector((state) => state.movieDetail.statusMovie)
  const originalTitle = useSelector((state) => state.movieDetail.originalTitle)
  const budget = useSelector((state) => state.movieDetail.budget)
  const revenue = useSelector((state) => state.movieDetail.revenue)
  return (
    <div>
      <div className="pb-4">
        <p className="font-bold text-[20px]">Status</p>
        <p>{status}</p>
      </div>
      <div className="pb-4">
        <p className="font-bold text-[20px]">Original Name</p>
        <p>{originalTitle}</p>
      </div>
      <div className="pb-4">
        <p className="font-bold text-[20px]">Network</p>
        <p>더 글로리</p>
      </div>
      {budget === 0 ? null : (
        <div className="pb-4">
          <p className="font-bold text-[20px]">Budget</p>
          <p>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(budget)}</p>
        </div>
      )}
      {revenue === 0 ? null : (
        <div className="pb-4">
          <p className="font-bold text-[20px]">Revenue</p>
          <p>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(revenue)}</p>
        </div>
      )}
    </div>
  )
}

export default Information
