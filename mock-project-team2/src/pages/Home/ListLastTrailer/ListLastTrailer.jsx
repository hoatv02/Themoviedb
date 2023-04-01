import React, { useState } from "react"
import "./ListLastTrailer.scss"
const ListMovies = [
  "https://www.youtube.com/embed/zHuYR95l770",
  "https://www.youtube.com/embed/vQ76CPELNQs",
  "https://www.youtube.com/embed/vQ76CPELNQs",
  "https://www.youtube.com/embed/vQ76CPELNQs",
  "https://www.youtube.com/embed/vQ76CPELNQs",
  "https://www.youtube.com/embed/vQ76CPELNQs",
  "https://www.youtube.com/embed/vQ76CPELNQs",
]

const ListTheatre = [
  "https://www.youtube.com/embed/zHuYR95l770",
  "https://www.youtube.com/embed/zHuYR95l770",
  "https://www.youtube.com/embed/zHuYR95l770",
  "https://www.youtube.com/embed/zHuYR95l770",
  "https://www.youtube.com/embed/zHuYR95l770",
]
const ListLastTrailer = () => {
  const [listTV, setListTV] = useState("tv")
  return (
    <div className="flex justify-center">
      <div
        className="max-w-[1320px] text-white bg-cover flex flex-col pt-[30px] justify-between relative h-[351px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(1,53,87,0.7),rgba(1,53,87,0.7)),url('https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/3n2TjKw3HrwDqgVgcynvantOfS3.jpg')  ",
        }}
      >
        <div className="  items-center  ">
          <div className="flex items-center">
            <p className="font-semibold ml-6 w-48 text-xl text-white">Lastest Trailers</p>
            <div className="container w-max">
              <div className="tabs ">
                <input type="radio" id="radio-1" name="tabs" onClick={() => setListTV("tv")} />
                <label className="tab" htmlFor="radio-1">
                  On TV
                </label>
                <input type="radio" id="radio-2" name="tabs" onClick={() => setListTV("theater")} />
                <label className="tab" htmlFor="radio-2">
                  In Theater
                </label>

                <span className="glider"></span>
              </div>
            </div>
          </div>
          <div className="flex items-center  space-x-5 px-5 overflow-x-scroll w-full  h-full pb-[25px] ">
            {listTV === "tv"
              ? ListMovies.map((item, index) => {
                  return (
                    <div key={index} className="text-center  ">
                      <iframe
                        width="250px"
                        height="100%"
                        src={item}
                        className="rounded-lg my-4  hover:scale-110 "
                      ></iframe>
                      <h3 className="font-semibold text-lg ">Name Trailer</h3>
                      <p>This is Content Films</p>
                    </div>
                  )
                })
              : ListTheatre.map((item, index) => {
                  return (
                    <div key={index} className="text-center ">
                      <iframe
                        width="250px"
                        height="100%"
                        src={item}
                        className="rounded-lg my-4  hover:scale-110 "
                      ></iframe>
                      <h3 className="font-semibold text-lg ">Name Trailer</h3>
                      <p>This is Content Films</p>
                    </div>
                  )
                })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListLastTrailer
