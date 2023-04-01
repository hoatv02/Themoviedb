// import { createSlice } from "@reduxjs/toolkit"
// import { GetListByYear } from "../../../Api/Common"
// const GetListByYearSlice = createSlice({
//   name: "byyear",
//   initialState: {
//     isLoading: false,
//     data: {},
//     id: 1,
//     isError: false,
//   },
//   reducers: {
//     setPersonId: (state, action) => {
//       state.id = action.payload
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(GetListByYear.pending, (state, action) => {
//       state.isLoading = true
//     }),
//       builder.addCase(GetListByYear.fulfilled, (state, action) => {
//         state.isLoading = false
//         state.data = action.payload
//       }),
//       builder.addCase(GetListByYear.rejected, (state, action) => {
//         state.isError = true
//       })
//   },
// })
// export const { setPersonId } = GetListByYearSlice.actions

// export default GetListByYearSlice.reducer
