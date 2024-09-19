"use client";
import React, { useState } from "react";
import Airtable from "airtable";
import toast from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";
import Logo from "@/assets/logo.svg";

const style = {
  section:
    "h-auto min-h-[100px] px-4 sm:px-6 md:px-[80px] lg:px-[100px] xl:px-[156px] py-0 border-[#16a4c1] flex flex-col items-center gap-2.5 relative self-stretch w-full border-b [border-bottom-style:solid]",
  box: "flex items-center justify-around flex-1 self-stretch w-full grow border-r [border-right-style:solid] border-l [border-left-style:solid] border-[#16a4c1]",
};

const HomeEarlyAccess = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [wallet, setWallet] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleWalletChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWallet(e.target.value);
  };

  const handleApply = () => {
    setLoading(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      setLoading(false);
      return;
    }
    // console.log(email, wallet);
    var base = new Airtable({
      apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
    }).base("app86Ej0PwJtEE44K");

    base("Table 1").create(
      { Email: email, Address: wallet },
      function (err, record) {
        if (err) {
          toast.error("Error submitting application");
          setLoading(false);
          return;
        }
        toast.success("Application submitted successfully");
        setEmail("");
        setWallet("");
        setLoading(false);
        console.log(record?.getId());
      }
    );
  };

  return (
    <div className="flex flex-col items-start">
      {/* navbar */}
      <div className={style.section}>
        <div className={style.box}>
          <div className="flex items-center justify-between px-6 py-2 flex-1">
            <Logo className="" />
            <div className="inline-flex items-center gap-[84px] flex-[0_0_auto]">
              {/* <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-[#38e1ff] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Architecture
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-brand-2 text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Features
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-brand-2 text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Roadmap
              </div> */}
              <div className="inline-flex items-center justify-center gap-1">
                <div className="text-xl">
                  <a href="https://litepaper.nexusfi.xyz/">Docs</a>
                </div>
                <img
                  className="w-6 h-6"
                  alt="Arrow up left"
                  src="https://c.animaapp.com/Sfj8S5ST/img/arrow-up-left.svg"
                />
              </div>
            </div>
            {/* <button className="all-[unset] box-border inline-flex px-8 py-2.5 mr-[-1.00px] items-center justify-center gap-2.5 relative flex-[0_0_auto] rounded-[1.16px] overflow-hidden border border-solid border-transparent shadow-[0px_0px_250px_#42dfff] [border-image:linear-gradient(to_bottom,rgb(22,164,193),rgb(56,225.15,255))_1] [background:linear-gradient(180deg,rgb(56,70,255)_0%,rgb(22,164,193)_100%)]">
              <div className="relative w-fit mt-[-0.50px] [font-family:'Neue_Haas_Grotesk_Display_Pro-65Medium',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Launch App
              </div>
            </button> */}
          </div>
        </div>
      </div>

      {/* hero */}
      <div className={style.section}>
        <div className="flex-col justify-center gap-4 px-4 py-[100px] self-stretch w-full flex-[0_0_auto] bg-[#38e1ff08] border-r [border-right-style:solid] border-l [border-left-style:solid] flex items-center relative border-[#38e1ff]">
          <div className="flex flex-wrap items-center justify-center gap-[25px_25px] relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative w-fit [font-family:'VP_Pixel-Regular',Helvetica] font-normal text-collection-1-brand-2 md:text-[80px] lg:text-[80px] xl:text-[80px] text-4xl text-center tracking-[0] leading-[normal]">
              <span className="[font-family:'VP_Pixel-Regular',Helvetica] font-normal  md:text-[100px] lg:text-[100px] xl:text-[100px] text-5xl  tracking-[0]">
                R
              </span>
              <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                estake your
              </span>
            </p>
            <div className="relative w-fit [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-collection-1-brand-2 md:text-[80px] lg:text-[80px] xl:text-[80px] text-4xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
              {" "}
              <b className="text-[#38e1ff]">
                <span>
                  <Typewriter
                    words={["BTC", "ETH", "ATOM", "NIBI"]}
                    loop={20}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={70}
                    delaySpeed={2000}
                  />
                </span>
              </b>
            </div>
          </div>
          <p className="relative py-8 w-fit [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-[normal]">
            {" "}
            Nexus Finance enables seamless restaking and validation, empowering
            users to secure, validate, and earn.
          </p>
          <a href="https://litepaper.nexusfi.xyz/">
            <button className="all-[unset] box-border inline-flex px-[72px] py-2.5 mb-[-1.00px] items-center justify-center gap-2.5 relative flex-[0_0_auto] rounded-[1.16px] overflow-hidden border border-solid border-transparent shadow-[0px_0px_250px_#42dfff] [border-image:linear-gradient(to_bottom,rgb(22,164,193),rgb(56,225.15,255))_1] [background:linear-gradient(180deg,rgb(56,70,255)_0%,rgb(22,164,193)_100%)]">
              <div className="relative w-fit mt-[-0.50px] [font-family:'Neue_Haas_Grotesk_Display_Pro-65Medium',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Learn More
              </div>
              <img
                className="relative w-6 h-6"
                alt="Arrow up left"
                src="https://c.animaapp.com/Sfj8S5ST/img/arrow-up-left-1.svg"
              />
            </button>
          </a>
          {/* <img
            className="absolute w-[371px] h-[214px] top-[513px] left-[1042px]"
            alt="Group"
            src="https://c.animaapp.com/Sfj8S5ST/img/group-11@2x.png"
          /> */}
          {/* <img
            className="absolute w-[121px] h-[130px] top-[63px] left-10"
            alt="Group"
            src="https://c.animaapp.com/Sfj8S5ST/img/group-12@2x.png"
          /> */}
        </div>
      </div>

      {/* divider */}
      <div className={style.section}>
        <div className="flex items-center justify-center px-[100px] py-0 relative flex-1 self-stretch w-full grow border-r [border-right-style:solid] border-l [border-left-style:solid] border-[#38e1ff]">
          <p className="relative w-fit [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal  tracking-[0] leading-[normal] whitespace-nowrap"></p>
        </div>
      </div>

      {/* early access */}
      <div className={style.section}>
      <div className="flex justify-center self-stretch border-b [border-bottom-style:solid] border-[#00000066]">
        <div className="flex-wrap justify-around gap-[0px_0px] px-4 sm:px-6 md:px-[80px] lg:px-[100px] xl:px-[156px]  py-[60px] rounded-[18px] border-2 border-solid backdrop-blur-[61.9px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(61.9px)_brightness(100%)] [background:linear-gradient(180deg,rgba(56,225.15,255,0.1)_0%,rgba(159.38,240.66,255,0.1)_100%)] flex items-center relative border-[#38e1ff]">
          <div className="flex flex-col items-start justify-center gap-9 relative flex-1 grow">
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Haas_Grotesk_Display_Pro-65Medium',Helvetica] font-medium text-[#ffffff] md:text-4xl lg:text-4xl xl:text-4xl text-2xl text-center tracking-[0] leading-[normal]">
                Be a early adaptor
              </div>
              <p className="relative self-stretch [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-[#c7c7c7] md:text-xl lg:text-xl xl:text-xl text-lg tracking-[0] leading-[normal]">
                {" "}
                Apply to be an early adaptor and get exclusive access to the
                Nexus Finance platform.
              </p>
            </div>
            <div className="inline-flex flex-col items-center gap-[30px] relative flex-[0_0_auto]">
              <div className="flex flex-col w-fit items-center gap-4 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col h-16 items-start justify-center gap-1 px-4 py-2 relative rounded-[var(--2-radius-radius-md)] border border-solid border-collection-1-brand-2">
                  <label
                    className="relative w-fit [font-family:'Neue_Haas_Grotesk_Display_Pro-45Light',Helvetica] font-light text-collection-1-brand-2 text-xs tracking-[0] leading-[normal] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]"
                    htmlFor="input-1"
                  >
                    Email Address
                  </label>
                  <input
                    className="w-[250px] relative border-0 [background:none] flex-1 grow mt-[-1.00px] [font-family:'Neue_Haas_Grotesk_Display_Pro-65Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] p-0"
                    id="input-1"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="inline-flex flex-col h-16 items-start justify-center gap-1 px-4 py-2 relative rounded-[var(--2-radius-radius-md)] border border-solid border-collection-1-brand-2">
                  <label
                    className="relative w-fit [font-family:'Neue_Haas_Grotesk_Display_Pro-45Light',Helvetica] font-light text-collection-1-brand-2 text-xs tracking-[0] leading-[normal] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]"
                    htmlFor="input-2"
                  >
                    Wallet Address
                  </label>
                  <input
                    className="w-[250px] relative border-0 [background:none] flex-1 grow mt-[-1.00px] [font-family:'Neue_Haas_Grotesk_Display_Pro-65Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] p-0"
                    id="input-2"
                    value={wallet}
                    onChange={handleWalletChange}
                  />
                </div>
              </div>
              <button
                className="all-[unset] disabled:opacity-30 box-border flex w-[250px] px-8 py-2.5 mb-[-1.00px] items-center justify-center gap-2.5 relative flex-[0_0_auto] rounded-[1.16px] overflow-hidden border border-solid border-transparent shadow-[0px_0px_250px_#42dfff] [border-image:linear-gradient(to_bottom,rgb(22,164,193),rgb(56,225.15,255))_1] [background:linear-gradient(180deg,rgb(56,70,255)_0%,rgb(22,164,193)_100%)]"
                onClick={handleApply}
                disabled={loading}
              >
                <div className="relative w-fit mt-[-0.50px] [font-family:'Neue_Haas_Grotesk_Display_Pro-65Medium',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  {loading ? "Applying in progress..." : "Apply"}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* divider */}
      <div className={`${style.section} [border-top-style:solid]`}>
        <div className="flex items-center justify-center px-[100px] py-0 relative flex-1 self-stretch w-full grow border-r [border-right-style:solid] border-l [border-left-style:solid] border-[#38e1ff]">
          <p className="relative w-fit [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap"></p>
        </div>
      </div>

      {/* footer */}
      <div className="justify-end px-4 sm:px-6 md:px-[80px] lg:px-[100px] xl:px-[156px] py-[47px] border-[#00000066] flex flex-col items-center gap-2.5 relative self-stretch w-full border-b [border-bottom-style:solid]">
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-between px-2.5 py-5 self-stretch w-full">
          <div className="flex flex-col items-start gap-6 px-4 py-1 relative self-stretch shadow-[0px_0px_53.2px_#00000040]">
            <div className="relative w-[128.93px] h-[60px]">
              <Logo />
            </div>
            <p className="relative self-stretch [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-[#38e1ffb2] text-base tracking-[0] leading-[normal]  whitespace-pre-line">
              Nexus Finance enables seamless restaking and validation,
              empowering users to secure, validate, and earn.
            </p>
          </div>
          <div className="flex flex-col items-start w-full md:w-[300px] gap-6 px-4 py-1 shadow-md">
          </div>

          <div className="flex flex-col items-start w-full md:w-[300px] gap-6 px-4 py-1 shadow-md">
            <div className="text-xl text-[#38e1ffb2]">Brand Kit</div>
            <div className="text-xl text-[#38e1ffb2]">Docs</div>
            <div className="text-xl text-[#38e1ffb2]">Contact us</div>
            <div className="text-xl text-[#38e1ffb2]">Twitter</div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2.5 px-2.5 py-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-[#38e1ff4c] text-sm tracking-[0] leading-[0.1px]">
            ©Nexusfi 2024
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeEarlyAccess;
