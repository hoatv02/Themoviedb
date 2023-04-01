import PropTypes from "prop-types"
import FormControl from "@mui/material/FormControl"
import { NativeSelect, OutlinedInput } from "@mui/material"
import { useDispatch } from "react-redux"
import { changeStatusBtnSearch } from "../../../../lib/redux/MoviesList/DiscoverMoviesSlice"

function SelectOptions({ totalValue, valueSelect, setValueSelect, dispatchObject }) {
  const dispatch = useDispatch()
  const handleGetValue = (e) => {
    dispatch(changeStatusBtnSearch(dispatchObject))
    setValueSelect(e.target.value)
  }
  return (
    <div className="pt-2 pb-2">
      <FormControl fullWidth size="small">
        {totalValue && (
          <NativeSelect
            menuprops={{
              disableScrollLock: false,
            }}
            value={valueSelect}
            onChange={handleGetValue}
            input={<OutlinedInput />}
          >
            {totalValue.map((value) => (
              <option key={value.iso_3166_1 || value.iso_639_1 || value.id} value={value.english_name || value.name}>
                {value.english_name || value.name}
              </option>
            ))}
          </NativeSelect>
        )}
      </FormControl>
    </div>
  )
}

SelectOptions.propTypes = {
  totalValue: PropTypes.array,
  valueSelect: PropTypes.string,
  setValueSelect: PropTypes.func,
  defaultValue: PropTypes.string,
  dispatchObject: PropTypes.object,
}

export default SelectOptions
