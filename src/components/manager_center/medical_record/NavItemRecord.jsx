/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link , useLocation } from "react-router-dom";


const NavItemRecord = ({ array }) => {
  const [activeItem, setActiveItem] = useState(array[0].name);
  let location = useLocation()

  useEffect(() => {
    if(location.pathname.includes("surgicalHistory"))
      {
        setActiveItem(array[1].name);
      }else if(location.pathname.includes("pathologicalHistory")){
        setActiveItem(array[0].name);
      }else if(location.pathname.includes("pharmacologicalHistory")){
        setActiveItem(array[2].name)
      }else {
        setActiveItem(array[0].name);
      }
  }, [location.pathname,array]);


  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <nav>
      <div className="flex flex-grow">
        {array.map((precedent, index) => (
          <Link
            key={index}
            className={`text-black font-primaryRegular transition duration-300 ml-[3%]
              ${activeItem === precedent.name && "text-titleSideColor text-lg font-primaryBold "}`}
            onClick={() => handleItemClick(precedent.name)}
            to={precedent.path}
          >
            <div className="flex">
              <img src={precedent.icon} className="ml-3" />
              <span>{precedent.name}</span>
            </div>
            {activeItem === precedent.name && <div className="border-t-2 border-titleSideColor my-3 "></div>}
          </Link>
        ))}
      </div>
      <div className="-mt-3 w-[30%] mb-6">
        <div className="border-t border-b-gray-700"></div>
      </div>
    </nav>
  );
};

export default NavItemRecord;
