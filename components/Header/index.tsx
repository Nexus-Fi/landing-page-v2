import React from 'react'
import logo from "./full-brand.png"
import Image from "next/image";


const index = () => {
  return (
    <div className="border-b-2">
      <nav className="mx-36 justify-between  items-center flex border-x-2 p-4">
        <div className="p-0  ">
          <Image src={logo} alt="logo" className="h-[120px] w-auto "  />
         
        </div>

        <div className="hidden md:flex space-x-8 text-lg font-medium items-center">
          <a href="#" className="hover:text-blue-600">
            Architecture
          </a>
          <a href="#" className="hover:text-blue-600">
            Features
          </a>
          <a href="#" className="hover:text-blue-600">
            Roadmap
          </a>
          <a href="#" className="hover:text-blue-600 flex ">
            Docs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 ml-1 rotate-[310deg]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
              />
            </svg>
          </a>
        </div>

        <div className="flex items-center hidden md:block">
          <button className=" px-6 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300">
            {" "}
            Launch App{" "}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default index