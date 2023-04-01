import { createSlice } from "@reduxjs/toolkit"
import { GetTrendingMovies } from "../../../Api/Common"

const initialState = {
  data: [],
  status: "idle",
  total: 0,
}
export const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {},
  extraReducers: {
    [GetTrendingMovies.pending]: (state) => {
      state.status = "loading"
    },
    [GetTrendingMovies.fulfilled]: (state, action) => {
      state.status = "success"
      state.data = action.payload.results
      state.total = action.payload.total_results
    },
    [GetTrendingMovies.rejected]: (state) => {
      state.status = "error"
      state.data = null
    },
  },
})
export default trendingSlice.reducer
