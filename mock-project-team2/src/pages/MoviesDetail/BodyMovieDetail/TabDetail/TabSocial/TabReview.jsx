/* eslint-disable react/jsx-no-comment-textnodes */
import moment from "moment"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { GetReviews } from "../../../../../Api/MovieDetail/Api"

const TabReview = () => {
  const dispatch = useDispatch()
  const idMovie = useParams()
  const firstResult = useSelector((state) => state.reviews.firstResult)
  const totalReview = useSelector((state) => state.reviews.totalResults)
  useEffect(() => {
    dispatch(GetReviews(idMovie.id))
  }, [])
  return (
    <div>
      {totalReview === 0 ? (
        <p>We dont have any reviews for Still Time. Would you like to write one?</p>
      ) : (
        <div className="rounded-[5px] border-solid border-2 shadow-lg p-[20px]" key={firstResult?.author}>
          <div className="flex">
            <div className="w-[64px] mr-[20px]">
              <img
                className="w-[64px] h-[64px] block rounded-full"
                src={"https://image.tmdb.org/t/p/w500" + firstResult?.author_details?.avatar_path}
              />
            </div>
            <div>
              <div className="flex">
                <a href="#" className="font-bold text-2xl">
                  A review by {firstResult?.author}
                </a>
                <div className="rounded-[10px] bg-black text-white p-[5px] ml-5 text-[0.8em]">
                  <i className="fa-solid fa-star"></i>
                  {firstResult?.author_details?.rating ? firstResult.author_details.rating.toFixed(1) : 0}
                </div>
              </div>
              <p className="opacity-60">
                Writen by{" "}
                <strong>
                  <a href="#" className="text-[black] hover:text-[#00000099]">
                    {firstResult?.author}
                  </a>
                </strong>{" "}
                on {moment(firstResult?.created_at).format("MMMM D, YYYY")}
              </p>
            </div>
          </div>
          <div className="ml-[85px]">
            <p className="line-clamp-5">{firstResult?.content}</p>
            <a className="underline hover:text-[#00000099]" href="#">
              read the rest
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default TabReview
