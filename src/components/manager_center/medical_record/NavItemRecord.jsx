/* eslint-disable react/prop-types */
import { useState } from "react"
import { Link } from "react-router-dom"


const NavItemRecord = ({array}) => {
  const [active,setActive] = useState(array[0].name)
  const handleState = (name) => {
    setActive(name)
  }

  return (
    <nav >
        <div className="flex flex-grow">
            {array.map((precedent,index)=>{
                return <>
                        <Link key={index} className={`text-black transition duration-300 ml-[3%]
                              ${active === precedent.name && "text-titleSideColor font-bold "}`} 
                              onClick={()=> handleState(precedent.name)}
                              to={precedent.path} 
                        >
                            <div className="flex">
                              <img src={precedent.icon} className="ml-3"/>
                              <span>{precedent.name}</span>
                            </div>
                            {active === precedent.name && <div className="border-t-2 border-titleSideColor my-3 "></div>}
                        </Link>
                </>
            })}
          </div>
          <div className="-mt-3 w-[50%] mb-6">
          <div className="border-t border-b-gray-700"></div>
          </div>
    </nav>
    
  )
}

export default NavItemRecord