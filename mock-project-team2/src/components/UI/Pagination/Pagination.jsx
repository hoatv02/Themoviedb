import React from "react"
import PropTypes from "prop-types"

const Pagination = ({ page, totalPage, handleSetPage }) => {
  if (totalPage === 1) return <></>

  const array = []
  if (totalPage <= 13) {
    for (let index = 1; index <= totalPage; index++) {
      array.push(index)
    }
  } else if (page + 7 > totalPage) {
    array.push(1, 2, "...1")
    const start = page - 3 < totalPage - 7 ? page - 3 : totalPage - 7
    for (let index = start; index <= totalPage; index++) {
      array.push(index)
    }
  } else if (page - 8 < 0) {
    const end = page + 3 > 7 ? page + 3 : 7
    for (let index = 1; index <= end; index++) {
      array.push(index)
    }
    array.push("...2", totalPage - 1, totalPage)
  } else {
    array.push(1, 2, "...1")
    for (let index = page - 3; index <= page + 3; index++) {
      array.push(index)
    }
    array.push("...2", totalPage - 1, totalPage)
  }

  const displayPrevious = () => {
    return page !== 1 ? (
      <li>
        <a
          className="font-semibold cursor-pointer relative block rounded bg-transparent py-2 px-3 text-sm transition-all duration-300 hover:bg-neutral-100"
          onClick={() => {
            handleSetPage(--page)
          }}
        >
          <i className="mr-[5px] fa-solid fa-arrow-left"></i>Previous
        </a>
      </li>
    ) : (
      <></>
    )
  }

  const displayNext = () => {
    return page !== totalPage ? (
      <li>
        <a
          className="font-semibold cursor-pointer relative block rounded bg-transparent py-2 px-3 text-sm transition-all duration-300 hover:bg-neutral-100"
          onClick={() => {
            handleSetPage(++page)
          }}
        >
          Next
          <i className="ml-[5px] fa-sharp fa-solid fa-arrow-right"></i>
        </a>
      </li>
    ) : (
      <></>
    )
  }

  return (
    <div className="flex justify-center w-[80%]">
      <nav aria-label="Page navigation example max-w-[500px]">
        <ul className="list-style-none flex">
          {displayPrevious()}
          {array.map((e) => {
            return e === page ? (
              <li key={e} aria-current="page">
                <a className="font-semibold relative block rounded bg-primary-100 py-1.5 px-3 border border-black transition-all duration-300">
                  {e}
                </a>
              </li>
            ) : e === "...1" || e === "...2" ? (
              <li key={e}>
                <a className="font-semibold relative block rounded bg-transparent py-1.5 px-3 transition-all duration-300 hover:bg-neutral-100">
                  ...
                </a>
              </li>
            ) : (
              <li key={e}>
                <a
                  className="font-semibold cursor-pointer relative block rounded bg-transparent py-1.5 px-3 transition-all duration-300 hover:bg-neutral-100"
                  onClick={() => {
                    handleSetPage(e)
                  }}
                >
                  {e}
                </a>
              </li>
            )
          })}
          {displayNext()}
        </ul>
      </nav>
    </div>
  )
}

Pagination.propTypes = {
  page: PropTypes.number,
  totalPage: PropTypes.number,
  handleSetPage: PropTypes.func,
}

export default Pagination
