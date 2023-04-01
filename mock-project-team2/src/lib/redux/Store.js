import { configureStore } from "@reduxjs/toolkit"
import PersonReducer from "./Slice/Person"
import MoviesReducer from "./Slice/Movies"
import { movieListSliceReducer } from "./MoviesList/MoviesListSlice"
import { discoverMoviesSliceReducer } from "./MoviesList/DiscoverMoviesSlice"
import SortMoviesReducer from "./Slice/SortMovies"
import TrendingReducer from "./Slice/Trending"
import SearchReducer from "./Slice/SearchList"
import { choosenMovieReducer } from "./MovieDetail/MovieDetailSlice"
import { creditReducer } from "./MovieDetail/CreditSlice"
import { reviewsReducer } from "./MovieDetail/ReviewsSlice"
import { videoReducer } from "./MovieDetail/VideosSlice"
import { recommendationsReducer } from "./MovieDetail/RecommendationSlice"
import { imgReducer } from "./MovieDetail/ImageSlice"
import { SocialReducer } from "./Slice/Social"

export const store = configureStore({
  reducer: {
    moviesList: movieListSliceReducer,
    discoverMovies: discoverMoviesSliceReducer,
    person: PersonReducer,
    trending: TrendingReducer,
    search: SearchReducer,
    movies: MoviesReducer,
    sortMovie: SortMoviesReducer,
    movieDetail: choosenMovieReducer,
    credit: creditReducer,
    reviews: reviewsReducer,
    videos: videoReducer,
    recommendations: recommendationsReducer,
    images: imgReducer,
    social: SocialReducer,
  },
})
