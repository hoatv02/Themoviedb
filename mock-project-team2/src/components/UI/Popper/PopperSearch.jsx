import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"
import { GetTrendingMovies } from "../../../Api/Common"

const PopperSearch = ({ query, data, handleTypeView, handleSetQuery, hide, handleSearchQuery }) => {
  const dispatch = useDispatch()
  const trendingMovies = useSelector((state) => state.trending.data)

  useEffect(() => {
    dispatch(GetTrendingMovies())
  }, [])

  const firstMovie = useSelector((state) => state.search.firstMovie)
  const firstTv = useSelector((state) => state.search.firstTv)
  const firstPerson = useSelector((state) => state.search.firstPerson)

  const filter = []

  firstMovie && filter.push({ key: "movie", value: "Movies" })
  firstTv && filter.push({ key: "tv", value: "TV Shows" })
  firstPerson && filter.push({ key: "person", value: "People" })

  const handleSetSearch = (query, type) => {
    handleSetQuery(query)
    handleTypeView(type)
    handleSearchQuery(query)
    hide()
  }

  if ((!data || data.length === 0) && query) {
    return (
      <div className="bg-white m-0 p-0 w-full max-w-[1600px] mt-[-10px] flex items-center justify-center min-h-[110px]">
        <h2 className="w-full flex items-center text-[1.2em] font-bold m-0 border-b border-slate-300 h-full min-h-[110px] font-sans text-center justify-center text-[#21252980] uppercase">
          No Results
        </h2>
      </div>
    )
  }

  return (
    <div className="bg-white m-0 p-0 w-full max-w-[1600px] mt-[-10px]">
      {query ? (
        <div className="relative w-full overflow-auto cursor-pointer">
          <ul className="inline-block w-full h-auto " tabIndex="-1">
            {filter.map((e) => {
              return (
                <li key={e.key} className="flex text-[1em] hover:bg-[#E3E3E3]">
                  <div className="w-full flex justify-center pt-[4px] pb-[5px] border-b border-slate-300">
                    <div className="flex w-full max-w-[2000px] items-center text-[0.9em] font-normal px-[40px]">
                      {e.key === "movie" && firstMovie && (
                        <div onClick={() => handleSetSearch(firstMovie, e.key)}>
                          <i className="fa-solid fa-film"></i>
                          <span className="ml-[10px] font-semibold">
                            {firstMovie} <span className="font-normal">in Movies</span>
                          </span>
                        </div>
                      )}
                      {e.key === "tv" && firstTv && (
                        <div onClick={() => handleSetSearch(firstTv, e.key)}>
                          <i className="fa-solid fa-tv"></i>
                          <span className="ml-[10px] font-semibold">
                            {firstTv} <span className="font-normal">in TV Shows</span>
                          </span>
                        </div>
                      )}
                      {e.key === "person" && (
                        <div onClick={() => handleSetSearch(firstPerson, e.key)}>
                          <i className="fa-solid fa-user"></i>
                          <span className="ml-[10px] font-semibold">
                            {firstPerson} <span className="font-normal">in Person</span>
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              )
            })}
            {data.slice(0, 10).map((element) => {
              return (
                <li
                  key={element.id}
                  className="flex text-[1em] hover:bg-[#E3E3E3]"
                  onClick={() => handleSetSearch(element.title ?? element.name, element.media_type)}
                >
                  <div className="w-full flex justify-center pt-[4px] pb-[5px] border-b border-slate-300">
                    <div className="flex w-full max-w-[2000px] items-center text-[0.9em] font-normal px-[40px]">
                      <i className="fa-solid fa-magnifying-glass"></i>
                      <span className="ml-[10px]">{element.title ?? element.name}</span>
                      {element.original_title && <span className="ml-1">({element.original_title})</span>}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      ) : (
        <>
          <h2 className="flex items-center text-[1.2em] font-bold m-0 py-[5px] px-[40px] text-left border-b border-slate-300 bg-[#E3E3E3]">
            <i className="fa-solid fa-arrow-trend-up mr-[10px]"></i>
            Trending
          </h2>
          <div className="relative w-full overflow-auto cursor-pointer">
            <ul className="inline-block w-full h-auto " tabIndex="-1">
              {trendingMovies.slice(0, 10).map((e) => {
                return (
                  <li
                    key={e.id}
                    className="flex text-[1em] hover:bg-[#E3E3E3]"
                    onClick={() => handleSetSearch(e.title ?? e.name, "movie")}
                  >
                    <div className="w-full flex justify-center pt-[4px] pb-[5px] border-b border-slate-300">
                      <div className="flex w-full max-w-[2000px] items-center text-[0.9em] font-normal px-[40px]">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <span className="ml-[10px]">{e.title ?? e.name}</span>
                        {e.original_title && <span className="ml-1">({e.original_title})</span>}
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

PopperSearch.propTypes = {
  query: PropTypes.string,
  data: PropTypes.any,
  hide: PropTypes.func,
  handleTypeView: PropTypes.func,
  handleSetQuery: PropTypes.func,
  handleSearchQuery: PropTypes.func,
}

export default PopperSearch
