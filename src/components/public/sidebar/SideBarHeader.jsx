/* eslint-disable react/prop-types */

const SideBarHeader = ({header}) => {
  return (
    <>
            <img className="rounded-full w-11 h-11" src={header.icon}></img>
            <p className="font-primaryBold text-xl">{header.name}</p>
            {header.title != "" && <p className="mt- text-base font-primaryRegular">{header.title}</p>}
    </>
  )
}

export default SideBarHeader