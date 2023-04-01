import { createSlice } from "@reduxjs/toolkit"
import { GetListMovies } from "../../../Api/Common"
const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    isLoading: false,
    data: {},
    id: 1,
    isError: false,
  },
  reducers: {
    setPersonId: (state, action) => {
      state.id = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetListMovies.pending, (state, action) => {
      state.isLoading = true
    }),
      builder.addCase(GetListMovies.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      }),
      builder.addCase(GetListMovies.rejected, (state, action) => {
        state.isError = true
      })
  },
})
export const { setPersonId } = MoviesSlice.actions

export default MoviesSlice.reducer
