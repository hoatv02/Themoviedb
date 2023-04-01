import React from "react"
import Tab from "../../../components/UI/Tab/Tab"
import TabPopular from "./TabDetail/TabMedia/TabPopular"
import TabVideo from "./TabDetail/TabMedia/TabVideo"
import TabBackdrop from "./TabDetail/TabMedia/TabBackdrop"
import TabPoster from "./TabDetail/TabMedia/TabPoster"
import TabDiscussion from "./TabDetail/TabSocial/TabDiscussion"
import TabReview from "./TabDetail/TabSocial/TabReview"
import CardActor from "./CardActor/CardActor"
import SeasonCurrent from "./SeasonCurrent/SeasonCurrent"
import LinkVisit from "./LinkVisit/LinkVisit"
import Information from "./Information/Information"
import Keyword from "./Keyword/Keyword"
import ContentScore from "./ContentScore/ContentScore"
import TopContributor from "./TopContributor/TopContributor"
import PopularityTrend from "./PopularityTrend/PopularityTrend"
import ButtonCustom from "../../../components/UI/Button/ButtonCustom"
import Recommendation from "./Recommendation/Recommendation"
import { useSelector } from "react-redux"

const BodyMovieDetail = () => {
  const totalReview = useSelector((state) => state.reviews.totalResults)
  const listBackdrop = useSelector((state) => state.images.backdrops)
  const listPoster = useSelector((state) => state.images.posters)
  const listVideo = useSelector((state) => state.videos.results)
  const tabsSocial = [
    {
      name: "Reviews",
      content: <TabReview />,
      count: totalReview,
    },
    {
      name: "Discussions",
      content: <TabDiscussion />,
      count: 2,
    },
  ]

  const tabsMedia = [
    {
      name: "Most populars",
      content: <TabPopular />,
    },
    {
      name: "Videos",
      content: <TabVideo />,
      count: listVideo.length,
    },
    {
      name: "Backdrops",
      content: <TabBackdrop />,
      count: listBackdrop.length,
    },
    {
      name: "Posters",
      content: <TabPoster />,
      count: listPoster.length,
    },
  ]
  return (
    <div className="flex">
      <div
        className="w-full block border-solid border-t-[2px] border-b-[2px]"
        style={{ width: "calc(100vw - 80px - 268px)", maxWidth: "calc(1400px - 80px - 268px)" }}
      >
        <CardActor title="Series Cast" buttonGoto="Full Cast & Crew" />
        <SeasonCurrent title="Current Season" buttonGoto="View All Seasons" />
        <Tab tabs={tabsSocial} title="Social" buttonGoto="Read All Reviews" />
        <Tab tabs={tabsMedia} title="Media" buttonGoto="Go to Discussions" />
        <Recommendation title="Recommendations" />
      </div>
      <div className="pl-[20px]">
        <div className="pb-[20px]">
          <LinkVisit />
        </div>
        <div className="pb-[20px]">
          <Information />
        </div>
        <div className="border-b-2 border-solid	pb-[20px]">
          <Keyword />
        </div>
        <div className="pt-[20px]">
          <ContentScore />
        </div>
        <div className="pt-[20px]">
          <TopContributor />
        </div>
        <div className="pt-[20px]">
          <PopularityTrend />
        </div>
        <div className="pt-[20px]">
          <ButtonCustom description="LOGIN TO EDIT" variant="contained" />
        </div>
        <div className="pt-[20px]">
          <a className="opacity-50">
            <i className="fa-solid fa-keyboard"></i> Keyboard Shortcuts
          </a>
        </div>
        <div className="pt-[20px]">
          <p>
            <i className="fa-solid fa-comment-exclamation"></i>Login to report an issue
          </p>
        </div>
      </div>
    </div>
  )
}

export default BodyMovieDetail
