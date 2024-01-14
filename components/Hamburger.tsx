"use client";

import { useState } from "react";
import { PiHamburger } from "react-icons/pi";
import Sidebar from "./Sidebar";

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="flex space-x-2 items-center cursor-pointer relative z-10"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`duration-300 select-none highlight relative md:block hidden ${
            open ? "opacity-0 translate-x-5" : "translate-x-0"
          }`}
        >
          Open
        </span>
        <PiHamburger
          className={`w-8 h-8 text-ocean ${
            open ? "-rotate-90" : ""
          } duration-300 ease-out`}
        />
        <span
          className={`duration-300 select-none highlight relative md:block hidden ${
            !open ? "opacity-0 -translate-x-5" : "translate-x-0"
          }`}
        >
          Close
        </span>
      </div>
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default Hamburger;
