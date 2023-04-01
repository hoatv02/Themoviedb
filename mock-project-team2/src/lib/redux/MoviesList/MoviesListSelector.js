/* eslint-disable prettier/prettier */
// MOVIES-LIST
export const totalMoviesListSelector = (state) =>
  state.moviesList.totalMoviesList
export const currentPageSelector = (state) =>
  state.moviesList.currentPage
export const statusMovieListSelector = (state) =>
  state.moviesList.status

// DISCOVER-MOVIES
export const statusDiscoverMoviesListSelector = (state) =>
  state.discoverMovies.status
export const discoverMoviesSelector = (state) =>
  state.discoverMovies.discoverMovies
export const totalLanguagesSelector = (state) =>
  state.discoverMovies.languages
export const totalCountrySelector = (state) =>
  state.discoverMovies.countries
export const totalKeywordsSelector = (state) =>
  state.discoverMovies.keywords
export const resultSearchSelector = (state) =>
  state.discoverMovies.totalValuesSearch
export const statusBtnSearchSelector = (state) =>
  state.discoverMovies.statusBtnSearch
export const providersSelector = (state) =>
  state.discoverMovies.providers
export const activeBtnSmallSelector = (state) =>
  state.discoverMovies.statusBtnSearch.activeBtnSmall
export const statusBtnSearchSmallSelector = (state) =>
  state.discoverMovies.statusBtnSearch.btnSmall
export const statusBtnSearchBigSelector = (state) =>
  state.discoverMovies.statusBtnSearch.btnBig
