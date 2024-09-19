import React from 'react';

const HeadDivider: React.FC = () => {
  return (
    <footer className="bg-[#0a0e14] text-[#7bd4ff] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center border-t border-[#7bd4ff] pt-4">
          {/* Left empty columns for spacing */}
          <div className="border border-[#7bd4ff]"></div>

          {/* Footer content in the center */}
          <div className="text-center">
            <h2 className="text-lg font-semibold">Footer</h2>
          </div>

          {/* Scroll to top button (right side) */}
          <div className="flex justify-end">
            <a href="#" className="text-[#7bd4ff] hover:text-white">
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
      </div>
    </footer>
  );
};

export default HeadDivider;
