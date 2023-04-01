import { createSlice } from "@reduxjs/toolkit"
import { GetPersonal } from "../../../Api/Common"
const PersonSlice = createSlice({
  name: "person",
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
    builder.addCase(GetPersonal.pending, (state, action) => {
      state.isLoading = true
    }),
      builder.addCase(GetPersonal.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      }),
      builder.addCase(GetPersonal.rejected, (state, action) => {
        state.isError = true
      })
  },
})

export const { setPersonId } = PersonSlice.actions
export default PersonSlice.reducer
