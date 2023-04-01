import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import _ from "lodash"
import { GetListMovies, GetSortMovies } from "../../../Api/Common"
import { sortDepartment, sortMovie } from "../../../lib/redux/Slice/SortMovies"
import MenuItem from "@mui/material/MenuItem"
const Acting = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [shows, setShows] = useState(false)
  const [clear, setClear] = useState(false)
  const SelectMoviesTV = useSelector((state) => state.sortMovie.data)
  useEffect(() => {
    dispatch(GetSortMovies())
  }, [])
  const handleClickMovies = (media_type) => {
    const arr = SelectMoviesTV.cast.filter((item) => item.media_type === media_type)
    const crew = SelectMoviesTV.crew
    dispatch(sortMovie({ cast: arr, crew: crew, id: SelectMoviesTV.id }))
    setClear(true)
  }
  const hanldeSortDepartment = (department) => {
    const arr = SelectMoviesTV.crew.filter((item) => item.department === department)
    const cast = SelectMoviesTV.cast.filter((item) => item.department === department)
    dispatch(sortDepartment({ cast: cast, crew: arr, id: SelectMoviesTV.id }))
    setClear(true)
  }
  const hanleClear = () => {
    setClear(false)
    const arr = SelectMoviesTV.crew.filter((item) => item)
    const cast = SelectMoviesTV.cast.filter((item) => item)
    dispatch(sortDepartment({ cast: cast, crew: arr, id: SelectMoviesTV.id }))
  }
  return (
    <div>
      <div className="flex justify-between mt-5">
        <div className="text-xl font-bold"></div>
        <div className="flex justify-center items-center">
          <div>
            <ul className="flex">
              {clear && (
                <div>
                  <li className="mr-10  text-[#01b4e4] font-medium cursor-pointer hover:bg-transparent" onClick={hanleClear}>
                    Clear
                  </li>
                </div>
              )}
              <li
                onClick={() => {
                  setShow(!show)
                  setShows(false)
                }}
                className="relative w-fit cursor-pointer rounded-sm hover:bg-transparent rounded-lg mr-6"
              >
                ALL
                 <i className="fa-solid fa-caret-down ml-3"></i>
                {show && (
                  <div className="absolute  border-2 bg-gray-100  py-1 mt-2">
                    {SelectMoviesTV.cast &&
                      _.uniqBy(SelectMoviesTV.cast, "media_type").map((item, index) => {
                        return (
                          <MenuItem
                            value={10}
                            key={index}
                            onClick={() => handleClickMovies(item.media_type)}
                            className=" border border-2"
                          >
                            {item.media_type === "movie" ? "Movies" : "TV Shows"}
                            <span className="ml-2">
                              {SelectMoviesTV.cast.filter((ite) => ite.media_type === item.media_type).length}
                            </span>
                          </MenuItem>
                        )
                      })}
                  </div>
                )}
              </li>
              <li
                onClick={() => {
                  setShow(false)
                  setShows(!shows)
                }}
                className="relative w-fit flex cursor-pointer rounded-sm hover:bg-transparent mr-4 items-center"
              >
                Department <i className="fa-solid fa-caret-down ml-3"></i>
                {shows && (
                  <div className="absolute mt-[30px]  border-2 bg-gray-100 mr-10  py-1 ">
                    {SelectMoviesTV.cast &&
                      _.uniqBy(SelectMoviesTV.cast, "department" === "Acting").map((item, index) => {
                        return (
                          <MenuItem value={10} key={index} onClick={() => hanldeSortDepartment(item.department)}>
                            Acting <span className="ml-2">{SelectMoviesTV.cast.length}</span>
                          </MenuItem>
                        )
                      })}
                    {SelectMoviesTV.crew &&
                      _.uniqBy(SelectMoviesTV.crew ,"department").map((item, index) => {
                        return (
                          <MenuItem value={10} key={index} onClick={() => hanldeSortDepartment(item.department)}>
                            {item.department}{" "}
                            <span className="ml-2">
                              {SelectMoviesTV.crew.filter((ite) => ite.department === item.department).length}
                            </span>
                          </MenuItem>
                        )
                      })}
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Acting
