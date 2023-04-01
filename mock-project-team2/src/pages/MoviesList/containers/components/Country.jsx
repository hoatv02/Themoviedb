import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { providersSelector, totalCountrySelector } from "../../../../lib/redux/MoviesList/MoviesListSelector"
import { getCountries, getProviders } from "../../../../lib/middleware/MoviesList/moviesListMiddleware"
import { customLinkImageProvider, getISOCode } from "../../common"
import {
  changeStatusBtnSearch,
  changeValueWithOttProviders,
} from "../../../../lib/redux/MoviesList/DiscoverMoviesSlice"
import _ from "lodash"
import { ImageListItem } from "@mui/material"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css" // optional
import { SelectOptions } from "../../components"

const Country = () => {
  const dispatch = useDispatch()
  const totalCountry = useSelector(totalCountrySelector)
  const [valueCountry, setValueCountry] = useState("Vietnam")
  const providers = useSelector(providersSelector).results
  const [checkedProviders, setCheckedProviders] = useState([])
  useEffect(() => {
    dispatch(getCountries())
  }, [])

  useEffect(() => {
    if (valueCountry === "Vietnam") {
      dispatch(getProviders("VN"))
    } else {
      dispatch(getProviders(getISOCode(totalCountry, valueCountry, "iso_3166_1")))
    }
  }, [valueCountry])

  // mục tiêu là dispatch cả một mảng gồm nhiều id
  const handleClickImage = (id) => {
    dispatch(changeStatusBtnSearch({ statusSmall: true, small: true, big: false }))
    setCheckedProviders((prev) => {
      const isChecked = checkedProviders.includes(id)
      if (isChecked) {
        // Unchecked
        return checkedProviders.filter((item) => item !== id)
      } else {
        // Checked
        return [...prev, id]
      }
    })
  }

  useEffect(() => {
    dispatch(changeValueWithOttProviders(_.join(checkedProviders, "|")))
  }, [checkedProviders])

  return (
    <div>
      <SelectOptions
        totalValue={totalCountry}
        setValueSelect={setValueCountry}
        valueSelect={valueCountry}
        dispatchObject={{ statusSmall: true, small: true, big: false }}
      />
      <div className="grid pt-2 grid-cols-4 gap-2 gap-y-2">
        {providers &&
          providers.map((provider) => (
            <Tippy key={provider.provider_id} content={provider.provider_name}>
              <ImageListItem onClick={() => handleClickImage(provider.provider_id)} className="relative mr-1.9 mb-2">
                <img
                  style={{ width: 50, height: 50, borderRadius: 8 }}
                  src={customLinkImageProvider(provider.logo_path)}
                  alt={provider.provider_name}
                  loading="lazy"
                />
                {checkedProviders.includes(provider.provider_id) && (
                  <div className="block absolute w-[50px] h-[50px] z-[2] bg-[rgb(1,180,228)] rounded-lg top-0">
                    <i className="fa-solid fa-check absolute text-2xl text-white left-3.5 top-[9px]"></i>
                  </div>
                )}
              </ImageListItem>
            </Tippy>
          ))}
      </div>
    </div>
  )
}

Country.propTypes = {}

export default Country
