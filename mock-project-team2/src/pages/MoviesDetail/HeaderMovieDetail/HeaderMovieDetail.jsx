import React from "react"
import ContentHeader from "./ContentHeader.jsx/ContentHeader"
import ImgHeader from "./Img/ImgHeader"

const HeaderMovieDetail = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundImage:
          "linear-gradient(to right, rgba(241.5, 220.5, 220.5, 1) calc((50vw - 170px) - 340px), rgba(241.5, 220.5, 220.5, 0.84) 50%, rgba(241.5, 220.5, 220.5, 0.84) 100%)",
      }}
    >
      <div className="pt-[30px] pb-[30px] flex justify-center items-center">
        <div className="flex-nowrap w-[70%] flex">
          <div className="border-0 min-w-[300px] w-[300px] h-[450px] overflow-hidden rounded-[8px]">
            <ImgHeader />
          </div>
          <div className="flex">
            <ContentHeader />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMovieDetail
