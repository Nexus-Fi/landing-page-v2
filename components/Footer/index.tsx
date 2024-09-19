import React from "react";
import Logo from "@/assets/logo.svg";
import HeadDivider from "./HeadDivider";

const Footer: React.FC = () => {
  return (
    <footer className="text-[#38E1FF] opacity-70 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left empty columns for spacing */}
          <div></div>

          {/* Footer content in the center */}
          <div>
            <div className="text-center">
              <h2 className="text-lg font-semibold text-[#6c7987]">Footer</h2>
            </div>
          </div>

          {/* Scroll to top button (right side) */}
          <div className="flex justify-end">
            <a href="#" className="text-[#38E1FF] hover:text-[#7bd4ff]">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-8 md:flex md:justify-between">
          {/* Logo and description */}
          <div className="text-center md:text-left">
            <Logo />
            <p className="mt-2 text-sm text-[#38E1FF] max-w-xs">
              Nexus Finance enables seamless restaking and validation on the
              Nibiru platform, empowering users to secure, validate, and earn.
            </p>
          </div>

          {/* Resources links */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-sm font-semibold text-[#38E1FF]">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-[#7bd4ff]">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#7bd4ff]">
                  Stake
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#7bd4ff]">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#7bd4ff]">
                  Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-sm font-semibold text-[#38E1FF]">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-[#7bd4ff]">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#7bd4ff]">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#7bd4ff]">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#7bd4ff]">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 text-right">
          <p className="text-xs text-[#6c7987]">©Nexusfi 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
