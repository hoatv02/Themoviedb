import { createSlice } from "@reduxjs/toolkit"
import { SearchMovies, GetTotal, SearchOptions } from "../../../Api/Common"

const initialState = {
  data: [],
  status: "idle",
  statusOptions: "idle",
  total: [],
  totalType: 0,
  totalPage: 0,
  searchOptions: [],
  firstMovie: "",
  firstTv: "",
  firstPerson: "",
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: {
    [SearchMovies.pending]: (state) => {
      state.status = "loading"
    },
    [SearchMovies.fulfilled]: (state, action) => {
      state.status = "success"
      state.data = action.payload.results
      state.totalType = action.payload.total_results
      state.totalPage = action.payload.total_pages
    },
    [SearchMovies.rejected]: (state) => {
      state.status = "error"
      state.data = null
    },

    [SearchOptions.pending]: (state) => {
      state.statusOptions = "loading"
    },
    [SearchOptions.fulfilled]: (state, action) => {
      state.statusOptions = "success"
      state.searchOptions = action.payload.multi.results
      state.firstMovie = action.payload.movie?.results[0]?.title
      state.firstTv = action.payload.tv.results[0]?.name
      state.firstPerson = action.payload.person.results[0]?.name
    },
    [SearchOptions.rejected]: (state) => {
      state.statusOptions = "error"
      state.searchOptions = null
    },

    [GetTotal.pending]: (state) => {
      state.status = "loading"
    },
    [GetTotal.fulfilled]: (state, action) => {
      state.status = "success"
      state.total = action.payload
    },
    [GetTotal.rejected]: (state) => {
      state.status = "error"
      state.total = null
    },
  },
})
export default searchSlice.reducer
