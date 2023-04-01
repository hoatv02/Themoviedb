import React, { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { changeStatusBtnSearch, changeValueWithRunTime } from "../../../../lib/redux/MoviesList/DiscoverMoviesSlice"
import { SliderCustomStyles } from "../../components"

const RunTime = () => {
  let marks = []
  const values = [0, 120, 240, 360]
  const step = 15
  for (let i = 0; i < values.length; i++) {
    const startValue = values[i]

    for (let j = startValue + step; j <= 400; j += step) {
      const label = j === startValue + step ? startValue.toString() : ""
      marks.push({ value: j, label })
    }
  }
  const [runTime, setRunTime] = useState([])
  const dispatch = useDispatch()

  const handleChangeValue = useCallback(
    (e) => {
      dispatch(changeStatusBtnSearch({ statusSmall: true, small: false, big: true }))
      setRunTime(e.target.value)
    },
    [runTime]
  )

  useEffect(() => {
    const before = runTime[0]
    const after = runTime[1]
    if (before === undefined && after === undefined) {
      dispatch(changeValueWithRunTime({ before: 0, after: 400 }))
    } else {
      dispatch(changeValueWithRunTime({ before, after }))
    }
  }, [runTime])
  return (
    <div>
      <SliderCustomStyles
        step={15}
        defaultValue={[0, 400]}
        marks={marks}
        maxValue={400}
        handleChangeValue={handleChangeValue}
      />
    </div>
  )
}
RunTime.propTypes = {}
export default RunTime
