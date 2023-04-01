import React, { useEffect, useState } from "react"
import Acting from "../Acting/Acting"
import ResultFilter from "../ResultFilter/ResultFilter"
import Biography from "./Biography/Biography"
import CardPersonDetail from "../../../components/UI/Card/CardPersonDetail/CardPersonDetail"
import CardMoviesList from "./CardMoviesList/CardMoviesList"

const ListMovies = () => {
  const [state, setState] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setState(false)
    }, 1000)
  }, [])
  return (
    <div>
      {state && <Biography.Loadings />}
      {!state && <Biography />}
      <CardPersonDetail>
        {state && <CardMoviesList.Loadings />}
        {!state && <CardMoviesList />}
      </CardPersonDetail>
      {!state && (
        <>
          <Acting />
          <ResultFilter />
        </>
      )}
      {state && <ResultFilter.Loadings />}
    </div>
  )
}
export default ListMovies
