import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function Search() {
  const [image, setImage] = useState("")
  useEffect(() => {
    const loadImages = async () => {
      const listTemp = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=4ad1f302cbec7ba134d794e5910dca4a`
      )
      const random = getRandomInt(10)
      setImage("https://image.tmdb.org/t/p/w500" + listTemp.data.results[random].poster_path)
    }
    loadImages()
  }, [])

  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }
  const [value, setValue] = useState("")
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(90deg,rgba(1,53,87,1),rgba(0,116,116,.2)),url('${image}')`,
      }}
      className="relative h-[300px] bg-full  bg-cover bg-no-repeat text-white flex flex-wrap  items-start content-start w-full box-border "
    >
      <div className="w-full flex flex-wrap items-start content-start absolute p-[50px]">
        <div className="w-full m-7 ">
          <h2 className="text-5xl  font-bold leading-4">Welcomes.</h2>
          <h3 className=" text-3xl font-semibold py-6">
            Millions of movies , TV shows and people to discover. Explore now.
          </h3>
        </div>
        <div className="w-full flex px-8">
          <input
            type="search"
            value={value}
            placeholder="Search for a movies ,tv show,person......"
            className="h-[30px] w-[100%]  p-6 rounded-3xl text-md text-black"
            onChange={(e) => setValue(e.target.value)}
          />
          <Link
            to={`/search/${value}`}
            className="bg-gradient-to-r items-center  from-[#1ad0b1] to-[#03b6e0] ml-[-50px]  item-center hover:text-black flex justify-center items-center  rounded-3xl text-md h-[48px] font-bold w-[100px]"
          >
            Search
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Search
