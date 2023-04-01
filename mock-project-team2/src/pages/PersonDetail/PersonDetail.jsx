import React, { useEffect, useState } from "react"
import Information from "./Information/Information"
import ListMovies from "./ListMovies/ListMovies"
import styles from "./PersonDetail.module.css"
const PersonDetail = () => {
  const [state, setState] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setState(false)
    }, 1000)
  }, [])
  return (
    <div className={`${styles.container} max-w-[1320px]`}>
      <div className={`${styles.Information}`}>
        {state && <Information.LoadingInfor />}
        {!state && <Information />}
      </div>
      <div className="flex-row gap-4 overflow-x-auto p-[0px]">
        <ListMovies />
      </div>
    </div>
  )
}
export default PersonDetail
