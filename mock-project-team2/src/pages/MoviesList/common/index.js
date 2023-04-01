export const defaultOptions = {
  region: null,
  sort_by: "popularity.desc",
  certification_country: "VN",
  certification: null,
  certification_lte: null,
  certification_gte: null,
  include_adult: false,
  include_video: false,
  page: 1,
  primary_release_year: null,
  primary_release_date_gte: null,
  primary_release_date_lte: null,
  release_date_gte: null,
  release_date_lte: null,
  with_release_type: null,
  year: null,
  vote_count_gte: null,
  vote_count_lte: null,
  vote_average_gte: null,
  vote_average_lte: null,
  with_cast: null,
  with_crew: null,
  with_people: null,
  with_companies: null,
  with_genres: null,
  without_genres: null,
  with_keywords: null,
  without_keywords: null,
  with_runtime_gte: null,
  with_runtime_lte: null,
  with_original_language: null,
  with_watch_providers: null,
  watch_region: null,
  with_ott_providers: null,
  with_watch_monetization_types: "flatrate",
  with_ott_monetization_types: null,
  without_companies: null,
}

export const convertToPopularityAsc = (str) => {
  let newStr
  if (str === "Popularity Descending") {
    newStr = "popularity.desc"
  } else if (str === "Popularity Ascending") {
    newStr = "popularity.asc"
  } else if (str === "Rating Descending") {
    newStr = "revenue.desc"
  } else if (str === "Rating Ascending") {
    newStr = "revenue.asc"
  } else if (str === "Release Date Descending") {
    newStr = "release_date.desc"
  } else if (str === "Release Date Ascending") {
    newStr = "release_date.asc"
  } else if (str === "Title (A-Z)") {
    newStr = "original_title.asc"
  } else if (str === "Title (Z-A") {
    newStr = "original_title.desc"
  } else return
  return newStr
}

export const getISOCode = (arrayCheck, valueCheck, idCheck) => {
  const result = arrayCheck.find((c) => c.english_name.toLowerCase() === valueCheck.toLowerCase())
  if (result) {
    return result[idCheck]
  } else {
    return null
  }
}

export const customLinkImageProvider = (srcImg) => {
  return `https://www.themoviedb.org/t/p/original/${srcImg}`
}
