import React from "react"

const Footer = () => {
  return (
    <div className="">
      <div
        style={{
          backgroundColor: "#032541",
        }}
        className="grid grid-cols-[2fr,1fr,1fr,1fr,1fr] gap-8 px-[200px] p-[70px]"
      >
        <div className="mb-6 md:mb-0 flex flex-col ">
          <a className=" ">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="FlowBite Logo"
              className=" h-[94px]  w-full mt-[-30px]"
            />
          </a>
          <a href="#" className=" font-bold leading-6  mt-[50px]   text-center mr-10  ">
            <p
              style={{
                color: "#01c4ee",
                border: "solid 1px white",
                borderRadius: "3px",
                backgroundColor: "white",
                padding: "8px 12px",
                marginRight: "19px",
              }}
            >
              JOIN THE COMMUNITY
            </p>
          </a>
        </div>
        <div>
          <h2 className="1 text-xl text-white uppercase font-bold ">THE BASICS</h2>

          <ul className="text-white dark:text-gray-400">
            <li className="1">
              hover
              <a href="" className="hover:pointer">
                About TMDB
              </a>
            </li>

            <li className="1">
              <a href="" className="hover:pointer">
                Contact US
              </a>
            </li>
            <li className="1">
              <a href="" className="hover:pointer">
                Support Forums
              </a>
            </li>
            <li className="1">
              <a href="h" className="hover:pointer">
                API
              </a>
            </li>
            <li className="1">
              <a href="" className="hover:pointer">
                System Status
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="1 text-xl text-white uppercase font-bold ">GET INVOLVED</h2>
          <ul className="text-white dark:text-gray-400">
            <li className="1">
              <a href="" className="hover:pointer">
                Contribution Bible
              </a>
            </li>
            <li className="1">
              <a href="" className="hover:pointer">
                Add New Movie
              </a>
            </li>
            <li className="1">
              <a href="" className="hover:pointer">
                Add New TV Show
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="1 text-xl text-white uppercase font-bold ">COMMUNITY</h2>
          <ul className="text-white dark:text-gray-400">
            <li className="1">
              <a href="" className="hover:pointer">
                Guidelines
              </a>
            </li>
            <li className="1">
              <a href="" className="hover:pointer">
                Discussions
              </a>
            </li>
            <li className="1">
              <a href="" className="hover:pointer">
                Leaderboard
              </a>
            </li>
            <li className="1">
              <a href="" className="hover:pointer">
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="1 text-xl text-white uppercase font-bold ">LEGAL</h2>
          <ul className="text-white dark:text-gray-400">
            <li className="1">
              <a href="" className="hover:pointer">
                Terms of Use
              </a>
            </li>
            <li className="1">
              <a href="" className="hover:pointer">
                API Terms of Use
              </a>
            </li>
            <li className="1">
              <a href="" className="hover:pointer">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
