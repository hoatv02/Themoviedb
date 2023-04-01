import React, { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { changeStatusBtnSearch, changeValueVoteCountGte } from "../../../../lib/redux/MoviesList/DiscoverMoviesSlice"
import { SliderCustomStyles } from "../../components"

const MinimumUserVotes = () => {
  const dispatch = useDispatch()
  const [miniNumUserVotes, setMiniNumUserVotes] = useState()
  const marks = [
    { value: 0, label: "0" },
    { value: 50, label: "" },
    { value: 100, label: "100" },
    { value: 150, label: "" },
    { value: 200, label: "200" },
    { value: 250, label: "" },
    { value: 300, label: "300" },
    { value: 350, label: "" },
    { value: 400, label: "400" },
    { value: 450, label: "" },
    { value: 500, label: "500" },
  ]

  const handleChangeValue = useCallback(
    (e) => {
      dispatch(changeStatusBtnSearch({ statusSmall: true, small: false, big: true }))
      setMiniNumUserVotes(e.target.value)
    },
    [miniNumUserVotes]
  )

  useEffect(() => {
    if (miniNumUserVotes === undefined) {
      dispatch(changeValueVoteCountGte(0))
    } else {
      dispatch(changeValueVoteCountGte(miniNumUserVotes))
    }
  }, [miniNumUserVotes])

  return (
    <div>
      <SliderCustomStyles
        step={50}
        defaultValue={0}
        marks={marks}
        maxValue={500}
        handleChangeValue={handleChangeValue}
      />
    </div>
  )
}

MinimumUserVotes.propTypes = {}

export default MinimumUserVotes
