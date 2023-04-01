import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { findYear } from "../utils/searchYear"

export const GetTrendingMovies = createAsyncThunk("GetTrendingMovies", async () => {
  const data = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=4ad1f302cbec7ba134d794e5910dca4a&language=vi"
  )
  return data.data
})

export const SearchMovies = createAsyncThunk("SearchMovies", async ({ type, query, page }) => {
  const typeUrl = encodeURIComponent(type)
  const temp = findYear(query)
  const queryUrl = encodeURIComponent(temp.query)
  const year = encodeURIComponent(temp.year)
  const pageUrl = encodeURIComponent(page)
  const data =
    typeUrl === "movie"
      ? await axios.get(
          `https://api.themoviedb.org/3/search/${typeUrl}?api_key=4ad1f302cbec7ba134d794e5910dca4a&language=vi&query=${queryUrl}&page=${pageUrl}&include_adult=false&year=${year}`
        )
      : await axios.get(
          `https://api.themoviedb.org/3/search/${typeUrl}?api_key=4ad1f302cbec7ba134d794e5910dca4a&language=vi&query=${queryUrl}&page=${pageUrl}&include_adult=false`
        )
  return data.data
})

export const SearchOptions = createAsyncThunk("SearchOptions", async ({ query }) => {
  const temp = findYear(query)
  const queryUrl = encodeURIComponent(temp.query)
  const year = encodeURIComponent(temp.year)

  const multiUrl = `https://api.themoviedb.org/3/search/multi?api_key=4ad1f302cbec7ba134d794e5910dca4a&language=vi&query=${queryUrl}&page=1&include_adult=false`
  const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=4ad1f302cbec7ba134d794e5910dca4a&language=vi&query=${queryUrl}&page=1&include_adult=false&year=${year}`
  const tvUrl = `https://api.themoviedb.org/3/search/tv?api_key=4ad1f302cbec7ba134d794e5910dca4a&language=vi&query=${queryUrl}&page=1&include_adult=false`
  const personUrl = `https://api.themoviedb.org/3/search/person?api_key=4ad1f302cbec7ba134d794e5910dca4a&language=vi&query=${queryUrl}&page=1&include_adult=false`

  const promiseMulti = await axios.get(multiUrl)
  const promiseMovie = await axios.get(movieUrl)
  const promiseTv = await axios.get(tvUrl)
  const promisePerson = await axios.get(personUrl)

  const [multi, movie, tv, person] = await Promise.all([promiseMulti, promiseMovie, promiseTv, promisePerson])

  return { multi: multi.data, movie: movie.data, tv: tv.data, person: person.data }
})

export const GetTotal = createAsyncThunk("GetTotal", async ({ query }) => {
  const temp = findYear(query)
  const queryUrl = encodeURIComponent(temp.query)
  const year = encodeURIComponent(temp.year)
  const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=4ad1f302cbec7ba134d794e5910dca4a&language=vi&query=${queryUrl}&page=1&include_adult=false&year=${year}`
  const tvUrl = `https://api.themoviedb.org/3/search/tv?api_key=4ad1f302cbec7ba134d794e5910dca4a&language=vi&query=${queryUrl}&page=1&include_adult=false`
  const personUrl = `https://api.themoviedb.org/3/search/person?api_key=4ad1f302cbec7ba134d794e5910dca4a&language=vi&query=${queryUrl}&page=1&include_adult=false`
  const collectionUrl = `https://api.themoviedb.org/3/search/collection?api_key=4ad1f302cbec7ba134d794e5910dca4a&language=vi&query=${queryUrl}&page=1&include_adult=false`
  const companyUrl = `https://api.themoviedb.org/3/search/company?api_key=4ad1f302cbec7ba134d794e5910dca4a&language=vi&query=${queryUrl}&page=1&include_adult=false`
  const keywordUrl = `https://api.themoviedb.org/3/search/keyword?api_key=4ad1f302cbec7ba134d794e5910dca4a&language=vi&query=${queryUrl}&page=1&include_adult=false`

  const promiseMovie = await axios.get(movieUrl)
  const promiseTv = await axios.get(tvUrl)
  const promisePerson = await axios.get(personUrl)
  const promiseCollection = await axios.get(collectionUrl)
  const promiseCompany = await axios.get(companyUrl)
  const promiseKeyword = await axios.get(keywordUrl)

  const [movieTotal, tvTotal, personTotal, collectionTotal, companyTotal, keywordTotal] = await Promise.all([
    promiseMovie,
    promiseTv,
    promisePerson,
    promiseCollection,
    promiseCompany,
    promiseKeyword,
  ])
  return [
    movieTotal.data.total_results,
    tvTotal.data.total_results,
    personTotal.data.total_results,
    collectionTotal.data.total_results,
    companyTotal.data.total_results,
    keywordTotal.data.total_results,
  ]
})

export const GetPersonal = createAsyncThunk("GetPersonal", async (id) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/person/${id}?api_key=4ad1f302cbec7ba134d794e5910dca4a&language=en-US`
  )
  return data.data
})

export const GetListMovies = createAsyncThunk("GetListMovies", async (id) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=4ad1f302cbec7ba134d794e5910dca4a&language=en-US`
  )
  return data.data
})

export const GetSortMovies = createAsyncThunk("GetSortMovies", async (id) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=4ad1f302cbec7ba134d794e5910dca4a&language=en-US`
  )
  return data.data
})

export const GetSocial = createAsyncThunk("GetSocial", async (id) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/person/${id}/external_ids?api_key=4ad1f302cbec7ba134d794e5910dca4a&language=en-US`
  )
  return data.data
})
