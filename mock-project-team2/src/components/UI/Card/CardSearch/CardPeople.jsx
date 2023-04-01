import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Skeleton } from "@mui/material"

const CardPeople = ({ data, status }) => {
  if (status === "loading" || status === "idle") {
    return (
      <div className="pr-0 pl-[30px] bg-white flex w-[calc(100vw_-_80px_-_268px)] max-w-[calc(1400px - 80px - 268px)] flex-wrap flex-initial">
        <Skeleton variant="rounded" width="100%" height="80px" animation="wave" className="rounded-xl mb-[20px]" />
        <Skeleton variant="rounded" width="100%" height="80px" animation="wave" className="rounded-xl mb-[20px]" />
        <Skeleton variant="rounded" width="100%" height="80px" animation="wave" className="rounded-xl mb-[20px]" />
        <Skeleton variant="rounded" width="100%" height="80px" animation="wave" className="rounded-xl mb-[20px]" />
        <Skeleton variant="rounded" width="100%" height="80px" animation="wave" className="rounded-xl mb-[20px]" />
        <Skeleton variant="rounded" width="100%" height="80px" animation="wave" className="rounded-xl mb-[20px]" />
      </div>
    )
  }

  const getFilm = (array) => {
    if (array) {
      return (
        <>
          {array.map((film) => {
            return (
              <>
                <Link to={`/movie-detail/${film.id}`} key={film.id}>
                  {film.title ?? film.name}
                </Link>
                ,
              </>
            )
          })}
        </>
      )
    }
    return <></>
  }

  return (
    <div className="pr-0 pl-[30px] bg-white flex w-[calc(100vw_-_80px_-_268px)] max-w-[calc(1400px - 80px - 268px)] flex-wrap flex-initial">
      <div className="flex flex-wrap items-start justify-start">
        {data.map((e) => {
          const image = e.profile_path
            ? "https://image.tmdb.org/t/p/w500" + e.profile_path
            : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
          return (
            <div key={e.id} className="box-border flex mt-[10px] items-center justify-start w-full">
              <div className="min-w-[70px] w-[70px] h-[80px] mr-[20px] overflow-visible flex items-center">
                <Link to={`/person-detail/${e.id}`} className="w-full h-full block leading-0">
                  <img
                    className="outline-none overflow-clip cursor-pointer border rounded-xl w-full h-full"
                    src={image}
                  />
                </Link>
              </div>
              <div className="box-border overflow-hidden w-full">
                <p className="font-semibold p-0 text-[1.2em] m-0 overflow-hidden w-full leading-[1.2em] text-ellipsis whitespace-nowrap">
                  <Link to={`/person-detail/${e.id}`}>{e.name}</Link>
                </p>
                <p className="font-normal text-[1em] m-0 p-0 w-full leading-[1.2em] text-ellipsis whitespace-nowrap">
                  <span>{e.known_for_department}</span>
                  <span className="mx-[2px]">•</span>
                  {getFilm(e.known_for)}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

CardPeople.propTypes = {
  data: PropTypes.array,
  status: PropTypes.string,
}
export default CardPeople
