import React from "react"
import { useSelector } from "react-redux"

const CardActor = (card) => {
  const listCast = useSelector((state) => state.credit.listCast)

  return (
    <div className="border-box border-b-[2px]">
      <h3 className="inline-block mr-[50px] font-bold">{card.title}</h3>
      <div className="relative top-0 left-0">
        <div className="flex gap-x-[20px] top-0 left-0 overflow-x-scroll pb-[20px]">
          {listCast.map((cast) => (
            <div
              style={{ border: "1px solid rgba(227,227,227,1)" }}
              className="w-[140px] h-[auto] p-0 m-0 top-0 left-0"
              key={cast.id}
            >
              <a href={`/person-detail/${cast.id}`} className="min-w-[138px] w-[138px] h-[175px] block">
                <img className="h-full w-full rounded-lg" src={"https://image.tmdb.org/t/p/w500" + cast.profile_path} />
              </a>
              <a href={`/person-detail/${cast.id}`}>
                <a href={`/person-detail/${cast.id}`}>
                  <p className="font-bold hover:text-[#00000099]">{cast.original_name}</p>
                </a>
              </a>
              <p>{cast.character}</p>
            </div>
          ))}
        </div>
      </div>

      <a href="#">
        <h3 className="inline-block mt-[30px] font-bold pb-5">{card.buttonGoto}</h3>
      </a>
    </div>
  )
}

export default CardActor
