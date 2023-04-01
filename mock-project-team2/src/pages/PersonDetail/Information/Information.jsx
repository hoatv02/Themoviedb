import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetPersonal, GetSocial } from "../../../Api/Common"
import Button from "../../../components/UI/Button/Button"
import { setPersonId } from "../../../lib/redux/Slice/Person"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import { useParams } from "react-router"
import _ from "lodash"
import { LoadingInformations } from "./../Loading/LoadingSkeleton"
const Information = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.person)
  const social = useSelector((state) => state.social)
  const { id } = useParams()
  useEffect(() => {
    dispatch(GetPersonal(id))
    dispatch(GetSocial(id))
    setId(id)
  }, [id])
  const setId = (id) => {
    dispatch(setPersonId(id))
  }
  const info = [
    { title: "Known For", nd: state.data.known_for_department },
    { title: "Known Credits", nd: 79 },
    { title: "Gender", nd: state.data.gender === 2 ? "Male" : "Female" },
    { title: "Birthday", nd: state.data.birthday },
    { title: "Place of Birth", nd: state.data.place_of_birth },
    { title: "Also Known As", nd: state.data.also_known_as },
  ]
  const socialList = [
    {
      title: "Facebook",
      link: social.data.facebook_id,
      icon: <i className="fa-brands fa-square-facebook text-[27px] pr-4"></i>,
      href: 'https://www.facebook.com/'
    },
    {
      title: "Instagram",
      link: social.data.instagram_id,
      icon: <i className="fa-brands fa-instagram text-[27px] pr-4"></i>,
      href: 'https://www.instagram.com/'
    },
    {
      title: "Twitter",
      link: social.data.twitter_id,
      icon: <i className="fa-brands fa-twitter text-[27px] pr-4"></i>,
      href: 'https://twitter.com/'
    },
  ]
  return (
    <div className="p-[30px]">
      <div className="text-center w-[100%]">
        {state.data.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${state.data.profile_path}`}
            alt=""
            className="rounded-lg  relative w-[300px] md:w-[300px] lg:w-[300px]"
          />
        ) : (
          <div className="h-[400px]">
            <img
              src="https://wallpaperaccess.com/full/7074756.jpg"
              alt=""
              className="rounded-lg  relative w-[300px] md:w-[300px] lg:w-[300px]"
            />
          </div>
        )}
      </div>
      <div className="my-5">
        {socialList.map((social, index) => {
          if(social){
            return (
              <Tippy content={<div>{social.title}</div>} className="mr-4 mb-2" key={index}>
                <span>
                  <a href={`${social.href}${social.link}`}>{social.icon}</a>
                </span>
              </Tippy>
            )
          }
        })}
      </div>
      <div className="">
        <h4 className="font-medium text-2xl pb-4">Personal Info</h4>
        {info.map((item, index) => {
          return (
            <div key={index}>
              <div className="my-4">
                <p className=" font-bold">{item.title}</p>
                <p className="">{item.nd}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div>
        <Button />
      </div>
      <div className="mt-8">
        <i className="fa-regular fa-keyboard text-[20px] text-gray-500"></i>{" "}
        <span className="text-gray-500 hover:text-[#5cdbc3]">Keyboard Shortcuts</span>
      </div>
      <div className="my-5">
        <i className="fa-solid fa-bug text-[20px] text-gray-500"></i>{" "}
        <span className="text-gray-500 hover:text-[#5cdbc3]">Keyboard Shortcuts</span>
      </div>
    </div>
  )
}

const LoadingInfor = () => {
  return <LoadingInformations />
}
Information.LoadingInfor = LoadingInfor
export default Information
