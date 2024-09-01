"use client"
import React from 'react'
import Image from "next/image"
import { Typewriter } from "react-simple-typewriter";
import Logo1 from "./Logo1.png" 
import Logo2 from "./Logo2.png" 

const Hero : React.FC = () => {
  return (
    <div className="border-b-2">
      <div className="mx-36 relative border-x-2 bg-gradient-to-r from-[#F0FDF4] to-[#F0FDF4] h-screen items-center justify-center ">
        {/* Background Coins */}
        <div className="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32 opacity-20">
          <Image src={Logo1} alt="Coin" />
        </div>
        <div className="absolute bottom-10 right-10 w-20 h-20 md:w-32 md:h-32 opacity-20">
          <Image src={Logo2} alt="Coin" />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight">
            Restake your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
              NIBI's
            </span>
            <br /> to Earn_
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Nexus Finance enables seamless restaking and validation on the
            Nibiru platform, empowering users to secure, validate, and earn.
          </p>

          <a
            href="#"
            className="inline-block mt-8 px-8 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-lg"
          >
            Stake &nbsp; ↗
          </a>
        </div>
      </div>
    </div>
  );
}
                    
export default Hero 


   