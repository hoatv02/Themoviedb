import { createSlice } from "@reduxjs/toolkit"
import { GetReviews } from "../../../Api/MovieDetail/Api"
const initState = {
  reviews: {},
  result: [],
  firstResult: {},
  totalResults: 0,
  status: false,
}
const reviewsSlice = createSlice({
  name: "reviewsSlice",
  initialState: initState,
  extraReducers: (builder) => {
    builder
      .addCase(GetReviews.pending, (state) => {
        state.status = true
      })
      .addCase(GetReviews.fulfilled, (state, action) => {
        state.reviews = action.payload
        state.result = action.payload.results
        state.totalResults = action.payload.total_results
        state.firstResult = action.payload.results[0]
      })
      .addCase(GetReviews.rejected, (state) => {
        state.status = "error"
        state.result = []
      })
  },
})
export const reviewsReducer = reviewsSlice.reducer
