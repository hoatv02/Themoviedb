import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { GetRecommendations } from "../../../../Api/MovieDetail/Api"
import _ from "lodash"

const Recommendation = (recommend) => {
  const dispatch = useDispatch()
  const idMovie = useParams()
  const listRecommend = useSelector((state) => state.recommendations.results)
  useEffect(() => {
    dispatch(GetRecommendations(idMovie.id))
  }, [])
  return (
    <div className="border-box">
      <h3 className="inline-block mr-[50px] font-bold">{recommend.title}</h3>
      {_.isEmpty(listRecommend) ? (
        <p>
          We dont have enough data to suggest any movies based on Shazam! Fury of the Gods. You can help by rating
          movies you have seen.
        </p>
      ) : (
        <div className="relative top-0 left-0 ">
          <div className="flex gap-x-3 top-0 left-0 overflow-x-scroll rounded-lg ">
            {listRecommend.map((re) => (
              <div className="min-w-[250px] p-0 m-0 top-0 left-0" key={re.id}>
                <div className="relative h-[150px]">
                  <a href={`/movie-detail/${re.id}`}>
                    <img
                      className="peer w-full h-full rounded-lg"
                      src={"https://image.tmdb.org/t/p/w500" + re.backdrop_path}
                      style={{ transition: "0.3s" }}
                    />
                    <div className="text-[1em] bg-[#b8d1e6] invisible absolute bottom-0 w-full peer-hover:visible hover:visible opacity-80	p-[5px]">
                      <i className="fa-solid fa-calendar"></i> {re.release_date}
                    </div>
                  </a>
                </div>
                <div className="flex justify-between">
                  <a href={`/movie-detail/${re.id}`} className="whitespace-nowrap overflow-hidden text-ellipsis">
                    {re.original_title}
                  </a>
                  <p>{(re.vote_average * 10).toFixed(0)}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Recommendation
