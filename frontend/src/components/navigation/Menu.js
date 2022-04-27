import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ menu }) => {
  return (
    <ul className='flex items-center'>
      {menu &&
        menu.length &&
        menu.map((item) => (
          <MenuItem
            url={item.url}
            text={item.text}
            button={item.button}
            submenu={item.submenu}
          />
        ))}
    </ul>
  );
};

export default Menu;
