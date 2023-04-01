import React, { useEffect } from "react"
import "./Navbar.css"
import { useState } from "react"
import { Popover } from "@headlessui/react"
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline"
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid"
import { Link } from "react-router-dom"
import axios from "axios"

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
]

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Navbar = () => {
  useEffect(() => {
    const loadImages = async () => {
      const listTemp = await axios.get()
    }
    loadImages()
  })
  return (
    <div>
      <header className="bg-white" style={{ backgroundColor: "#032541" }}>
        <nav className="mx-auto  flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex">
            <Link to="/" className="-m-1.5 p-1.5">
              <img
                style={{ width: 154, heith: 20 }}
                className="h-8 w-auto"
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt=""
              />
            </Link>

            <div className=" ml-11 mt-1 cursor-pointer">
              <Popover.Group className="hidden lg:flex lg:gap-x-7 " style={{ float: "left" }}>
                <Link className="movies text-sm  font-semibold leading-6 text-gray-900 " style={{ color: "white" }}>
                  Movies
                  <div className=" movie-list bg-white text-black w-[173.078px]   top-[50px] left-[260px]  rounded box-content absolute z-10 ">
                    <ul>
                      <Link to="/movie-list" className="px-3 py-1">
                        Popular
                      </Link>
                      <li className="px-3 py-1">Now Playing</li>
                      <li className="px-3 py-1">Upcoming</li>
                      <li className="px-3 py-1">Top Rated</li>
                    </ul>
                  </div>
                </Link>
                <a className="movies  text-sm  leading-6 text-gray-900 " style={{ color: "white" }}>
                  TV shows
                  <div className="movie-list bg-white text-black w-[173.078px]   top-[50px] left-[340px]  rounded box-content absolute z-10 ">
                    <ul>
                      <li className="px-3 py-1">Popular</li>
                      <li className="px-3 py-1">Airing Today</li>
                      <li className="px-3 py-1">On TV</li>
                      <li className="px-3 py-1">Top Rated</li>
                    </ul>
                  </div>
                </a>
                <a href="#" className="movies text-sm  leading-6 text-gray-900 " style={{ color: "white" }}>
                  People
                  <div className="movie-list bg-white text-black w-[173.078px]   top-[50px] left-[420px]  rounded box-content absolute z-10 ">
                    <ul>
                      <li className="px-3 py-1">Popular</li>
                    </ul>
                  </div>
                </a>
                <a href="#" className="movies text-sm  leading-6 text-gray-900 " style={{ color: "white" }}>
                  More
                  <div className="movie-list bg-white text-black w-[173.078px]   top-[50px] left-[500px]  rounded box-content absolute z-10 ">
                    <ul>
                      <li className="px-3 py-1">Disscusions</li>
                      <li className="px-3 py-1">LeaderBoard</li>
                      <li className="px-3 py-1">Support</li>
                      <li className="px-3 py-1">API</li>
                    </ul>
                  </div>
                </a>
              </Popover.Group>
            </div>
          </div>
          <div className="hidden lg:flex ">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900  " style={{ color: "white" }}>
              <i className="fa-solid fa-plus  "></i>
            </a>

            <a
              href="#"
              className="text-sm  hover:bg-white font-semibold ml-8 leading-6 px-[5px] "
              style={{
                color: "white",
                border: "solid 1px white",
                borderRadius: "3px",
              }}
            >
              <p className="hover:text-black">En</p>
            </a>

            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 ml-8 " style={{ color: "white" }}>
              Login
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 ml-8 " style={{ color: "white" }}>
              Join TMDB
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 ml-8" style={{ color: "white" }}>
              <i className="fa-solid fa-magnifying-glass text-blue-500 fa-xl"></i>
            </a>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
