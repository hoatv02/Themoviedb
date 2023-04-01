import React from "react"

const TopContributor = () => {
  return (
    <div>
      <h4 className="text-[1.5em] font-bold pb-4">Top Contribution</h4>
      <div className="flex gap-x-2 pb-4">
        <img
          className="w-[50px] h-[50px] block rounded-full"
          src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/334678231_952947382391237_5987591289918642456_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ME8fMN4A2M8AX8-_Bjr&_nc_ht=scontent.fhan2-5.fna&oh=00_AfA81nstEF6HoKzdpPvRQG5zQfp05RnsEF7ANhtGx916Ug&oe=640B14F9"
        />
        <div>
          <p className="font-bold">90</p>
          <p className="font-light">
            <a href="#">sherlcok</a>
          </p>
        </div>
      </div>
      <a href="#">View Edit History</a>
    </div>
  )
}

export default TopContributor
