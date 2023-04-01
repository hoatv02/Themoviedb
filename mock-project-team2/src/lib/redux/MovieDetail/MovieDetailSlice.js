import { createSlice } from "@reduxjs/toolkit"
import moment from "moment/moment"
import { GetDetailMovie } from "../../../Api/MovieDetail/Api"

const initState = {
  choosenMovie: {},
  status: false,
  listGenres: [],
  title: "",
  overview: "",
  tagline: "",
  posterPath: "",
  backdropPath: "",
  releaseDate: "",
  voteAverage: 0,
  runtime: 0,
  statusMovie: "",
  originalTitle: "",
  spokenLanguage: [],
  budget: 0,
  revenue: 0,
  loading: false,
}
const choosenMovieSlice = createSlice({
  name: "choosenMovieSlice",
  initialState: initState,
  reducers: {
    setChoosenMovie: (state, action) => {
      state.choosenMovie = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetDetailMovie.pending, (state) => {
        state.status = true
      })
      .addCase(GetDetailMovie.fulfilled, (state, action) => {
        state.choosenMovie = action.payload
        state.listGenres = action.payload.genres
        state.title = action.payload.title
        state.overview = action.payload.overview
        state.posterPath = "https://image.tmdb.org/t/p/w500" + action.payload.poster_path
        state.backdropPath = "https://image.tmdb.org/t/p/w500" + action.payload.backdrop_path
        state.tagline = action.payload.tagline
        state.runtime = Math.floor(action.payload.runtime / 60) + "h" + " " + (action.payload.runtime % 60) + "m"
        state.releaseDate = moment(action.payload.release_date).format("L")
        state.voteAverage = action.payload.vote_average.toFixed(1)
        state.spokenLanguage = action.payload.spoken_languages
        state.statusMovie = action.payload.status
        state.originalTitle = action.payload.original_title
        state.budget = action.payload.budget
        state.revenue = action.payload.revenue
      })
      .addCase(GetDetailMovie.rejected, (state) => {
        state.status = "error"
        state.listGenres = []
      })
  },
})
export const { setChoosenMovie } = choosenMovieSlice.actions
export const choosenMovieReducer = choosenMovieSlice.reducer
