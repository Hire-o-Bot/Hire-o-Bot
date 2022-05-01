import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import { IconTriangle } from "../icons";

const MenuItem = ({ url, text, button = false, submenu }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className='ml-3 relative' onClick={() => setOpen(!open)}>
      {submenu && submenu.length > 0 ? (
        <Fragment>
          <div
            className={`inline-block py-2.5 px-6 font-semibold cursor-pointer hover:text-[#4682B4] transition ${
              button
                ? "border border-[#001E2B] bg-[#00ed64] text-[#001E2B] hover:bg-[#001E2B] hover:text-white transition rounded-md"
                : ""
            }`}>
            <span>{text}</span>
            {submenu && submenu.length > 0 && (
              <span className='w-2.5 inline-block ml-3'>
                <IconTriangle fill='#cccccc' />
              </span>
            )}
          </div>
          {open && submenu && submenu.length > 0 && <SubMenu menu={submenu} />}
        </Fragment>
      ) : (
        <div>
          <Link
            className={`inline-block py-2.5 px-6 font-semibold hover:text-[#4682B4] transition ${
              button
                ? "border border-[#001E2B] bg-[#00ed64] text-[#001E2B] hover:bg-[#001E2B] hover:text-white transition rounded-md"
                : ""
            }`}
            to={url}>
            {text}
          </Link>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
