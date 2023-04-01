import React, { useState, useCallback, useEffect } from "react"
import moment from "moment"
import { useDispatch, useSelector } from "react-redux"
import { getCountries } from "../../../../lib/middleware/MoviesList/moviesListMiddleware"
import {
  changeStatusBtnSearch,
  changeValueDate,
  changeValueRegion,
  changeValueWithReleaseType,
} from "../../../../lib/redux/MoviesList/DiscoverMoviesSlice"
import _ from "lodash"
import { contentReleases, convertToCode, headerCountry, headerReleases } from "../../common/releaseDates"
import { getISOCode } from "../../common"
import { totalCountrySelector } from "../../../../lib/redux/MoviesList/MoviesListSelector"
import { CheckBoxGroup, FormDateGroup, SelectOptions } from "../../components"

const ReleaseDates = () => {
  const dispatch = useDispatch()
  const totalCountry = useSelector(totalCountrySelector)
  const descriptionHeader = headerReleases.map((item) => item.description)
  const countryHeader = headerCountry.map((item) => item.description)
  const descriptions = contentReleases.map((item) => item.description)
  // CONTENT
  const [isStatusHeader, setIsStatusHeader] = useState(descriptionHeader)
  const [arrayCheck, setArrayCheck] = useState(descriptions)
  // COUNTRIES
  const [isCountryHeader, setIsCountryHeader] = useState(countryHeader)
  const [valueCountry, setValueCountry] = useState("Vietnam")
  const handleShowMenu = useCallback(
    (value) => {
      dispatch(changeStatusBtnSearch({ statusSmall: true, small: false, big: true }))
      if (value === headerReleases[0].description) {
        setIsStatusHeader((prev) =>
          isStatusHeader.includes(value) ? isStatusHeader.filter((item) => item !== value) : [...prev, value]
        )
      } else if (value === headerCountry[0].description) {
        dispatch(getCountries())
        setIsCountryHeader((prev) =>
          isCountryHeader.includes(value) ? isCountryHeader.filter((item) => item !== value) : [...prev, value]
        )
      } else {
        setArrayCheck((prev) =>
          arrayCheck.includes(value) ? arrayCheck.filter((item) => item !== value) : [...prev, value]
        )
      }
    },
    [isStatusHeader, isCountryHeader, arrayCheck]
  )
  // DATE
  const currentTime = moment().format("YYYY-MM-DD")
  const [dataDateSelect, setDataDateSelect] = useState([])

  useEffect(() => {
    if (!_.isEmpty(dataDateSelect)) {
      const timeAgo = dataDateSelect[0]
      const nextTime = dataDateSelect[1]
      if (_.every(dataDateSelect, _.identity)) {
        if (_.isObject(timeAgo) && _.isString(nextTime)) {
          dispatch(
            changeValueDate({
              ago: moment(timeAgo.$d).format("YYYY-MM-DD"),
              next: nextTime,
            })
          )
        } else {
          dispatch(
            changeValueDate({
              ago: moment(timeAgo.$d).format("YYYY-MM-DD"),
              next: moment(nextTime.$d).format("YYYY-MM-DD"),
            })
          )
        }
      } else if (_.isEqual(dataDateSelect, [null, null])) {
        dispatch(
          changeValueDate({
            ago: "",
            next: "",
          })
        )
      } else {
        if (_.isString(nextTime)) {
          dispatch(
            changeValueDate({
              ago: "",
              next: nextTime,
            })
          )
        } else if (_.isObject(nextTime)) {
          dispatch(
            changeValueDate({
              ago: "",
              next: moment(nextTime.$d).format("YYYY-MM-DD"),
            })
          )
        } else {
          dispatch(
            changeValueDate({
              ago: moment(timeAgo.$d).format("YYYY-MM-DD"),
              next: "",
            })
          )
        }
      }
    }
  }, [dataDateSelect])

  useEffect(() => {
    if (_.isEmpty(isStatusHeader) && arrayCheck.length === contentReleases.length) {
      dispatch(changeValueWithReleaseType(convertToCode(descriptions)))
    } else if (_.isEmpty(isStatusHeader) && arrayCheck.length !== contentReleases.length) {
      dispatch(changeValueWithReleaseType(convertToCode(arrayCheck)))
    } else {
      dispatch(changeValueWithReleaseType(""))
    }
  }, [isStatusHeader, arrayCheck])

  useEffect(() => {
    if (_.isEmpty(isCountryHeader) && valueCountry === "Vietnam") {
      dispatch(changeValueRegion("VN"))
    } else if (_.isEmpty(isCountryHeader) && valueCountry !== "Vietnam") {
      dispatch(changeValueRegion(getISOCode(totalCountry, valueCountry, "iso_3166_1")))
    } else {
      dispatch(changeValueRegion(""))
    }
  }, [isCountryHeader, valueCountry])

  return (
    <div>
      <CheckBoxGroup
        listDetailCheckBox={headerReleases}
        onShowMenu={handleShowMenu}
        statusCheckedHeader={isStatusHeader}
      />
      {isStatusHeader.length === 0 && (
        <>
          <>
            <CheckBoxGroup
              listDetailCheckBox={headerCountry}
              onShowMenu={handleShowMenu}
              statusCheckedHeader={isCountryHeader}
            />
            {isCountryHeader.length === 0 && (
              <SelectOptions
                totalValue={totalCountry}
                setValueSelect={setValueCountry}
                valueSelect={valueCountry}
                dispatchObject={{ statusSmall: true, small: true, big: false }}
              />
            )}
          </>
          <CheckBoxGroup listDetailCheckBox={contentReleases} onShowMenu={handleShowMenu} arrayCheck={arrayCheck} />
        </>
      )}
      <div className="pt-3.5">
        <FormDateGroup
          listDefaultDates={[
            {
              title: "from",
              dateDefault: null,
            },
            {
              title: "to",
              dateDefault: currentTime,
            },
          ]}
          setDataDateSelect={setDataDateSelect}
        />
      </div>
    </div>
  )
}

ReleaseDates.propTypes = {}

export default ReleaseDates
