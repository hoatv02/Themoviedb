import React from "react"

const Tab = (tabs) => {
  const openCity = (e, btn) => {
    var i, tabcontent, tablinks
    tablinks = document.getElementById(btn)
    tabcontent = document.getElementsByClassName(tabs.title)
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none"
    }
    tablinks.style.display = "block"
  }
  return (
    <div className="border-box border-b-[2px]">
      <div className="flex box-border w-full items-baseline">
        <h3 className="inline-block mr-[50px] font-bold">{tabs.title}</h3>

        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
          {tabs.tabs.map((button) => (
            <li className="mr-2" key={button.name}>
              <button className="tablinks inline-block p-4" id="contacts-tab" onClick={(e) => openCity(e, button.name)}>
                {button.name} <span className="font-semibold opacity-60">{button.count}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {tabs.tabs.map((button, index) => {
        return index === 0 ? (
          <div
            id={button.name}
            className={tabs.title}
            style={{ display: "block", padding: "6px 12px", borderTop: "none" }}
          >
            <div>{button.content}</div>
          </div>
        ) : (
          <div
            id={button.name}
            className={tabs.title}
            style={{ display: "none", padding: "6px 12px", borderTop: "none" }}
          >
            <div>{button.content}</div>
          </div>
        )
      })}
      <a href="#">
        <h3 className="inline-block mt-[30px] font-bold pb-5">{tabs.buttonGoto}</h3>
      </a>
    </div>
  )
}

export default Tab
