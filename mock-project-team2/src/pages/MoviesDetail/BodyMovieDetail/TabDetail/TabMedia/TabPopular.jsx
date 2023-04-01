import React, { useState } from "react"
import { useSelector } from "react-redux"
import ModelMovie from "../../../../../components/UI/ModalMovie/ModelMovie"

const TabPopular = () => {
  const popularVideo = useSelector((state) => state.videos.firstVieo)
  const popularBackdrop = useSelector((state) => state.images.fisrtBackdrop)
  const popularPoster = useSelector((state) => state.images.fisrtPoster)
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="relative top-0 left-0 ">
      <div className="flex top-0 left-0 overflow-x-scroll rounded-lg">
        <div className="min-w-[500px] min-h-[300px] p-0 m-0 top-0 left-0 justify-center items-center flex">
          <button onClick={() => setOpen(true)} className="text-[60px]">
            <i className="fa-solid fa-circle-play text-black"></i>
          </button>
        </div>
        <div className="min-w-[500px] p-0 m-0 top-0 left-0">
          <img className="w-full h-full" src={"https://image.tmdb.org/t/p/w500" + popularBackdrop.file_path} />
        </div>
        <div className="min-w-[180px] w-[138px] p-0 m-0 top-0 left-0">
          <img className="w-full h-full" src={"https://image.tmdb.org/t/p/w500" + popularPoster.file_path} />
        </div>
      </div>
    </div>
  )
}

export default TabPopular
