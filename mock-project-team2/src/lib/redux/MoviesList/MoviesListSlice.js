import { createSlice } from "@reduxjs/toolkit"
import { getMoviesList } from "../../middleware/MoviesList/moviesListMiddleware"
import _ from "lodash"

export const moviesListSlice = createSlice({
  name: "moviesList",
  initialState: {
    status: "idle",
    statusBtnSearch: false,
    statusScroll: false,
    moviesList: {},
    totalMoviesList: [],
  },
  reducers: {
    changeBtnSearch: (state, action) => {
      state.statusBtnSearch = action.payload
    },
    changeStatusScroll: (state, action) => {
      state.statusScroll = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    resetMoviesList: (state) => {
      state.totalMoviesList = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesList.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getMoviesList.fulfilled, (state, action) => {
        state.status = "fulfilled"
        state.moviesList = action.payload
        if (!_.isEmpty(action.payload)) {
          state.totalMoviesList.push(action.payload)
        }
      })
  },
})

export const { changeBtnSearch, changeStatusScroll, setCurrentPage, resetMoviesList } = moviesListSlice.actions
export const movieListSliceReducer = moviesListSlice.reducer
