import React from "react"
import { useSelector } from "react-redux"
import BodyMovieDetail from "./BodyMovieDetail/BodyMovieDetail"
import HeaderMovieDetail from "./HeaderMovieDetail/HeaderMovieDetail"

const MoviesDetail = () => {
  const bgImg = useSelector((state) => state.movieDetail.backdropPath)
  return (
    <div className="flex flex-wrap max-w-[1320px]">
      <div
        style={{
          borderBottom: "1px solid var(--primaryColor)",
          backgroundPosition: "left calc((50vw - 170px) - 340px) top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <HeaderMovieDetail />
      </div>
      <div className="mt-0 mb-0 w-full">
        <div className="w-full flex justify-center items-start">
          <div className="max-w-[1400px] w-full flex items-start pl-[40px] pr-[40px] pt-[30px] pb-[30px]">
            <div className="box-border">
              <div
                className="flex flex-wrap pr-[30px]"
                style={{
                  width: "calc(100vw - 80px - 268px)",
                  maxWidth: "calc(var(--maxPrimaryPageWidth) - 80px - 268px)",
                }}
              >
                <BodyMovieDetail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoviesDetail
