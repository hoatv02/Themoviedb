import React, { useCallback, useEffect, useState } from "react"
import ButtonCustom from "../../../../components/UI/Button/ButtonCustom"
import { useDispatch } from "react-redux"
import { changeStatusBtnSearch, changeWithGenres } from "../../../../lib/redux/MoviesList/DiscoverMoviesSlice"

const Genres = () => {
  const listTitle = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ]

  const [arrayCheck, setArrayCheck] = useState([])
  const dispatch = useDispatch()
  const handleClickSelector = useCallback(
    (value) => {
      dispatch(changeStatusBtnSearch({ statusSmall: true, small: false, big: true }))
      setArrayCheck((prev) => {
        const isChecked = arrayCheck.includes(value)
        if (isChecked) {
          return arrayCheck.filter((item) => item !== value)
        } else {
          return [...prev, value]
        }
      })
    },
    [arrayCheck]
  )

  useEffect(() => {
    dispatch(changeWithGenres(arrayCheck.join(",")))
  }, [arrayCheck])

  return (
    <div>
      <ButtonCustom round onClickActions={handleClickSelector} arrayCheck={arrayCheck} listData={listTitle} />
    </div>
  )
}

Genres.propTypes = {}

export default Genres
