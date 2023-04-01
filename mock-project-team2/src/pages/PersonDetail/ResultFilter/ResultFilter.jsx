import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "tippy.js/dist/tippy.css"
import _ from "lodash"
import { setPersonId } from "../../../lib/redux/Slice/Person"
import { GetSortMovies } from "../../../Api/Common"
import { useParams } from "react-router"
import MovieItem from "./MovieItem"
import { LoadingListYear } from "../Loading/LoadingSkeleton"
const ResultFilter = () => {
  const dataMovies = useSelector((state) => state.sortMovie.sortData)
  const [Arrays, setArray] = useState()
  const [data, setData] = useState()
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetSortMovies(id))
    setId(id)
  }, [id])
  const setId = (id) => {
    dispatch(setPersonId(id))
  }
  useEffect(() => {
    if (dataMovies.crew && dataMovies.cast) {
      const arr = [...dataMovies.cast, ...dataMovies.crew]
      const dataList = arr.map(({ first_air_date: release_date, title: name, ...rest }) => ({
        release_date,
        name,
        ...rest,
      }))
      const department = dataList.map((item) => {
        return _.isNil(item.department) ? { department: "Acting", ...item } : { ...item }
      })
      const sortDateMovieList = department.map((item) => {
        const release_date = new Date(item.release_date)
        return { ...item, release_date: release_date.getFullYear() }
      })
      const typeDepartment = department.reduce((prev, item) => [...prev, item?.department], [])
      const List = _.unionBy(typeDepartment)
      setData(List)
      let data = []
      List.map((item) => {
        const a = sortDateMovieList.filter((ite) => ite.department === item)
        data.push(a)
      })
      let arraysListMovies = []
      data.forEach((item) => {
        const arr = _.groupBy(item, "release_date")
        arraysListMovies.push(arr)
      })
      setArray(arraysListMovies)
    }
  }, [dataMovies])

  return (
    <div className=" my-3 shadow-lg ">
      {Arrays &&
        Arrays.map((item, index) => {
          const objectListMovies = Object.keys(item).sort((a, b) => {
            if (_.isNil(a.release_date)) return -1
            if (_.isNil(b.release_date)) return 1
            return b.release_date - a.release_date
          })
          return (
            <div key={index} className=" mb-6 ">
              <p className="text-xl mb-3 font-bold">Acting</p>
              <div>
                {objectListMovies.map((movie, index) => {
                  return (
                    <div key={index}>
                      <div className="border border-gray-300 shadow-md">
                        {item[movie].map((movi,index) => {
                          return <MovieItem key={index} {...movi} />
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
    </div>
  )
}
const Loadings = () => {
  return <LoadingListYear />
}
ResultFilter.Loadings = Loadings

export default ResultFilter
