import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetListMovies } from "../../../../Api/Common"
import { setPersonId } from "../../../../lib/redux/Slice/Person"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { LoadingMovie } from "../../Loading/LoadingSkeleton"
const CardMoviesList = () => {
  const state = useSelector((state) => {
    return state.movies.data
  })
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetListMovies(id))
    setId(id)
  }, [id])
  const setId = (id) => {
    dispatch(setPersonId(id))
  }
  return (
    <div className="flex  w-full gap-3 ">
      {state.cast &&
        state.cast.map((item, index) => {
          if (index < 8) {
            return (
              <div key={index}>
                {Loadings && (
                  <div className="sliderContainer transition delay-700 text-center items-center">
                    <div className="card w-[140px] h-[auto]">
                      <Link to={`/movie-detail/${item.id}`}>
                        {item.poster_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                            alt=""
                            className="rounded-lg h-[200px] rounded-lg"
                          />
                        ) : (
                          <img
                            src="https://image.tmdb.org/t/p/w500//lHVpzsvjLU7qSCB8UWFqIAavSRu.jpg"
                            alt=""
                            className="rounded-lg h-[200px]"
                          />
                        )}
                      </Link>
                      <div className="card-body text-center">
                        <Link to={`/movie-detail/${item.id}`}>
                          <h5 className="card-title text-[14px] p-2 hover:text-[#01b4e4]">{item.original_title}</h5>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          }
        })}
    </div>
  )
}
const Loadings = () => {
  return Array(6)
    .fill(4)
    .map((item) => {
      return <LoadingMovie className="w-[140px] h-[230px]" key={item.id} />
    })
}
CardMoviesList.Loadings = Loadings
export default CardMoviesList
