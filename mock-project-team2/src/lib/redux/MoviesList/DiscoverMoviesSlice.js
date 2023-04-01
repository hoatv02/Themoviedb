import { createSlice } from "@reduxjs/toolkit"
import {
  getCountries,
  getDiscoverMovies,
  getLanguages,
  getListKeywords,
  getProviders,
} from "../../middleware/MoviesList/moviesListMiddleware"
import { defaultOptions } from "../../../pages/MoviesList/common"

export const discoverMoviesSlice = createSlice({
  name: "discoverMovies",
  initialState: {
    status: "idle",
    statusCountry: "idle",
    statusLanguages: "idle",
    statusProvider: "idle",
    statusKeywords: "idle",
    statusBtnSearch: {
      activeBtnSmall: false,
      btnSmall: true,
      btnBig: false,
    },
    totalValuesSearch: defaultOptions,
    statusDiscover: false,
    discoverMovies: [],
    countries: [],
    languages: [],
    providers: [],
    keywords: [],
  },
  reducers: {
    // Sort Results By
    changeValueSort: (state, action) => {
      state.totalValuesSearch.sort_by = action.payload
    },
    // Availabilities
    changeValueWithOttMonetizationTypes: (state, action) => {
      state.totalValuesSearch.with_watch_monetization_types = action.payload
    },
    // Search all releases?
    changeValueWithReleaseType: (state, action) => {
      state.totalValuesSearch.with_release_type = action.payload
    },
    // Search by countries
    changeValueRegion: (state, action) => {
      state.totalValuesSearch.region = action.payload
    },
    // Date
    changeValueDate: (state, action) => {
      state.totalValuesSearch.release_date_gte = action.payload.ago // thời gian trước
      state.totalValuesSearch.release_date_lte = action.payload.next // thời gian sau
    },
    // Genes
    changeWithGenres: (state, action) => {
      state.totalValuesSearch.with_genres = action.payload
    },
    // with_original_language
    changeValueWithOriginalLanguage: (state, action) => {
      state.totalValuesSearch.with_original_language = action.payload
    },
    // UserScope
    changeValueVoteAverageLte: (state, action) => {
      state.totalValuesSearch.vote_average_gte = action.payload.before
      state.totalValuesSearch.vote_average_lte = action.payload.after
    },
    // Minimum User Votes
    changeValueVoteCountGte: (state, action) => {
      state.totalValuesSearch.vote_count_gte = action.payload
    },
    // Runtime
    changeValueWithRunTime: (state, action) => {
      state.totalValuesSearch.with_runtime_gte = action.payload.before
      state.totalValuesSearch.with_runtime_lte = action.payload.after
    },
    changeValueWithOttProviders: (state, action) => {
      state.totalValuesSearch.with_ott_providers = action.payload
    },
    changeStatusBtnSearch: (state, action) => {
      state.statusBtnSearch.activeBtnSmall = action.payload.statusSmall
      state.statusBtnSearch.btnSmall = action.payload.small
      state.statusBtnSearch.btnBig = action.payload.big
    },
    // KEYWORDS
    changeValueWithKeywords: (state, action) => {
      state.totalValuesSearch.with_keywords = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      // GET DISCOVER-MOVIES
      .addCase(getDiscoverMovies.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getDiscoverMovies.fulfilled, (state, action) => {
        state.status = "fulfilled"
        state.discoverMovies.pop()
        state.discoverMovies.push(action.payload)
      })
      // GET COUNTRY
      .addCase(getCountries.pending, (state) => {
        state.statusCountry = "loading"
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.statusCountry = "fulfilled"
        state.countries = action.payload
      })
      // GET LANGUAGES
      .addCase(getLanguages.pending, (state) => {
        state.statusLanguages = "loading"
      })
      .addCase(getLanguages.fulfilled, (state, action) => {
        state.statusLanguages = "fulfilled"
        state.languages = action.payload
      })
      // GET PROVIDER
      .addCase(getProviders.pending, (state) => {
        state.statusProvider = "loading"
      })
      .addCase(getProviders.fulfilled, (state, action) => {
        state.statusProvider = "fulfilled"
        state.providers = action.payload
      })
      // GET LIST KEYS WORD
      .addCase(getListKeywords.pending, (state) => {
        state.statusKeywords = "loading"
      })
      .addCase(getListKeywords.fulfilled, (state, action) => {
        state.statusKeywords = "fulfilled"
        state.keywords = action.payload
      })
  },
})

export const {
  changeValueSort,
  changeValueWithOttMonetizationTypes,
  changeValueWithReleaseType,
  changeValueRegion,
  changeValueDate,
  changeWithGenres,
  changeValueWithOriginalLanguage,
  changeValueVoteAverageLte,
  changeValueVoteCountGte,
  changeValueWithRunTime,
  changeValueWithKeywords,
  changeValueWithOttProviders,
  changeStatusBtnSearch,
} = discoverMoviesSlice.actions
export const discoverMoviesSliceReducer = discoverMoviesSlice.reducer
