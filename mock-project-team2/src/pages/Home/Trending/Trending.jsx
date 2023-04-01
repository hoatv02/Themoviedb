import React, { useCallback, useEffect, useState } from "react"
import "./Trending.scss"
import CardDetailFilm from "../../../components/UI/Card/CardDetailFilm/CardDetailFilm"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Trending = () => {
  const navigate = useNavigate()
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const [idMovies, setIdMovies] = useState(null)
  const [listTrending, setListTrending] = useState("day")

  useEffect(() => {
    const loadList = async () => {
      const listTemp = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/${listTrending}?api_key=4ad1f302cbec7ba134d794e5910dca4a`
      )
      setList(listTemp.data.results)
    }
    loadList()
    setLoading(true)
  }, [listTrending])

  const onChangePage = useCallback(
    (id) => {
      navigate(`/movie-detail/${id}`)
      setIdMovies(id)
    },
    [idMovies]
  )

  return (
    <div className="flex justify-center px-10">
      <div
        className="max-w-[1320px] text-black bg-contain bg-bottom flex flex-col pt-[30px] justify-between relative "
        style={{
          backgroundImage:
            "url('https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg')  ",
        }}
      >
        <div className="  items-center">
          <div className="flex items-center">
            <p className="font-semibold ml-6 w-48 text-xl  ">Trending</p>
            <div className="container w-max">
              <div className="taps ">
                <input type="radio" id="Image-1" name="taps" onClick={() => setListTrending("day")} />
                <label className="tap" htmlFor="Image-1">
                  Today
                </label>
                <input type="radio" id="Image-2" name="taps" onClick={() => setListTrending("week")} />
                <label className="tap" htmlFor="Image-2">
                  This week
                </label>
                <span className="glide"></span>
              </div>
            </div>
          </div>
          <div className="flex items-start content-start space-x-5  overflow-x-scroll w-full  h-full pb-[20px] overflow-y-hidden ">
            <div className="pt-8">
              <CardDetailFilm width={150} height={200} listData={list} onClickCard={onChangePage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending
