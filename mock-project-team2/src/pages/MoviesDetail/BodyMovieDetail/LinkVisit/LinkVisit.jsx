import React from "react"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"

const LinkVisit = () => {
  const iconClass = [
    {
      icon: "fa-brands fa-facebook",
      content: "Visit Facebook",
    },
    {
      icon: "fa-brands fa-twitter",
      content: "Visit Twitter",
    },
    {
      icon: "fa-brands fa-instagram",
      content: "Visit Instagram",
    },
    {
      icon: "fa-solid fa-link",
      content: "Visit Homepage",
    },
  ]
  return (
    <div className="flex gap-x-6">
      {iconClass.map((icon) => (
        <Tippy placement="top" content={icon.content} key={icon.icon}>
          <div className="flex text-[1.5em]">
            <i className={icon.icon}></i>
          </div>
        </Tippy>
      ))}
    </div>
  )
}

export default LinkVisit
