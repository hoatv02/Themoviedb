import React, { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { changeStatusBtnSearch, changeValueVoteAverageLte } from "../../../../lib/redux/MoviesList/DiscoverMoviesSlice"
import { SliderCustomStyles } from "../../components"

const UserScope = () => {
  const marks = [
    { value: 0, label: "0" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
  ]

  const [userScope, setUserScope] = useState([])
  const dispatch = useDispatch()

  const handleChangeValue = useCallback(
    (e) => {
      dispatch(changeStatusBtnSearch({ statusSmall: true, small: false, big: true }))
      setUserScope(e.target.value)
    },
    [userScope]
  )

  useEffect(() => {
    const before = userScope[0]
    const after = userScope[1]
    if (before === undefined && after === undefined) {
      dispatch(changeValueVoteAverageLte({ before: 1, after: 10 }))
    } else {
      dispatch(changeValueVoteAverageLte({ before, after }))
    }
  }, [userScope])

  return (
    <div>
      <SliderCustomStyles
        step={1}
        defaultValue={[0, 10]}
        marks={marks}
        maxValue={10}
        handleChangeValue={handleChangeValue}
      />
    </div>
  )
}

UserScope.propTypes = {}

export default UserScope
