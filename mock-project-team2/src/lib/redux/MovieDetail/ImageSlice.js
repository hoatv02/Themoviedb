import { createSlice } from "@reduxjs/toolkit"
import { GetImage } from "../../../Api/MovieDetail/Api"

const initState = { status: false, backdrops: [], posters: [], fisrtPoster: "", fisrtBackdrop: "" }
const imgSlice = createSlice({
  name: "imgSlice",
  initialState: initState,
  extraReducers: (builder) => {
    builder
      .addCase(GetImage.pending, (state) => {
        state.status = true
      })
      .addCase(GetImage.fulfilled, (state, action) => {
        state.backdrops = action.payload.backdrops
        state.posters = action.payload.posters
        state.fisrtBackdrop = action.payload.backdrops[0]
        state.fisrtPoster = action.payload.posters[0]
      })
      .addCase(GetImage.rejected, (state) => {
        state.status = "error"
        state.backdrops = []
        state.posters = []
      })
  },
})
export const imgReducer = imgSlice.reducer
