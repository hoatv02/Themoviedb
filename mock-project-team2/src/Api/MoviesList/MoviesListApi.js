import { API_KEY } from "../../constants"
import axiosClient from "../../service/axiosClient"

// GET
export const getListMoviesList = (currentPage) => {
  return axiosClient.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`)
}
