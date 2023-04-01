import React from "react"

const SeasonCurrent = (season) => {
  return (
    <div className="border-box border-b-[2px]">
      <h3 className="inline-block mr-[50px] font-bold">{season.title}</h3>
      <div className="relative top-0 left-0">
        <div className="flex rounded-[10px] border-solid border-2 shadow-lg">
          <a href="#">
            <img
              className="rounded-l-[10px]"
              src="https://www.themoviedb.org/t/p/w130_and_h195_bestv2/s3ZAS0AGLQ668sFveVFinAd2zVy.jpg"
            />
          </a>

          <div className="p-5">
            <a href="#" className="font-bold text-[25px] hover:text-[#00000099]">
              Season 2
            </a>
            <p className="font-bold">2022 | 8 Episodes</p>
            <p className="mt-4">
              The games are deadlier; this world more wild and cruel. But will Arisu ever make it back to the real world
              — and will it be worth everything hes lost?
            </p>
          </div>
        </div>
      </div>
      <a href="#">
        <h3 className="inline-block mt-[30px] font-bold pb-5">{season.buttonGoto}</h3>
      </a>
    </div>
  )
}

export default SeasonCurrent
