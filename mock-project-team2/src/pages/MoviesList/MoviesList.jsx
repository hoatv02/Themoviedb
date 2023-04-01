import React, { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import ContentMovieList from "./ContentMovieList"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { getDiscoverMovies, getMoviesList } from "../../lib/middleware/MoviesList/moviesListMiddleware"
import {
  resultSearchSelector,
  statusBtnSearchBigSelector,
  statusBtnSearchSmallSelector,
  statusDiscoverMoviesListSelector,
  statusMovieListSelector,
} from "../../lib/redux/MoviesList/MoviesListSelector"
import { BarLoader, BounceLoader, PuffLoader } from "react-spinners"
import { Button } from "@mui/material"
import { changeStatusBtnSearch } from "../../lib/redux/MoviesList/DiscoverMoviesSlice"
import SideBar from "./SideBar"

const MoviesList = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const [scrollHeight, setScrollHeight] = useState(0)
  const resultSearch = useSelector(resultSearchSelector)
  const statusMovieList = useSelector(statusMovieListSelector)
  const statusBtnSearchBig = useSelector(statusBtnSearchBigSelector)
  const statusBtnSearchSmall = useSelector(statusBtnSearchSmallSelector)
  const statusProvider = useSelector(statusDiscoverMoviesListSelector)
  const currentUrl = location.pathname
  // IF IS PATH DISPATCH getMoviesList WITH PAGE = 1
  useEffect(() => {
    if (currentUrl) {
      window.scrollTo(-10, -10)
      dispatch(getMoviesList(1))
    }
  }, [])

  const handleSearch = () => {
    window.scrollTo(0, 0)
    dispatch(getDiscoverMovies(resultSearch))
    dispatch(changeStatusBtnSearch({ small: false, big: false }))
  }

  useEffect(() => {
    function handleScroll() {
      const currentScrollHeight = window.pageYOffset
      setScrollHeight(currentScrollHeight)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollHeight])

  useEffect(() => {
    if (scrollHeight >= 1500 && statusBtnSearchBig === true) {
      dispatch(changeStatusBtnSearch({ statusSmall: true, small: true, big: false }))
    }
  }, [scrollHeight])

  return (
    <div className="flex justify-center max-w-[1320px]">
      {statusMovieList === "loading" && (
        <BarLoader color="#01B5E5" style={{ position: "fixed", width: "100%", top: 0, zIndex: 2 }} />
      )}
      <div className="mt-10">
        <Box className="flex-grow relative">
          <Grid
            container
            spacing={{ xs: 1, md: 1 }}
            columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
            className="justify-center"
          >
            <Grid item xs={6} sm={2.5} md={2.5} lg={2.5} xl={2.5} className="ml-40">
              <SideBar />
            </Grid>
            <Grid item xs={6} sm={9} md={9} lg={9} xl={9} className="min-w-900 mr-40">
              <ContentMovieList />
            </Grid>
            {statusBtnSearchBig && scrollHeight < 1500 ? (
              <div className="sticky w-full ml-9 mr-2.5 mr-11 my-0 bottom-0">
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleSearch}
                  className="bg-blue-500 ml-1.4 w-95.5"
                  sx={{ backgroundColor: "rgb(1,180,228)", borderRadius: 20 }}
                >
                  Search
                </Button>
              </div>
            ) : (
              statusProvider === "loading" &&
              statusBtnSearchSmall !== true && (
                <div className="sticky w-full ml-9 mr-2.5 mr-11 my-0 bottom-0">
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleSearch}
                    className="bg-blue-500 ml-1.4 w-95.5"
                    sx={{ backgroundColor: "rgb(1,180,228)", borderRadius: 20 }}
                  >
                    <PuffLoader color="#fff" size={23} />
                  </Button>
                </div>
              )
            )}
          </Grid>
        </Box>
      </div>
    </div>
  )
}

MoviesList.propTypes = {}

export default MoviesList
