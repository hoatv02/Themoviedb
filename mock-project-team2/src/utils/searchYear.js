export const findYear = (query) => {
  const array = query.trim().split(" ")
  if (array.length < 2) return { query: query, year: "" }
  if (array[array.length - 1].trim().match(/^[y]{1}[:]{1}[\d]+$/)) {
    const year = array[array.length - 1].slice(2)
    const value = query.replace(array[array.length - 1], "").trim()
    return { query: value, year: year }
  }
  return { query: query, year: "" }
}
