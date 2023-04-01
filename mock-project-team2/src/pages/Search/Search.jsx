import React, { useEffect, useState } from "react"
import CardMovie from "../../components/UI/Card/CardSearch/CardMovie"
import SearchInput from "../../components/UI/Search/SearchInput"
import SearchResult from "../../components/UI/Search/SearchResult"
import { useDispatch, useSelector } from "react-redux"
import { GetTotal, SearchMovies } from "../../Api/Common"
import CardPeople from "../../components/UI/Card/CardSearch/CardPeople"
import CardList from "../../components/UI/Card/CardSearch/CardList"
import Pagination from "../../components/UI/Pagination/Pagination"
import { useParams } from "react-router"
import { useNavigate } from "react-router-dom"

const Search = () => {
  const [typeView, setTypeView] = useState("movie")
  const [page, setPage] = useState(1)
  const value = useParams().value
  const [query, setQuery] = useState(value ? value : "")
  const navigate = useNavigate()

  const search = useSelector((state) => state.search.data)
  const status = useSelector((state) => state.search.status)
  const total = useSelector((state) => state.search.total)
  const totalType = useSelector((state) => state.search.totalType)
  const totalPage = useSelector((state) => state.search.totalPage)
  const dispatch = useDispatch()

  useEffect(() => {
    let pageView = sessionStorage.getItem("pageView")
    if (pageView !== null) {
      setPage(Number(pageView))
    }
    const searchFetch = async () => {
      await dispatch(GetTotal({ query: query }))
      await dispatch(SearchMovies({ type: typeView, query: query, page: page }))
    }
    searchFetch()
    window.scrollTo(0, 0)
  }, [typeView, query, page])

  const checkListSearch = () => {
    if (totalType === 0) {
      return <p className="ml-[40px]">There are no movies that matched your query.</p>
    }
    switch (typeView) {
      case "movie":
        return (
          <div className="flex flex-wrap w-[80%]">
            <CardMovie data={search} status={status} />
            <Pagination page={page} totalPage={totalPage} handleSetPage={handleSetPage} />
          </div>
        )
      case "tv":
        return (
          <div className="flex flex-wrap w-[80%]">
            <CardMovie data={search} status={status} />
            <Pagination page={page} totalPage={totalPage} handleSetPage={handleSetPage} />
          </div>
        )
      case "collection":
        return (
          <div className="flex flex-wrap w-[80%]">
            <CardMovie data={search} status={status} />
            <Pagination page={page} totalPage={totalPage} handleSetPage={handleSetPage} />
          </div>
        )
      case "person":
        return (
          <div className="flex flex-wrap w-[80%]">
            <CardPeople data={search} status={status} />
            <Pagination page={page} totalPage={totalPage} handleSetPage={handleSetPage} />
          </div>
        )
      default:
        return (
          <div className="flex flex-wrap w-[80%]">
            <CardList data={search} status={status} />
            <Pagination page={page} totalPage={totalPage} handleSetPage={handleSetPage} />
          </div>
        )
    }
  }

  const handleTypeView = (value) => {
    setTypeView(value)
  }

  const handleSetPage = (value) => {
    sessionStorage.setItem("pageView", value)
    setPage(value)
  }

  const handleSetQuery = (value) => {
    setQuery(value)
    navigate(`/search/${value}`)
  }

  return (
    <div className="w-full">
      <SearchInput query={query} handleSetQuery={handleSetQuery} typeView={typeView} handleTypeView={handleTypeView} />
      <div className="flex items-start px-[50px] py-[50px]">
        <SearchResult typeView={typeView} handleTypeView={handleTypeView} total={total} handleSetPage={handleSetPage} />
        {checkListSearch()}
      </div>
    </div>
  )
}

export default Search
