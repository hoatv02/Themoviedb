import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const GetDetailMovie = createAsyncThunk("GetDetailMovie", async (id) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=4ad1f302cbec7ba134d794e5910dca4a&language=en-US`
  )
  return data.data
})

export const GetCertification = createAsyncThunk("GetCertification", async () => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/certification/movie/list?api_key=4ad1f302cbec7ba134d794e5910dca4a`
  )
  return data.data
})

export const GetCredit = createAsyncThunk("GetCredit", async (id) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=03bd541bf2f755415dbc79580980a1ff&language=en-US`
  )
  return data.data
})
export const GetReviews = createAsyncThunk("GetReviews", async (id) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=4ad1f302cbec7ba134d794e5910dca4a&language=en-US&page=1`
  )
  return data.data
})

export const GetVideos = createAsyncThunk("GetVideos", async (id) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=4ad1f302cbec7ba134d794e5910dca4a&language=en-US`
  )
  return data.data
})

export const GetRecommendations = createAsyncThunk("GetRecommendations", async (id) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=4ad1f302cbec7ba134d794e5910dca4a&language=en-US&page=1`
  )
  return data.data
})

export const GetImage = createAsyncThunk("GetImage", async (id) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=4ad1f302cbec7ba134d794e5910dca4a`
  )
  return data.data
})
