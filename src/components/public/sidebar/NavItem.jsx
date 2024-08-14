/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./style.css"
function NavItem({ name, icon, onClick, isActive, href, totalOrdersCount }) {
  const height = window.innerHeight;
  return (
    <li className="relative">
      <Link
        onClick={onClick}
        to={href}
        className={`flex items-center ${height > 650 ?(height > 700 ? "p-2":"px-2 py-[6px]"):"px-2 py-[5px]"} text-titleSideColor rounded-l-md rounded-r-3xl text-base  font-primaryRegular group ${
          isActive ? "bg-bgSideButton" : "bg-white hover:bg-gray-100"
        }`}
      >
        <img
          className="w-5 h-5 mr-1"
          src={icon}
          alt={name}
        />
        <span className="ms-3">{name}</span>
        {totalOrdersCount > 0 && (
          <span className="absolute top-0 right-0 mt-1 mr-3 bg-red-500 text-white rounded-full text-xs px-2">
            {totalOrdersCount}
          </span>
        )}
      </Link>
    </li>
  );
}

export default NavItem;
