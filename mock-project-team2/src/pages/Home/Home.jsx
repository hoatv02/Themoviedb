import React, { useEffect } from "react"

import JoinToday from "./JoinToday/JoinToday"
import LeaderBoard from "./LeaderBoard/LeaderBoard"
import ListLastTrailer from "./ListLastTrailer/ListLastTrailer"
import Popular from "./Popular/Popular"
import Search from "./tabSearch/Search"
import Trending from "./Trending/Trending"

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Search />
      <Trending />
      <ListLastTrailer />
      <Popular />
      <JoinToday />
      <LeaderBoard />
    </div>
  )
}

export default Home
