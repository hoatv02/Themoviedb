import React from "react"
import ModalVideo from "react-modal-video"
import "./ModalMovies.scss"
// eslint-disable-next-line react/prop-types
const ModelMovie = ({ isOpen, videoID, setOpen, channel }) => {
  return (
    <div>
      <ModalVideo channel={channel} autoplay isOpen={isOpen} videoId={videoID} onClose={() => setOpen(false)} />
    </div>
  )
}

export default ModelMovie
