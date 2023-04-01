import axios from "axios"
import React, { useEffect, useState } from "react"
import "./Popular.scss"
import CardDetailFilm from "../../../components/UI/Card/CardDetailFilm/CardDetailFilm"

const Popular = () => {
  const [listPopular, setListPopular] = useState("tv")
  const [item, setItem] = useState([])

  useEffect(() => {
    const loadItems = async () => {
      const listTemp = await axios.get(
        `https://api.themoviedb.org/3/${listPopular}/popular?api_key=4ad1f302cbec7ba134d794e5910dca4a`
      )
      setItem(listTemp.data.results)
    }
    loadItems()
  }, [listPopular])
  
  return (
    <div className="flex justify-center">
      <div className="max-w-[1320px] text-black bg-white flex flex-col pt-[30px] justify-between relative">
        <div className="  items-center  ">
          <div className="flex items-center">
            <p className="font-semibold ml-6 w-48 text-xl">What&apos;s popular</p>
            <div className="contain w-max">
              <div className="tapps ">
                <input type="radio" id="image-1" name="tapps" onClick={() => setListPopular("tv")} />
                <label className="tapp" htmlFor="image-1">
                  On TV
                </label>
                <input type="radio" id="image-2" name="tapps" onClick={() => setListPopular("movie")} />
                <label className="tapp" htmlFor="image-2">
                  In Theatre
                </label>
                <span className="glid"></span>
              </div>
            </div>
          </div>
          <div className="flex items-start content-start space-x-5 px-4 overflow-x-scroll w-full  h-full pb-[20px] overflow-y-hidden  ">
            <div className="pt-8">
              <CardDetailFilm width={150} height={200} listData={item} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popular
