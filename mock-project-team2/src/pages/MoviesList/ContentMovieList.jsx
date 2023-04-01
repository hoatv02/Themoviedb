import React, { useCallback, useEffect, useState } from "react"
import CardDetailFilm from "../../components/UI/Card/CardDetailFilm/CardDetailFilm"
import { useDispatch, useSelector } from "react-redux"
import InfiniteScroll from "react-infinite-scroll-component"
import { getMoviesList } from "../../lib/middleware/MoviesList/moviesListMiddleware"
import {
  discoverMoviesSelector,
  statusDiscoverMoviesListSelector,
  statusMovieListSelector,
  totalMoviesListSelector,
} from "../../lib/redux/MoviesList/MoviesListSelector"
import _ from "lodash"
import { setCurrentPage } from "../../lib/redux/MoviesList/MoviesListSlice"
import { Button, Skeleton } from "@mui/material"
import { v4 as uuidv4 } from "uuid"
import { useNavigate } from "react-router-dom"

const ContentMovieList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [page, setPage] = useState(1)
  const [idMovies, setIdMovies] = useState()
  const totalMoviesList = useSelector(totalMoviesListSelector)
  const discoverMovies = useSelector(discoverMoviesSelector)
  const statusMovieList = useSelector(statusMovieListSelector)
  const statusDiscoverMoviesList = useSelector(statusDiscoverMoviesListSelector)
  const handleTotalMoviesListByPage = _.uniqWith(totalMoviesList, (a, b) => a.page === b.page)
  const moviesListHandled = _.flatMap(handleTotalMoviesListByPage, (obj) => _.map(obj.results))
  const discoverMoviesHandled = _.flatMap(discoverMovies, (obj) => _.map(obj.results))
  const loadMoreItems = () => {
    setPage((prev) => prev + 1)
  }
  useEffect(() => {
    if (page > 1) {
      dispatch(setCurrentPage(page))
      dispatch(getMoviesList(page))
    }
  }, [page])

  const handleNewArray = (listFilm) => {
    const idCounts = _.countBy(listFilm, "id")
    const newArr = _.forEach(listFilm, (film) => {
      if (idCounts[film.id] > 1) {
        return { ...film, id: uuidv4() }
      }
    })
    return newArr
  }

  const handleClickNavMoviesDetail = useCallback(
    (id) => {
      navigate(`/movie-detail/${id}`)
      setIdMovies(id)
    },
    [idMovies]
  )

  handleNewArray(moviesListHandled)

  const handleChangePage = () => {
    setPage(2)
  }

  return (
    <div>
      <div className="flex flex-wrap justify-between">
        {_.isEmpty(discoverMoviesHandled) ? (
          statusMovieList !== "fulfilled" && page === 1 ? (
            Array.from(Array(20)).map((_, index) => (
              <Skeleton variant="rounded" key={index} width={150} height={255} className="mr-6 mb-6" />
            ))
          ) : page === 1 ? (
            <div>
              <CardDetailFilm
                onClickCard={handleClickNavMoviesDetail}
                width={150}
                height={225}
                listData={handleNewArray(moviesListHandled)}
                flexWrap="wrap"
                idMovies={idMovies}
                setIdMovies={setIdMovies}
              />
              <Button
                fullWidth
                variant="contained"
                onClick={handleChangePage}
                style={{ marginLeft: 32, width: "96%", backgroundColor: "rgb(1,180,228)" }}
              >
                Load More
              </Button>
            </div>
          ) : (
            <InfiniteScroll dataLength={handleNewArray(moviesListHandled).length} next={loadMoreItems} hasMore={true}>
              <CardDetailFilm
                onClickCard={handleClickNavMoviesDetail}
                width={150}
                height={225}
                listData={handleNewArray(moviesListHandled)}
                flexWrap="wrap"
                idMovies={idMovies}
                setIdMovies={setIdMovies}
              />
            </InfiniteScroll>
          )
        ) : statusDiscoverMoviesList !== "fulfilled" && page === 1 ? (
          Array.from(Array(20)).map((_, index) => (
            <Skeleton variant="rounded" key={index} width={150} height={255} className="mr-6 mb-6" />
          ))
        ) : page === 1 ? (
          <div>
            <CardDetailFilm
              onClickCard={handleClickNavMoviesDetail}
              width={150}
              height={225}
              listData={handleNewArray(discoverMoviesHandled)}
              flexWrap="wrap"
            />
            {discoverMoviesHandled <= 20 && (
              <Button
                fullWidth
                variant="contained"
                onClick={handleChangePage}
                sx={{ marginLeft: 32, width: "96%", backgroundColor: "rgb(1,180,228)" }}
              >
                Load More
              </Button>
            )}
          </div>
        ) : (
          <InfiniteScroll dataLength={discoverMoviesHandled.length} next={loadMoreItems} hasMore={true}>
            <CardDetailFilm
              onClickCard={handleClickNavMoviesDetail}
              width={150}
              height={225}
              listData={handleNewArray(discoverMoviesHandled)}
              flexWrap="wrap"
            />
          </InfiniteScroll>
        )}
      </div>
    </div>
  )
}

ContentMovieList.propTypes = {}

export default ContentMovieList
