/* eslint-disable prettier/prettier */
import React, { useState } from "react"
import { TreeItem, TreeView } from "@mui/lab"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { Button, Card } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { getDiscoverMovies } from "../../lib/middleware/MoviesList/moviesListMiddleware"
import {
  activeBtnSmallSelector,
  resultSearchSelector,
  statusBtnSearchSmallSelector,
  statusDiscoverMoviesListSelector,
} from "../../lib/redux/MoviesList/MoviesListSelector"
import { changeStatusBtnSearch } from "../../lib/redux/MoviesList/DiscoverMoviesSlice"
import { BounceLoader, PuffLoader } from "react-spinners"
import {
  Availabilities,
  Country,
  FindKeywords,
  Genres,
  Languages,
  MinimumUserVotes,
  ReleaseDates,
  RunTime,
  ShowMe,
  SortBy,
  UserScope,
  MyService
} from "./containers"
import { CardActionMovieList, HeaderSideBar, Space } from "./components"

const SideBar = () => {
  const dispatch = useDispatch()
  const resultSearch = useSelector(resultSearchSelector)
  // Status about api Discover
  const statusDiscover = useSelector(statusDiscoverMoviesListSelector)
  // status Active or un-Active of btn search small
  const activeBtnSmall = useSelector(activeBtnSmallSelector)
  // status about btn small, if it is false => hidden and true => show
  const statusBtnSmall = useSelector(statusBtnSearchSmallSelector)
  const [isClickSearch, setIsClickSearch] = useState(false)
  const handleSearch = (status) => {
    window.scrollTo(0, 0)
    setIsClickSearch(status)
    dispatch(changeStatusBtnSearch({ statusSmall: false, small: true, big: false }))
    dispatch(getDiscoverMovies(resultSearch))
  }
  return (
    <div>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        defaultExpanded={["1"]}
        className="w-full flex-grow-1 max-w-400 overflow-y-auto"
      >
        {/* SORT */}
        <Card className="border mb-5 border-solid border-[#e3e3e3]">
          <TreeItem nodeId="1" label={<HeaderSideBar header="Sort" />}>
            <CardActionMovieList 
              header="Sort Results By" 
              content={<SortBy />} 
              statusIconQuestionMark={false} 
            />
          </TreeItem>
        </Card>
        {/* FILTER */}
        <Card className="border mb-5 border-solid border-[#e3e3e3]">
          <TreeItem nodeId="2" label={<HeaderSideBar header="Filter" />}>
            {/* SORT */}
            <CardActionMovieList
              header="Show me"
              content={<ShowMe />}
              statusIconQuestionMark={true}
              border={true}
              contentTippy="Log in to filter items you've watched"
            />
            {/* Availabilities */}
            <CardActionMovieList 
              header="Availabilities" 
              content={<Availabilities />} 
              statusIconQuestionMark={false} 
              border={true}
            />
            {/* Release Dates */}
            <CardActionMovieList 
              header="Release Dates" 
              content={<ReleaseDates />} 
              statusIconQuestionMark={false} 
              border={true}
            />
            {/* Genres */}
            <CardActionMovieList 
              header="Genres" 
              content={<Genres />} 
              statusIconQuestionMark={false} 
              border={true}
            />
            {/*  Certification */}
            <CardActionMovieList 
              header="Certification" 
              statusIconQuestionMark={false} 
              border={true}
            />
            {/* Languages */}
            <CardActionMovieList
              header="Languages"
              content={<Languages />}
              statusIconQuestionMark={true}
              border={true}
              contentTippy="Filter items based on their original languages"
            />
            {/* User Score */}
            <CardActionMovieList 
              header="User Score" 
              content={<UserScope />} 
              statusIconQuestionMark={false} 
              border={true}
            />
            {/* Minimum User Votes */}
            <CardActionMovieList
              header="Minimum User Votes"
              content={<MinimumUserVotes />}
              statusIconQuestionMark={false}
              border={true}
            />
            {/* Runtime */}
            <CardActionMovieList 
              header="Runtime" 
              content={<RunTime />} 
              statusIconQuestionMark={false} 
              border={true}
            />
            {/* Keywords */}
            <CardActionMovieList 
              header="Keywords" 
              content={<FindKeywords />} 
              statusIconQuestionMark={false} 
            />
            <Space />
          </TreeItem>
        </Card>
        {/* WHERE TO WATCH */}
        <Card className="border mb-5 border-solid border-[#e3e3e3]">
          <TreeItem nodeId="3" label={<HeaderSideBar header="Where To Watch" />}>
            {/* My Services */}
            <CardActionMovieList
              header="My Services"
              content={<MyService />}
              statusIconQuestionMark={true}
              contentTippy="Log in to manage your subscribed services"
              border={true}
            />
            {/* Country */}
            <CardActionMovieList 
              header="Country"
              content={<Country />} 
              statusIconQuestionMark={false} 
            />
          </TreeItem>
        </Card>
      </TreeView>
      {statusBtnSmall &&
        (activeBtnSmall ? (
          <Button
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "rgb(1,180,228)", borderRadius: 20}}
            onClick={() => handleSearch(true)}
          >
            <div>Search</div>
          </Button>
        ) : statusDiscover === "loading" && isClickSearch ? (
          <Button fullWidth variant="contained" 
                  sx={{ backgroundColor: "rgb(1,180,228)", borderRadius: 20}}>
                    <PuffLoader color="#fff" size={23} />
          </Button>
        ) : (
          <Button
            disabled
            fullWidth
            variant="contained"
            onClick={() => handleSearch(false)}
            sx={{ borderRadius: 20 }}
          >
            Search
          </Button>
        ))}

      <Space />
    </div>
  )
}

SideBar.propTypes = {}

export default SideBar
