import React, { useEffect, useRef, useState } from "react"
import Tippy from "@tippyjs/react/headless"
import PropTypes from "prop-types"
import PopperSearch from "../Popper/PopperSearch"
import { useDispatch, useSelector } from "react-redux"
import { SearchOptions } from "../../../Api/Common"
import Wrapper from "../Popper/Popper"
import useDebounce from "../../../hook/useDebounce"

const SearchInput = ({ query, handleSetQuery, handleTypeView }) => {
  const [searchQuery, setSearchQuery] = useState(query)
  const search = useSelector((state) => state.search.searchOptions)
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const show = () => setVisible(true)
  const hide = () => setVisible(false)

  const inputRef = useRef()
  const dispatch = useDispatch()

  const debounce = useDebounce(searchQuery, 800)

  useEffect(() => {
    if (!debounce?.trim()) {
      hide()
      return
    }
    const search = async () => {
      setLoading(true)
      await dispatch(SearchOptions({ query: debounce }))
      setLoading(false)
    }

    search()
  }, [debounce])

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSetQuery(searchQuery)
      setVisible(false)
    }
  }
  const handleSearchQuery = (e) => {
    setSearchQuery(e)
  }

  return (
    <div className="min-w-[60%] w-full mx-auto bg-white max-w-[1320px] relative">
      <Tippy
        render={(attrs) => {
          return (
            <div tabIndex="-1" {...attrs} className="max-w-[1320px] w-[1300px]">
              <Wrapper>
                <PopperSearch
                  query={searchQuery}
                  data={search}
                  hide={hide}
                  handleTypeView={handleTypeView}
                  handleSetQuery={handleSetQuery}
                  handleSearchQuery={handleSearchQuery}
                />
              </Wrapper>
            </div>
          )
        }}
        visible={visible}
        onClickOutside={hide}
        interactive="true"
        placement="bottom"
      >
        <div
          className="border-solid border-y border-slate-300 flex items-center w-full justify-start"
          onClick={visible ? hide : show}
        >
          <i className="fa-solid fa-magnifying-glass ml-[45px]"></i>
          <input
            ref={inputRef}
            value={searchQuery}
            onChange={(e) => {
              show()
              setSearchQuery(e.target.value)
            }}
            onKeyDown={handleKeyDown}
            onFocus={show}
            className=" focus:outline-none pt-[10px] pb-[10px] leading-[24px] pl-[10px] placeholder:italic placeholder:text-slate-400 w-[90%]"
            placeholder="Search for a movie, tv show, person... "
          />
          <button className="mr-[40px]">
            {searchQuery && !loading && (
              <i
                className="fa-solid fa-xmark"
                onClick={() => {
                  setSearchQuery("")
                  inputRef.current.focus()
                }}
              ></i>
            )}
            {loading && <i className="fa-solid fa-spinner animate-spin"></i>}
          </button>
        </div>
      </Tippy>
    </div>
  )
}

SearchInput.propTypes = {
  query: PropTypes.string,
  handleSetQuery: PropTypes.func,
  handleTypeView: PropTypes.func,
  typeView: PropTypes.string,
}

export default SearchInput
