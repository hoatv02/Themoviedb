import { createSlice } from "@reduxjs/toolkit"
import { GetCredit } from "../../../Api/MovieDetail/Api"
const initState = {
  credit: {},
  listCast: [],
  listCrew: [],
}
const creditSlice = createSlice({
  name: "creditSlice",
  initialState: initState,
  extraReducers: (builder) => {
    builder
      .addCase(GetCredit.pending, (state) => {
        state.status = true
      })
      .addCase(GetCredit.fulfilled, (state, action) => {
        state.credit = action.payload
        state.listCast = action.payload.cast
        state.listCrew = action.payload.crew
      })
      .addCase(GetCredit.rejected, (state) => {
        state.status = "error"
        state.listGenres = []
      })
  },
})
export const creditReducer = creditSlice.reducer
