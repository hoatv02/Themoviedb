import React from "react"
import { Route, Routes } from "react-router-dom"
import Main from "../layouts/Main"
import PersonDetail from "./../pages/PersonDetail/PersonDetail"
import MoviesDetail from "./../pages/MoviesDetail/MoviesDetail"
import MoviesList from "../pages/MoviesList/MoviesList"
import Search from "../pages/Search/Search"
import Home from "../pages/Home/Home"

const UIRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/search/:value?" element={<Search />} />
        <Route path="/movie-list" element={<MoviesList />} />
        <Route index element={<Home />} />
      </Route>
      <Route path="/" element={<Main display="true" />}>
        <Route path="/person-detail/:id" element={<PersonDetail />} />
        <Route path="/movie-detail/:id" element={<MoviesDetail />} />
      </Route>
    </Routes>
  )
}

export default UIRoutes
