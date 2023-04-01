import React, { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getListKeywords } from "../../../../lib/middleware/MoviesList/moviesListMiddleware"
import { totalKeywordsSelector } from "../../../../lib/redux/MoviesList/MoviesListSelector"
import { changeStatusBtnSearch, changeValueWithKeywords } from "../../../../lib/redux/MoviesList/DiscoverMoviesSlice"
import { InputTag } from "../../components"

const FindKeywords = () => {
  const dispatch = useDispatch()
  const [valueSelected, setValueSelected] = useState([])
  const [valueChange, setValueChange] = useState("")
  const totalResultsKeywords = useSelector(totalKeywordsSelector)
  const handleGetValueChange = useCallback(
    (value) => {
      dispatch(getListKeywords(value))
      setValueChange(value)
    },
    [valueChange]
  )
  function getIdString(arr) {
    const ids = arr.map((item) => item.id)
    return ids.join("|")
  }

  const handleGetValueSelected = useCallback(
    (valueSelect) => {
      const str = getIdString(valueSelect)
      dispatch(changeValueWithKeywords(str))
      dispatch(changeStatusBtnSearch({ statusSmall: true, small: true, big: false }))
      setValueSelected(valueSelect)
    },
    [valueSelected]
  )

  return (
    <div>
      <InputTag
        setValue={setValueSelected}
        onSelectedValue={handleGetValueSelected}
        onChangeValue={handleGetValueChange}
        results={totalResultsKeywords.results}
      />
    </div>
  )
}
FindKeywords.propTypes = {}
export default FindKeywords
