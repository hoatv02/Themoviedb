import React, { useState, useCallback, useEffect } from "react"
import _ from "lodash"
import { useDispatch } from "react-redux"
import {
  changeStatusBtnSearch,
  changeValueWithOttMonetizationTypes,
} from "../../../../lib/redux/MoviesList/DiscoverMoviesSlice"
import { CheckBoxGroup } from "../../components"
// import AvailabilitiesCheckBoxGroup from "../Availabilities/AvailabilitiesCheckBoxGroup"

const Availabilities = () => {
  const dispatch = useDispatch()
  const defaultHeader = [
    {
      disabled: false,
      description: "Search all availabilities?",
    },
  ]

  const defaultContent = [
    {
      disabled: false,
      description: "Stream",
    },
    {
      disabled: false,
      description: "Free",
    },
    {
      disabled: false,
      description: "Ads",
    },
    {
      disabled: false,
      description: "Rent",
    },
    {
      disabled: false,
      description: "Buy",
    },
  ]
  const descriptions = defaultContent.map((item) => item.description)
  const descriptionHeader = defaultHeader.map((item) => item.description)
  const [arrayCheck, setArrayCheck] = useState(descriptions)
  const [isStatusHeader, setIsStatusHeader] = useState(descriptionHeader)

  const handleShowMenu = useCallback(
    (value) => {
      dispatch(changeStatusBtnSearch({ statusSmall: true, small: false, big: true }))
      if (value === "Search all availabilities?") {
        setIsStatusHeader((prev) =>
          isStatusHeader.includes(value) ? isStatusHeader.filter((item) => item !== value) : [...prev, value]
        )
      } else {
        setArrayCheck((prev) =>
          arrayCheck.includes(value) ? arrayCheck.filter((item) => item !== value) : [...prev, value]
        )
      }
    },
    [isStatusHeader, arrayCheck]
  )

  function getSortedDescriptions(defaultContent) {
    return defaultContent.map((item) => item.description)
  }
  const listDescription = getSortedDescriptions(defaultContent)

  const changeStr = (str) => {
    const outputStr = str
      .replace(/Stream/g, "flatrate")
      .replace(/Free/g, "free")
      .replace(/Ads/g, "ads")
      .replace(/Rent/g, "rent")
      .replace(/Buy/g, "buy")
    return outputStr
  } // "flatrate|free|ads|rent|buy"

  // NEED CHECK STATUS OFF HEADER IF HEADER CHECKED => DISPATCH ALL
  // IF HEADER UN-CHECKED => DISPATCH ""
  useEffect(() => {
    if (_.isEmpty(isStatusHeader)) {
      const str = changeStr(listDescription.join("|"))
      dispatch(changeValueWithOttMonetizationTypes(str))
    } else return
  }, [isStatusHeader]) // OK

  useEffect(() => {
    if (_.isEmpty(isStatusHeader)) {
      if (_.isEmpty(arrayCheck)) {
        dispatch(changeValueWithOttMonetizationTypes(null))
      } else {
        const str = changeStr(arrayCheck.join("|"))
        dispatch(changeValueWithOttMonetizationTypes(str))
      }
    }
  }, [arrayCheck]) // OK

  return (
    <div>
      <CheckBoxGroup
        listDetailCheckBox={defaultHeader}
        onShowMenu={handleShowMenu}
        statusCheckedHeader={isStatusHeader}
      />
      {isStatusHeader.length === 0 && (
        <CheckBoxGroup listDetailCheckBox={defaultContent} onShowMenu={handleShowMenu} arrayCheck={arrayCheck} />
      )}
    </div>
  )
}

Availabilities.propTypes = {}

export default Availabilities
