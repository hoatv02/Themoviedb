import React, { useEffect, useState } from "react"
import CirclePercent from "../../../../components/UI/CirclePercent/CircularBar"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { GetCredit, GetDetailMovie } from "../../../../Api/MovieDetail/Api"
import moment from "moment"
import _ from "lodash"

const ContentHeader = () => {
  const dispatch = useDispatch()
  const idMovie = useParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const movieHeaderInfo = {
    listGenres: useSelector((state) => state.movieDetail.listGenres),
    title: useSelector((state) => state.movieDetail.title),
    overview: useSelector((state) => state.movieDetail.overview),
    tagline: useSelector((state) => state.movieDetail.tagline),
    runtime: useSelector((state) => state.movieDetail.runtime),
    releaseDate: useSelector((state) => state.movieDetail.releaseDate),
    voteAverage: useSelector((state) => state.movieDetail.voteAverage),
    listCast: useSelector((state) => state.credit.listCast),
    listCrew: useSelector((state) => state.credit.listCrew),
    spokenLanguage: useSelector((state) => state.movieDetail.spokenLanguage),
  }

  useEffect(() => {
    try {
      setLoading(false)
      if (idMovie.id) {
        dispatch(GetDetailMovie(idMovie.id))
        dispatch(GetCredit(idMovie.id))
      }
      setLoading(true)
    } catch (error) {
      setError(error)
    }
  }, [])
  const iconClass = [
    {
      icon: "fa-solid fa-list",
      content: "Add to list",
    },
    {
      icon: "fa-solid fa-heart",
      content: "Remove from favorite list",
    },
    {
      icon: "fa-solid fa-bookmark",
      content: "Add to your watchlist",
    },
    {
      icon: "fa-solid fa-star",
      content: "Rate It",
    },
  ]

  return (
    <div className="flex flex-wrap items-start content-center box-border pl-[40px]">
      <div className="w-full mb-[24px] flex flex-wrap">
        <h1 className="w-full m-0 p-0 text-[2.2rem]">
          <a className="font-bold text-[#000]" href="#">
            {movieHeaderInfo.title}
          </a>
          <span className="font-normal opacity-80	">({moment(movieHeaderInfo.releaseDate).format("YYYY")})</span>
        </h1>
        <div className="facts flex gap-x-1">
          <span
            className="inline-flex whitespace-nowrap items-center border-solid border border-[#00000099] text-[#00000099] leading-[1] rounded-[2px] mr-[7px]"
            style={{ padding: "0.06em 4px 0.15em 4px" }}
          >
            PG-13
          </span>
          <span className="pl-0">{movieHeaderInfo.releaseDate}</span>
          {movieHeaderInfo.spokenLanguage.map((language) => (
            <span className="pl-0" key={language.english_name}>
              ({language.iso_639_1.toUpperCase()})
            </span>
          ))}
          <span className="pl-1 relative top-0 left-0">
            <span>&#x2022;</span>
            {loading === true &&
              movieHeaderInfo.listGenres.map((list) => (
                <a href="#" className="hover:text-[#00000099]" key={list.id}>
                  {" "}
                  {list.name}
                </a>
              ))}
          </span>
          <span className="pl-1 relative top-0 left-0">
            <span>&#x2022;</span> {movieHeaderInfo.runtime}
          </span>
        </div>
      </div>
      <div className="flex gap-x-8">
        <div className="flex">
          <CirclePercent percent={movieHeaderInfo.voteAverage} height={64} width={64} />
          <h3 className="font-bold mt-2 ml-2">
            User <br /> Score
          </h3>
        </div>

        <div className="flex text-white gap-x-6 items-center justify-center">
          {iconClass.map((icon) => (
            <Tippy placement="bottom" content={icon.content} key={icon.icon}>
              <div className="w-[46px] h-[46px] bg-[#032541d9] rounded-[50%] flex items-center justify-center">
                <i className={icon.icon}></i>
              </div>
            </Tippy>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <i className="fa-solid fa-play"></i>{" "}
          <a href="#" className="font-bold hover:text-white ml-3">
            Playing Trailer
          </a>
        </div>
      </div>

      <div className="mt-[20px] justify-start">
        <p className="font-normal text-base italic opacity-70 mt-[20px]">{movieHeaderInfo.tagline}</p>
        <div className="mt-[20px] justify-start">
          <p className="font-bold text-[20px]">Overview</p>
          <p>{movieHeaderInfo.overview}</p>
        </div>
        <div className="grid grid-cols-3">
          {movieHeaderInfo?.listCrew.map((crew, index) =>
            index < 6 ? (
              <div className="mt-[20px] justify-start" key={crew.id}>
                <h1>
                  <a href="#" className="font-bold">
                    {crew.original_name}
                  </a>
                </h1>
                <p>{crew.job}</p>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  )
}

export default ContentHeader
