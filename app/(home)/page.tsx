"use client";
import React, { useState } from "react";
import Airtable from "airtable";
import toast from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";

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
        setLoading(false);
        console.log(record?.getId());
      }
    );
  };

  return (
    <div className="flex flex-col items-start relative bg-[#0a0c18]">
      <div className="h-[130px] px-[156px] py-0 border-[#16a4c1] flex flex-col items-center gap-2.5 relative self-stretch w-full border-b [border-bottom-style:solid]">
        <div className="flex items-center justify-around relative flex-1 self-stretch w-full grow border-r [border-right-style:solid] border-l [border-left-style:solid] border-[#16a4c1]">
          <div className="flex items-center justify-between px-6 py-2 relative flex-1 self-stretch grow  backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]">
            <img
              className="relative w-[219.33px] h-[130px] mt-[-8.00px] mb-[-8.00px] ml-[-24.00px]"
              alt="Logo"
              src="https://c.animaapp.com/Sfj8S5ST/img/logo.svg"
            />
            <div className="inline-flex items-center gap-[84px] relative flex-[0_0_auto]">
              {/* <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-[#38e1ff] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Architecture
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-brand-2 text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Features
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-brand-2 text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Roadmap
              </div> */}
              <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] text-brand-2 whitespace-nowrap relative [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-xl tracking-[0] leading-[normal]">
                  <a href="https://litepaper.nexusfi.xyz/">Docs</a>
                </div>
                <img
                  className="relative w-6 h-6"
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
      <div className="flex flex-col items-center gap-2.5 px-[156px] py-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#38e1ff]">
        <div className="flex-col justify-center gap-4 px-4 py-[100px] self-stretch w-full flex-[0_0_auto] bg-[#38e1ff08] border-r [border-right-style:solid] border-l [border-left-style:solid] flex items-center relative border-[#38e1ff]">
          <div className="flex flex-wrap items-center justify-center gap-[25px_25px] relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative w-fit [font-family:'VP_Pixel-Regular',Helvetica] font-normal text-collection-1-brand-2 text-[80px] text-center tracking-[0] leading-[normal]">
              <span className="[font-family:'VP_Pixel-Regular',Helvetica] font-normal  text-[100px] tracking-[0]">
                R
              </span>
              <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                estake your assets
              </span>
            </p>
            {/* <div className="relative w-fit mt-[-1.00px] [text-shadow:0px_0px_250px_#38e1ff] [background:linear-gradient(180deg,rgb(0,104.3,201.88)_0%,rgb(56,225.15,255)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Neue_Haas_Grotesk_Display_Pro-75Bold',Helvetica] font-bold text-transparent text-[188px] text-center tracking-[0] leading-[225.6px] whitespace-nowrap">
              NIBI&#39;s
            </div> */}
            <div className="relative w-fit [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-collection-1-brand-2 text-[80px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              and gif of{" "}
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
      <div className="h-[129px] px-[156px] py-0 border-t [border-top-style:solid] border-[#38e1ff] flex flex-col items-center gap-2.5 relative self-stretch w-full border-b [border-bottom-style:solid]">
        <div className="flex items-center justify-center px-[100px] py-0 relative flex-1 self-stretch w-full grow border-r [border-right-style:solid] border-l [border-left-style:solid] border-[#38e1ff]">
          <p className="relative w-fit [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
            {" "}
            © 2024 Nexus Finance. All rights reserved.
          </p>
        </div>
      </div>
      <div className="flex justify-center self-stretch w-full border-b [border-bottom-style:solid] border-[#00000066]">
        <div className="flex-wrap w-[800px] h-[613px] justify-around gap-[0px_0px] px-[100px] py-[60px] rounded-[18px] border-2 border-solid backdrop-blur-[61.9px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(61.9px)_brightness(100%)] [background:linear-gradient(180deg,rgba(56,225.15,255,0.1)_0%,rgba(159.38,240.66,255,0.1)_100%)] flex items-center relative border-[#38e1ff]">
          <div className="flex flex-col h-[493px] items-start justify-center gap-9 relative flex-1 grow">
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Haas_Grotesk_Display_Pro-65Medium',Helvetica] font-medium text-[#ffffff] text-5xl text-center tracking-[0] leading-[normal]">
                Be a early adaptor
              </div>
              <p className="relative self-stretch [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-[#c7c7c7] text-2xl tracking-[0] leading-[normal]">
                {" "}
                Apply to be an early adaptor and get exclusive access to the
                Nexus Finance platform.
              </p>
            </div>
            <div className="inline-flex flex-col items-center gap-[30px] relative flex-[0_0_auto]">
              <div className="flex flex-col w-[597px] items-center gap-4 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col h-16 items-start justify-center gap-1 px-4 py-2 relative rounded-[var(--2-radius-radius-md)] border border-solid border-collection-1-brand-2">
                  <label
                    className="relative w-fit [font-family:'Neue_Haas_Grotesk_Display_Pro-45Light',Helvetica] font-light text-collection-1-brand-2 text-xs tracking-[0] leading-[normal] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]"
                    htmlFor="input-1"
                  >
                    Email Address
                  </label>
                  <input
                    className="w-[329px] relative border-0 [background:none] flex-1 grow mt-[-1.00px] [font-family:'Neue_Haas_Grotesk_Display_Pro-65Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] p-0"
                    id="input-1"
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
                    className="w-[329px] relative border-0 [background:none] flex-1 grow mt-[-1.00px] [font-family:'Neue_Haas_Grotesk_Display_Pro-65Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] p-0"
                    id="input-2"
                    onChange={handleWalletChange}
                  />
                </div>
              </div>
              <button
                className="all-[unset] disabled:opacity-30 box-border flex w-[363px] px-8 py-2.5 mb-[-1.00px] items-center justify-center gap-2.5 relative flex-[0_0_auto] rounded-[1.16px] overflow-hidden border border-solid border-transparent shadow-[0px_0px_250px_#42dfff] [border-image:linear-gradient(to_bottom,rgb(22,164,193),rgb(56,225.15,255))_1] [background:linear-gradient(180deg,rgb(56,70,255)_0%,rgb(22,164,193)_100%)]"
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
      <div className="h-[129px] px-[156px] py-0 border-t [border-top-style:solid] border-[#38e1ff] flex flex-col items-center gap-2.5 relative self-stretch w-full border-b [border-bottom-style:solid]">
        <div className="flex items-center justify-center px-[100px] py-0 relative flex-1 self-stretch w-full grow border-r [border-right-style:solid] border-l [border-left-style:solid] border-[#38e1ff]">
          <p className="relative w-fit [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
            {" "}
            © 2024 Nexus Finance. All rights reserved.
          </p>
        </div>
      </div>
      <div className="justify-end px-[156px] py-[47px] flex-[0_0_auto] border-[#00000066] flex flex-col items-center gap-2.5 relative self-stretch w-full border-b [border-bottom-style:solid]">
        <div className="flex items-center justify-between px-2.5 py-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-[433px] items-start gap-6 px-4 py-1 relative self-stretch shadow-[0px_0px_53.2px_#00000040]">
            <div className="relative w-[128.93px] h-[60px]">
              <img
                className="absolute w-[30px] h-[30px] top-[15px] left-0"
                alt="Group"
                src="https://c.animaapp.com/Sfj8S5ST/img/group@2x.png"
              />
              <p className="absolute top-[22px] left-[35px] [font-family:'Modern_No._20-Regular',Helvetica] font-normal text-[#38e1ffb2] text-[41.2px] tracking-[0] leading-[0.1px]">
                <span className="[font-family:'Modern_No._20-Regular',Helvetica] font-normal text-[#38e1ffb2] text-[41.2px] tracking-[0] leading-[0.1px]">
                  e
                </span>
                <span className="text-[41.6px]">x</span>
                <span className="[font-family:'Modern_No._20-Regular',Helvetica] font-normal text-[#38e1ffb2] text-[41.2px] tracking-[0] leading-[0.1px]">
                  us
                </span>
                <span className="[font-family:'VP_Pixel-Regular',Helvetica]">
                  fi
                </span>
              </p>
            </div>
            <p className="relative self-stretch [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-[#38e1ffb2] text-base tracking-[0] leading-[normal]">
              Nexus Finance enables seamless restaking and validation,
              empowering users to secure, validate, and earn.
            </p>
          </div>
          <div className="flex flex-col w-[300px] items-start gap-6 px-4 py-1 relative self-stretch shadow-[0px_0px_53.2px_#00000040]">
            <div className="relative self-stretch mt-[-0.34px] [font-family:'Neue_Haas_Grotesk_Display_Pro-65Medium',Helvetica] font-medium text-[#38e1ffb2] text-xl tracking-[0] leading-[normal]">
              Resources
            </div>
            <div className="self-stretch text-[#38e1ffb2] relative [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-xl tracking-[0] leading-[normal]">
              Docs
            </div>
            <div className="relative w-fit [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-[#38e1ffb2] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              Stake
            </div>
            <div className="relative w-fit [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-[#38e1ffb2] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              Roadmap
            </div>
            <div className="relative w-fit [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-[#38e1ffb2] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              Architecture
            </div>
          </div>
          <div className="flex flex-col w-[300px] items-start gap-6 px-4 py-1 relative self-stretch shadow-[0px_0px_53.2px_#00000040]">
            <div className="relative self-stretch mt-[-0.34px] [font-family:'Neue_Haas_Grotesk_Display_Pro-65Medium',Helvetica] font-medium text-[#38e1ffb2] text-xl tracking-[0] leading-[normal]">
              Company
            </div>
            <div className="relative self-stretch [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-[#38e1ffb2] text-xl tracking-[0] leading-[normal]">
              Contact us
            </div>
            <div className="relative self-stretch [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-[#38e1ffb2] text-xl tracking-[0] leading-[normal]">
              Twitter
            </div>
            <div className="relative self-stretch [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-[#38e1ffb2] text-xl tracking-[0] leading-[normal]">
              Privacy
            </div>
            <div className="relative self-stretch [font-family:'Neue_Haas_Grotesk_Display_Pro-55Roman',Helvetica] font-normal text-[#38e1ffb2] text-xl tracking-[0] leading-[normal]">
              Terms
            </div>
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
