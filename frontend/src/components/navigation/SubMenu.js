import React from "react";
import { NavLink } from "react-router-dom";

const SubMenu = ({ menu }) => {
  return (
    <ul className='bg-white border border-t-4 border-[#cccccc] rounded-md absolute shadow-xl w-36 top-full right-0'>
      {menu.map((item) => (
        <li className='border-b border-[#cccccc]'>
          <NavLink
            className='py-2 px-4 block font-semibold hover:text-[#4682B4] transition'
            to={item.url}>
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
