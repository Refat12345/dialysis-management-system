/* eslint-disable react/prop-types */

const SideBarHeader = ({header}) => {
  return (
    <>
            <img className="rounded-full w-11 h-11" src={header.icon}></img>
            <p  dir="rtl" className="font-primaryBold text-lg text-center whitespace-nowrap overflow-hidden text-ellipsis w-[99.9%]">{header.name}</p>
            {header.title != "" && <p dir="rtl" className="mt- text-base text-center font-primaryRegular whitespace-nowrap overflow-hidden text-ellipsis w-[99.9%]">{header.title}</p>}
    </>
  )
}

export default SideBarHeader