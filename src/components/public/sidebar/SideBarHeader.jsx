/* eslint-disable react/prop-types */

import { useSelector } from "react-redux"

const SideBarHeader = ({header}) => {
  const user = useSelector((state)=>state.user)
  return (
    <>
            <img className={`rounded-full ${user.role === "secretary" ? "w-14 h-14" : "w-11 h-11" }`} src={header.icon}></img>
            <p  dir="rtl" className="font-primaryBold text-lg text-center whitespace-nowrap overflow-hidden text-ellipsis w-[99.9%]">{header.name}</p>
            {header.title != "" && <p dir="rtl" className="mt- text-base text-center font-primaryRegular whitespace-nowrap overflow-hidden text-ellipsis w-[99.9%]">{header.title}</p>}
    </>
  )
}

export default SideBarHeader