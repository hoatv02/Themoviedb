import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { changeValueSort } from "../../../../lib/redux/MoviesList/DiscoverMoviesSlice"
import { SelectOptions } from "../../components"

const SortBy = () => {
  const defaultOptions = [
    { id: 1, name: "Popularity Descending", title: "popularity.desc" },
    { id: 2, name: "Popularity Ascending", title: "popularity.asc" },
    { id: 3, name: "Rating Descending", title: "revenue.desc" },
    { id: 4, name: "Rating Ascending", title: "revenue.asc" },
    { id: 5, name: "Release Date Descending", title: "release_date.desc" },
    { id: 6, name: "Release Date Ascending", title: "release_date.asc" },
    { id: 7, name: "Title (A-Z)", title: "original_title.asc" },
    { id: 8, name: "Title (Z-A)", title: "original_title.desc" },
  ]
  const dispatch = useDispatch()

  const [valueSelect, setValueSelect] = useState("Popularity Descending")
  function getTitleByOptionName(options, optionName) {
    const foundOption = options.find((option) => option.name === optionName)
    return foundOption ? foundOption.title : null
  }

  useEffect(() => {
    const title = getTitleByOptionName(defaultOptions, valueSelect)
    dispatch(changeValueSort(title))
  }, [valueSelect])

  return (
    <div>
      <SelectOptions
        valueSelect={valueSelect}
        totalValue={defaultOptions}
        setValueSelect={setValueSelect}
        dispatchObject={{ statusSmall: true, small: true, big: false }}
      />
    </div>
  )
}

SortBy.propTypes = {}

export default SortBy
