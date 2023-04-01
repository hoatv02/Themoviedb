import PropTypes from "prop-types"

export const API_KEY = "5805c824a6a796dd7b66b4d53e70d510"

export const listWidthImages = {
  w45: "w45",
  w92: "w92",
  w154: "w154",
  w185: "w185",
  w300: "w300",
  w342: "w342",
  w500: "w500",
  w780: "w780",
  w1280: "w1280",
  original: "original",
}

export const customSrcImage = (width, pathImage) => {
  return `https://image.tmdb.org/t/p/${width}${pathImage}`
}

customSrcImage.propTypes = {
  width: PropTypes.number,
  pathImage: PropTypes.string,
}
