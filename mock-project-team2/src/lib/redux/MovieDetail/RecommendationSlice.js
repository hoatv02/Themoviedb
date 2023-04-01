import { createSlice } from "@reduxjs/toolkit"
import { GetRecommendations } from "../../../Api/MovieDetail/Api"
const initState = {
  recommend: {},
  results: [],
  status: false,
}
const recommendationssSlice = createSlice({
  name: "recommendationssSlice",
  initialState: initState,
  extraReducers: (builder) => {
    builder
      .addCase(GetRecommendations.pending, (state) => {
        state.status = true
      })
      .addCase(GetRecommendations.fulfilled, (state, action) => {
        state.recommend = action.payload
        state.results = action.payload.results
      })
      .addCase(GetRecommendations.rejected, (state) => {
        state.status = "error"
        state.recommend = []
      })
  },
})
export const recommendationsReducer = recommendationssSlice.reducer
