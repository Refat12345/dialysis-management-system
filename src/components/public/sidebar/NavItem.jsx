/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function NavItem({ name, icon, onClick, isActive, href }) {
  return (
    <li>
      <Link
        onClick={onClick}
        to={href}
        className={`flex items-center p-2 text-titleSideColor rounded-l-md rounded-r-3xl text-base font-normal group ${
          isActive ? "bg-bgSideButton" : "bg-white hover:bg-gray-100"
        }`}
      >
        <img
          className="w-5 h-5 mr-1"
          src={icon}
          alt={name}
          style={{ color: "green" }}
        />
        <span className="ms-3">{name}</span>
      </Link>
    </li>
  );
}

export default NavItem;
