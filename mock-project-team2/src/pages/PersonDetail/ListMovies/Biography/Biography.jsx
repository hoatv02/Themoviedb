/* eslint-disable react/prop-types */
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { LoadingTitle } from "../../Loading/LoadingSkeleton"
import { GetPersonal } from "./../../../../Api/Common"
import ReadMore from "./../../../../components/UI/ReadMore/ReadMore"
const Biography = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.person.data)
  useEffect(() => {
    dispatch(GetPersonal())
  }, [])
  return (
    <div className="">
      <div className="text-3xl font-bold pt-10">
        <h1>{state.name}</h1>
      </div>
      <div className="py-5">
        <h4 className="font-bold text-xl pb-3">Biography</h4>
        <div className="py-3 text-md">
          <ReadMore text={state.biography ? state.biography : `we dont have a biography for ${state.name}`}></ReadMore>
        </div>
      </div>
      <div className="">
        <h4 className="font-bold text-xl pb-4">Known For</h4>
      </div>
    </div>
  )
}
const Loadings = () => {
  return <LoadingTitle />
}
Biography.Loadings = Loadings
export default Biography
