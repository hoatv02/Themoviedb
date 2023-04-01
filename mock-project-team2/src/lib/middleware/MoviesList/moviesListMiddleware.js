import { createAsyncThunk } from "@reduxjs/toolkit"
import { getListMoviesList } from "../../../Api/MoviesList/MoviesListApi"
import {
  getListCountries,
  getListKeywordsAPI,
  getListLanguage,
  getListMoviesDiscover,
  getProvidersForDiscovers,
} from "../../../Api/MoviesList/MoviesDiscoverApi"

export const getMoviesList = createAsyncThunk("moviesList/getMoviesList", async (page) => {
  const res = await getListMoviesList(page)
  return res.data // OK
})

export const getDiscoverMovies = createAsyncThunk("moviesList/getDiscoverMovies", async (value) => {
  const res = await getListMoviesDiscover(value)
  return res.data
})

export const getCountries = createAsyncThunk("moviesList/getCountries", async () => {
  const res = await getListCountries()
  return res.data
})

export const getLanguages = createAsyncThunk("moviesList/getLanguages", async () => {
  const res = await getListLanguage()
  return res.data
})

export const getProviders = createAsyncThunk("moviesList/getProviders", async (watch_region) => {
  const res = await getProvidersForDiscovers(watch_region)
  return res.data
})

export const getListKeywords = createAsyncThunk("moviesList/getListKeywords", async (watch_region) => {
  const res = await getListKeywordsAPI(watch_region)
  return res.data
})