import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { GetVideos } from "../../../../../Api/MovieDetail/Api"
import ModelMovie from "../../../../../components/UI/ModalMovie/ModelMovie"
import VideoThumbnail from "react-video-thumbnail"

const TabVideo = () => {
  const dispatch = useDispatch()
  const idMovie = useParams()
  const [isOpen, setOpen] = useState(false)
  const listVideo = useSelector((state) => state.videos.results)
  useEffect(() => {
    dispatch(GetVideos(idMovie.id))
  }, [])
  return (
    <div className="relative top-0 left-0 ">
      <div className="flex top-0 left-0 overflow-x-scroll rounded-lg">
        {listVideo.map((video) => (
          <div
            className="min-w-[500px] min-h-[300px] p-0 m-0 top-0 left-0 justify-center items-center flex"
            style={{
              backgroundImage: `url("${(
                <VideoThumbnail videoUrl={`https://www.youtube.com/watch?v=${video.key}}`} snapshotAtTime={1} />
              )}")`,
            }}
            key={video.id}
          >
            <ModelMovie isOpen={isOpen} videoID={video.key} setOpen={setOpen} channel={video.site} />
            <button onClick={() => setOpen(true)} className="text-[60px]">
              <i className="fa-solid fa-circle-play text-black"></i>
            </button>
          </div>
        ))}
        <div className="min-w-[180px] w-[138px] min-h-[300px] p-0 m-0 top-0 left-0 justify-center items-center flex">
          <a href="#" className="font-bold text-[20px]">
            View more <i className="fa-solid fa-circle-right mt-1"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TabVideo
