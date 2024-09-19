import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.svg";
import ArrowUpLeft from "@/assets/arrow-up-left.svg";

const index = () => {
  return (
    <div className="border-b-2">
      <div className="flex justify-between items-center mx-36 pr-8 border-x-2">
        <Logo className="" />
        <div className="flex text-[#38E1FF]">
          <div className="px-4">Architecture</div>
          <div className="px-4">Features</div>
          <div className="px-4">Roadmap</div>
          <div className="flex px-4">
            Docs <ArrowUpLeft />
          </div>
        </div>
        <div className="flex">
          <Link href="https://litepaper.nexusfi.xyz/">

            <Button
              className="px-4 py-2 rounded-l bg-gradient-to-b from-[#3846FF] to-[#16A4C1] font-bold"
              // TODO: tailwindcss DOES NOT SUPPORT Custom boxShadow (DROP SHADOW)
              // style={{
              //   boxShadow:
              //     "0 4px 6px -1px rgba(67, 223, 255, 0.5), 0 2px 4px -1px rgba(67, 223, 255, 0.5)",
              // }}
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
