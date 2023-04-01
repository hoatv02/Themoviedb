import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Skeleton } from "@mui/material"

const CardMovie = ({ data, status }) => {
  if (status === "loading" || status === "idle") {
    return (
      <div className="pr-0 pl-[30px] bg-white flex w-[calc(100vw_-_80px_-_268px)] max-w-[calc(1400px - 80px - 268px)] flex-wrap flex-initial">
        <Skeleton variant="rounded" width="100%" height="141px" animation="wave" className="rounded-xl mb-[20px]" />
        <Skeleton variant="rounded" width="100%" height="141px" animation="wave" className="rounded-xl mb-[20px]" />
        <Skeleton variant="rounded" width="100%" height="141px" animation="wave" className="rounded-xl mb-[20px]" />
        <Skeleton variant="rounded" width="100%" height="141px" animation="wave" className="rounded-xl mb-[20px]" />
      </div>
    )
  }

  return (
    <div className="pr-0 pl-[30px] bg-white flex w-[calc(100vw_-_80px_-_268px)] max-w-[calc(1400px - 80px - 268px)] flex-wrap flex-initial">
      {data.map((e) => {
        const image = e.poster_path
          ? "https://image.tmdb.org/t/p/w500" + e.poster_path
          : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
        return (
          <div
            key={e.id}
            className="mt-0 p-0 shadow-lg flex-wrap flex max-w-[calc(100vw_-_82px)] h-[141px] mb-[20px] w-full border border-solid rounded-xl border-gray-300"
          >
            <div className="box-border flex m-0 p-0">
              <div className="min-w-[94px] w-[94px] h-[141px] p-0 m-0">
                <Link to={`/movie-detail/${e.id}`} className="w-full h-full p-0 m-0">
                  <img
                    className="outline-none overflow-clip cursor-pointer border rounded-l-xl w-full h-full m-0 p-0"
                    src={image}
                  />
                </Link>
              </div>
              <div className="p-3.5 flex flex-wrap content-center items-center box-border">
                <div className="flex flex-wrap items-center w-full">
                  <div className="flex flex-wrap w-full items-baseline">
                    <div className="w-full leading-none">
                      <Link to={`/movie-detail/${e.id}`} className="cursor-pointer w-full">
                        <h2 className="leading-5 text-xl font-semibold line-clamp-1 h-[24px]">{e.name ?? e.title}</h2>
                      </Link>
                    </div>
                  </div>
                  <span className="text-slate-400 whitespace-nowrap w-full pt-2">
                    {e.first_air_date ?? e.release_date}
                  </span>
                </div>
                <div className="h-auto mt-4">
                  <p className="text-base line-clamp-2 -webkit-box overflow-hidden m-0">{e.overview}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

CardMovie.propTypes = {
  data: PropTypes.array,
  status: PropTypes.string,
}
export default CardMovie
