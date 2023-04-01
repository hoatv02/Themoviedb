/* eslint-disable react/prop-types */
import React from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import ButtonShowModal from "./ButtonShowModal/ButtonShowModal"

const MovieItem = (props) => {
  const { id } = useParams()
  const {
    release_date,
    overview,
    name,
    backdrop_path,
    poster_path,
    original_name,
    title,
    character,
    job,
    original_title,
    first_air_date,
    vote_average,
  } = props

  return (
    <div className=" p-2 border-solid  text-sm">
      <div className="m-2 flex relative">
        <div className=" flex justify-center items-center">
          {release_date || first_air_date ? (
            release_date || first_air_date
          ) : (
            <i className="fa-solid fa-minus w-[30px] "></i>
          )}
        </div>
        <ButtonShowModal
          title={name || title}
          overview={overview}
          vote={vote_average}
          img={poster_path || backdrop_path}
        />
        <div>
          <Link to={`/movie-detail/${id}`}>
            <strong className="hover:text-[#01b4e4] cursor-pointer">
              {title || original_name || name ? title || original_name || name : ""}
            </strong>{" "}
          </Link>
          {character || job ? (
            <>
              <span className="text-gray-500 ">as</span>
              <span className="text-gray-900 ml-2">{character || original_title}</span>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieItem
