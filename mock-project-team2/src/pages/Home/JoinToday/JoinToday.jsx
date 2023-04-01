import React from "react"

const JoinToday = () => {
  return (
    <div className="grid grid-cols-[2fr,1fr] bg-[url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces_filter(duotone,190235,ad47dd)/lMnoYqPIAVL0YaLP5YjRy7iwaYv.jpg')] relative  h-[300px] bg-full  bg-cover bg-center bg-no-repeat text-white  flex items-center gap-8 pl-6">
      <div className="p-6">
        <div className="pl-10">
          <div className="">
            <h2 className="font-bold text-3xl ">Join Today</h2>
          </div>
          <p className="py-5">
            Get access to maintain your own <em>custom personal lists</em>,<em>track what youve seen</em> and search and
            filter for
            <em>what to watch next</em>—regardless if its in theatres, on TV or available on popular streaming services
            like .
          </p>
          <button className="   item-center hover:text-black   rounded text-md h-[48px] font-bold w-[100px] bg-[#805be7] ">
            Sign Up
          </button>
        </div>
      </div>
      <div className="mt-[100px] px-10">
        <ul className="list-disc">
          <li>Enjoy TMDB ad free</li>
          <li>Maintain a personal watchlist</li>
          <li>Filter by your subscribed streaming services and find something to watch</li>
          <li>Log the movies and TV shows you &apos;ve seen</li>
          <li>Build custom lists</li>
          <li>Contribute to and improve our database</li>
        </ul>
      </div>
    </div>
  )
}

export default JoinToday
