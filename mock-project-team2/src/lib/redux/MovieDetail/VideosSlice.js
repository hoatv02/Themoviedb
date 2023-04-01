import { createSlice } from "@reduxjs/toolkit"
import { GetVideos } from "../../../Api/MovieDetail/Api"
const initState = {
  videos: {},
  results: [],
  firstVieo: "",
  status: false,
}
const videosSlice = createSlice({
  name: "videosSlice",
  initialState: initState,
  extraReducers: (builder) => {
    builder
      .addCase(GetVideos.pending, (state) => {
        state.status = true
      })
      .addCase(GetVideos.fulfilled, (state, action) => {
        state.videos = action.payload
        state.results = action.payload.results
        state.firstVieo = action.payload.results[0]
      })
      .addCase(GetVideos.rejected, (state) => {
        state.status = "error"
        state.videos = []
      })
  },
})
export const videoReducer = videosSlice.reducer
