/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import Tippy from "@tippyjs/react"
import React from "react"
import { Link } from "react-router-dom"
import styles from "./ButtonShow.module.css"
const ButtonShowModal = ({ title, overview, vote, img, name }) => {
  return (
    <Tippy
      trigger="click"
      content={
        <div className="rounded-md mb-[-4px] mt-[-4px]">
          {/* <ul className={`${styles.loadinglist} bg-[#032541] rounded-md`}>
            <li>
              <div id={styles.panel}>
                <div id={styles.loading1}>
                  <div id={styles.outerCircle}></div>
                  <div id={styles.innerCircle}>
                    <div id={styles.center}></div>
                  </div>
                </div>
              </div>
            </li>
          </ul> */}
          <div className="flex justify-center items-center w-[500px] p-4 rounded-lg bg-[#032541]">
            <div className="w-[20%]">
              {img ? (
                <img
                  className=" h-[160px] w-full rounded-md"
                  src={`https://image.tmdb.org/t/p/w500/${img}`}
                  alt=""
                  loading="lazy"
                />
              ) : (
                <img
                  className=" h-[160px] w-full rounded-md"
                  src='https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/336892176_1584291268743966_3100613086875417847_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_ohc=6xHgzgOlCr4AX9-ACMt&_nc_ht=scontent.fhan5-2.fna&oh=00_AfCMsb9jZIRkhR_0PkF4zFDwPlgL-KmlriDMJG8geQJeWA&oe=641CB4B5'
                  alt=""
                  loading="lazy"
                />
              )}
            </div>
            <div className="pl-[2rem] flex-1 flex flex-col justify-between w-[80%]">
              <div className="flex items-center">
                <Link to={`/movie/`}>
                  <h2 className="font-bold text-2xl flex-1 text__down1">{title}</h2>
                </Link>
                <i className="fa-solid fa-star p-2 ml-5  rounded-md bg-[#01b4e4]">
                  <span className="ml-2 text-[12px] ">{vote}</span>
                </i>
              </div>
              <p className=" text__down2 text-sm py-2">{overview.slice(0, 120)}</p>
              <div className="mt-2 cursor-pointer">
                <span className=" p-2 bg-[#01b4e4] rounded-md ">
                  <i className="fa-solid fa-heart  "></i>
                </span>
                <span className="ml-[1rem]  p-2 bg-[#01b4e4] rounded-md ">
                  <i className="fa-solid fa-bookmark"></i>
                </span>
                <span className="ml-[1rem]  p-2 bg-[#01b4e4] rounded-md ">
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      }
      className="   rounded-lg bg-transparent cursor-pointer"
    >
      <div className="px-4 flex justify-center items-center">
        <div className="  w-[12px] h-[12px] rounded-[50%] border-2 border-stone-900 bg-white  flex justify-center items-center">
          <div className=" w-[6px] hover:bg-black h-[6px] rounded-[50%]"></div>
        </div>
      </div>
    </Tippy>
  )
}

export default ButtonShowModal
