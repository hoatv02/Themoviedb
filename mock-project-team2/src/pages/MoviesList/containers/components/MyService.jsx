import React from "react"
import { Checkbox } from "@mui/material"

const MyService = () => {
  return (
    <div className="flex items-center justify-between mb-3">
      <Checkbox disabled className="pl-0 pr-2 py-1" />
      <span className="relative top-[9px]">Restrict searches to my subscribed services?</span>
    </div>
  )
}

MyService.propTypes = {}

export default MyService
