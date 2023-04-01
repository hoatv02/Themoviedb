import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { GetImage } from "../../../../../Api/MovieDetail/Api"

const TabBackdrop = () => {
  const listBackdrop = useSelector((state) => state.images.backdrops)
  const dispatch = useDispatch()
  const idMovie = useParams()
  useEffect(() => {
    dispatch(GetImage(idMovie.id))
  }, [])
  return (
    <div className="relative top-0 left-0 ">
      <div className="flex top-0 left-0 overflow-x-scroll rounded-lg">
        {listBackdrop.map((backdrop) => (
          <div className="min-w-[500px] p-0 m-0 top-0 left-0" key={backdrop.aspect_ratio}>
            <img className="w-full h-full" src={"https://image.tmdb.org/t/p/w500" + backdrop.file_path} />
          </div>
        ))}
        <div className="min-w-[180px] w-[138px] p-0 m-0 top-0 left-0 justify-center items-center flex">
          <a href="#" className="font-bold text-[20px]">
            View more <i className="fa-solid fa-circle-right mt-1"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TabBackdrop
