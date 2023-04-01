import { createSlice } from "@reduxjs/toolkit"
import { GetSocial } from "../../../Api/Common"
const SocialSlice = createSlice({
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
    builder.addCase(GetSocial.pending, (state, action) => {
      state.isLoading = true
    }),
      builder.addCase(GetSocial.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      }),
      builder.addCase(GetSocial.rejected, (state, action) => {
        state.isError = true
      })
  },
})

export const { setPersonId } = SocialSlice.actions
export const SocialReducer = SocialSlice.reducer
