import { createSlice } from "@reduxjs/toolkit"
import { GetSortMovies } from "../../../Api/Common"
const SortMoviesSlice = createSlice({
  name: "sortMovie",
  initialState: {
    isLoading: false,
    data: {},
    id: 1,
    isError: false,
    sortData: {},
  },
  reducers: {
    sortMovie: (state, action) => {
      state.sortData = action.payload
    },
    sortDepartment: (state, action) => {
      state.sortData = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetSortMovies.pending, (state, action) => {
      state.isLoading = true
    }),
      builder.addCase(GetSortMovies.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
        state.sortData = action.payload
      }),
      builder.addCase(GetSortMovies.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
      })
  },
})
export const { sortMovie, sortDepartment } = SortMoviesSlice.actions
export default SortMoviesSlice.reducer
