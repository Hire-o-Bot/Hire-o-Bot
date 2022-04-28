import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
  const menu = [
    {
      text: "Log in",
      button: false,
      submenu: [
        {
          text: "Candidate",
          url: "/login/candidate",
        },
        {
          text: "Company",
          url: "/login/company",
        },
      ],
    },
    { text: "Register", url: "/register", button: true, submenu: [] },
  ];
  return (
    <header className='bg-white fixed top-0 left-0 w-full border-b border-[#cccccc] py-5'>
      <div className='w-[85%] mx-auto flex justify-between items-center'>
        <div>
          <h1 className='text-4xl font-black text-[#001E2B]'>HIRE-O-BOT</h1>
        </div>
        <Menu menu={menu} />
      </div>
    </header>
  );
};

export default Navbar;
