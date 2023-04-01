import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import _ from "lodash"

const Keyword = () => {
  const idMovie = useParams()
  const [list, setList] = useState([])
  useEffect(() => {
    const loadList = async (id) => {
      const listKeyword = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/keywords?api_key=4ad1f302cbec7ba134d794e5910dca4a`
      )
      setList(listKeyword.data.keywords)
    }
    loadList(idMovie.id)
  }, [])
  return (
    <div>
      <h4 className="text-[1.5em] font-bold pb-4">Keyword</h4>
      {_.isEmpty(list) ? (
        <p>No keywords have been added.</p>
      ) : (
        <div className="flex w-full flex-wrap justify-start gap-x-2 gap-y-2">
          {list.map((list) => (
            <div
              key={list.id}
              style={{
                backgroundColor: "rgba(0,0,0,0.1)",
                border: "1px solid #d7d7d7",
                color: "#000",
                padding: "4px 10px",
                borderRadius: "4px",
              }}
            >
              {list.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default Keyword
