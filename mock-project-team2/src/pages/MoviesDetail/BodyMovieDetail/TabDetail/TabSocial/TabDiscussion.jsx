import React from "react"

const TabDiscussion = () => {
  return (
    <div>
      <div className="rounded-[10px] border-solid border-2 shadow-lg p-[10px] flex justify-between">
        <div className="flex">
          <div className="w-[64px] mr-[20px]">
            <img
              className="w-[32px] h-[32px] block rounded-full mt-[10px]"
              src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/334678231_952947382391237_5987591289918642456_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ME8fMN4A2M8AX8-_Bjr&_nc_ht=scontent.fhan2-5.fna&oh=00_AfA81nstEF6HoKzdpPvRQG5zQfp05RnsEF7ANhtGx916Ug&oe=640B14F9"
            />
          </div>
          <div className="mt-[10px]">
            <a href="#" className="hover:text-[#00000099]">
              A review by asd
            </a>
          </div>
        </div>
        <div className="mt-[10px]">
          <p>Open</p>
        </div>
        <div className="mt-[10px]">
          <p>1</p>
        </div>
        <div>
          <p className="text-right">
            Mar 02, 2023 at 6:40 AM
            <br />
            by{" "}
            <a href="" className="font-semibold">
              Markoff
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default TabDiscussion
