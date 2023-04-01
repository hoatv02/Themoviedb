import React from "react"
import { useSelector } from "react-redux"

const ImgHeader = () => {
  const posterPath = useSelector((state) => state.movieDetail.posterPath)
  return (
    <div className="w-full min-w-full h-full">
      <img className="block w-full min-w-full h-full min-h-full border-0" src={posterPath} />
    </div>
  )
}

export default ImgHeader
