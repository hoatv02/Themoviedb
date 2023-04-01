import { API_KEY } from "../../constants"
import axiosClient from "../../service/axiosClient"

function generateUrl(obj) {
  let queryParams = Object.entries(obj)
    .filter(([, value]) => value !== null)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&")
  return `&${queryParams}`
}

function convertToDotNotation(str) {
  const regex = /_(gte|lte)/g
  return str.replace(regex, ".$1")
}

export const getListMoviesDiscover = (totalValueSearch) => {
  const convertedQuery = convertToDotNotation(generateUrl(totalValueSearch))
  return axiosClient.get(`discover/movie?api_key=${API_KEY}&language=en-US${convertedQuery}`)
}

export const getListCountries = () => {
  return axiosClient.get(`/configuration/countries?api_key=${API_KEY}`)
}

export const getListLanguage = () => {
  return axiosClient.get(`/configuration/languages?api_key=${API_KEY}`)
}

export const getProvidersForDiscovers = (watch_region) => {
  return axiosClient.get(`/watch/providers/movie?api_key=${API_KEY}&language=en-US&watch_region=${watch_region}`)
}

export const getListKeywordsAPI = (keywords) => {
  return axiosClient.get(`search/keyword?api_key=${API_KEY}&query=${keywords}&page=1`)
}
