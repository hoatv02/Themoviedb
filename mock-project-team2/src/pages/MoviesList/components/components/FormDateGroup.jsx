import PropTypes from "prop-types"
import TextField from "@mui/material/TextField"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { changeStatusBtnSearch } from "../../../../lib/redux/MoviesList/DiscoverMoviesSlice"

const FormDateGroup = ({ listDefaultDates, setDataDateSelect }) => {
  const dispatch = useDispatch()
  const [dates, setDates] = useState(() => {
    return listDefaultDates.map((item) => item.dateDefault)
  })
  const handleDateChange = (newValue, index) => {
    dispatch(changeStatusBtnSearch({ statusSmall: true, small: false, big: true }))
    setDates((prevDates) => {
      const newDates = [...prevDates]
      newDates[index] = newValue
      return newDates
    })
  }
  useEffect(() => {
    setDataDateSelect(dates)
  }, [dates])

  return (
    <div>
      {listDefaultDates.map((item, i) => (
        <div key={i} className="pt-2 mb-2 flex justify-between items-center">
          <div className="min-w-[40px] mr-2.5 pb-2 text-[rgb(164,164,164)]">{item.title}</div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={dates[i]}
              onChange={(newValue) => handleDateChange(newValue, i)}
              renderInput={(params) => <TextField size="small" {...params} />}
            />
          </LocalizationProvider>
        </div>
      ))}
    </div>
  )
}

FormDateGroup.propTypes = {
  listDefaultDates: PropTypes.array,
  setDataDateSelect: PropTypes.func,
}

export default FormDateGroup
