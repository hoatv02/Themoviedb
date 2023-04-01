import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getISOCode } from "../../common"
import { changeValueWithOriginalLanguage } from "../../../../lib/redux/MoviesList/DiscoverMoviesSlice"
import { totalLanguagesSelector } from "../../../../lib/redux/MoviesList/MoviesListSelector"
import { getLanguages } from "../../../../lib/middleware/MoviesList/moviesListMiddleware"
import { SelectOptions } from "../../components"

const Languages = () => {
  const dispatch = useDispatch()
  const totalLanguages = useSelector(totalLanguagesSelector)
  const newTotalLanguages = [...totalLanguages, { iso_639_1: "none-select", english_name: "None Selected" }]
  const [valueSelect, setValueSelect] = useState("None Selected")

  useEffect(() => {
    dispatch(getLanguages())
  }, [])

  useEffect(() => {
    if (valueSelect === "None Selected") {
      dispatch(changeValueWithOriginalLanguage(null))
    } else {
      const result = getISOCode(newTotalLanguages, valueSelect, "iso_639_1")
      dispatch(changeValueWithOriginalLanguage(result))
    }
  }, [valueSelect])

  return (
    <div>
      {totalLanguages && (
        <SelectOptions
          totalValue={newTotalLanguages}
          valueSelect={valueSelect}
          setValueSelect={setValueSelect}
          dispatchObject={{ statusSmall: true, small: false, big: true }}
        />
      )}
    </div>
  )
}

Languages.propTypes = {}
export default Languages
