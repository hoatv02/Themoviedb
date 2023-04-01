import React from "react"
import PropTypes from "prop-types"

const SearchResult = ({ typeView, handleTypeView, total, handleSetPage }) => {
  const filter = [
    { key: "movie", value: "Movies" },
    { key: "tv", value: "TV Shows" },
    { key: "person", value: "People" },
    { key: "collection", value: "Collections" },
    { key: "company", value: "Companies" },
    { key: "keyword", value: "Keywords" },
    { key: "network", value: "Networds" },
  ]

  const handleClick = (value) => {
    handleSetPage(1)
    handleTypeView(value)
  }

  const select = (e, index) => {
    return e.key === typeView ? (
      <li
        key={e.key}
        className="bg-[#00000014] inline-flex justify-between w-full px-[20px] py-[10px] text-base leading-[1em] hover:bg-[#00000014]"
      >
        <a className="font-normal cursor-pointer" title={e.value} alt={e.value} onClick={() => handleClick(e.key)}>
          {e.value}
        </a>
        <span className="font-mono inline-flex items-center font-light text-[0.8em] bg-[#00000014] px-[10px] py-0 rounded-[8px]">
          {total[index]}
        </span>
      </li>
    ) : (
      <li
        key={e.key}
        className="inline-flex justify-between w-full px-[20px] py-[10px] text-base leading-[1em] hover:bg-[#00000014]"
      >
        <a className="font-normal cursor-pointer" title={e.value} alt={e.value} onClick={() => handleClick(e.key)}>
          {e.value}
        </a>
        <span className="font-mono inline-flex items-center font-light text-[0.8em] bg-[#00000014] px-[10px] py-0 rounded-[8px]">
          {total[index]}
        </span>
      </li>
    )
  }

  return (
    <div className="pl-0 pr-0 justify-end min-w-[260px] w-[260px] flex flex-wrap">
      <div className="m-0 box-border min-w-[260px] w-full border border-gray-300 rounded-xl overflow-hidden">
        <h3 className="flex items-center justify-between m-0 font-bold p-[20px] text-white bg-[#01b4e4]">
          Search Results
        </h3>
        <div>
          <ul className="py-[8px] list-none">
            {filter.map((e, index) => {
              return select(e, index)
            })}
          </ul>
        </div>
      </div>
      <p className="mb-0 mt-[20px] text-[#666] text-base w-full">
        <span className="relative top-[6px] pr-[5px] inline-flex items-center justify-center min-w-1 min-h-1 w-6 h-6 bg-center bg-no-repeat text-inherit bg-[url('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-636-circle-info-06837a451a09552349b182d84ae84f26308efee8f7e8ddca255bd5dbc4a66ea4.svg')]"></span>
        Tip: You can use the &apos;y:&apos; filter to narrow your results by year. Example: &apos;star wars
        y:1977&apos;.
      </p>
    </div>
  )
}

SearchResult.propTypes = {
  typeView: PropTypes.string,
  handleTypeView: PropTypes.func,
  total: PropTypes.any,
  handleSetPage: PropTypes.func,
}
export default SearchResult
