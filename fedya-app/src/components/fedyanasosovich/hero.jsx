import React from "react";
import Image from "next/image";
import Button from "../global/button";
import { IoLogoInstagram } from "react-icons/io5";
import Link from "next/link";
const Hero = ({ title ,  text}) => {
  return (
    <div className=" bg-grid-lines  relative z-20 overflow-hidden  ">
      <div className="flex items-center   min-h-56 md:min-h-[500px] container   ">
        <div className="flex flex-col  lg:max-w-2xl lg:mx-auto  lg:my-0 mt-24 mb-4  justify-between items-center w-full gap-12 lg:gap-6 pb-6 ">

        <div className="lg:hidden block">
          <Link href={"https://buypfizergenotropinhgh.com/"} target="_blank">
            <Button
                title={"Click here to purchase pharmaceutical  HGH"}
                containerClass={"text-sm px-6"}
              />
          </Link>
            <div className="mt-5">
              <p className="mb-2 text-center">Follow us on</p>
              <Link href={"https://www.instagram.com/fedya_nasosovich/"}>
                <IoLogoInstagram size={34} className="text-darkPurple mx-auto" />
              </Link>
            </div>
        </div>
          <div className="max-w-2xl lg:text-start text-center flex flex-col gap-3 lg:mt-16">
            <h1 className="text-4xl lg:text-center  lg:text-6xl font-taviraj ">{title}</h1>
            <span className="h-1 round block w-full bg-darkPurple"></span>
          </div>

          <p className="text-justify lg:text-center">
           {/* {!removeText && `From the hundreds of clients I deal with 90% of those who have
            previously purchased human growth hormone ( somatropin) over the
            internet or from a source have received fake hgh . This page is
            designed to help you identify and know the signs so as not to lose
            your money !!!!`} */}
           {text}
          </p>

          <div className="lg:block hidden">
          <Link href={"https://buypfizergenotropinhgh.com/"} target="_blank">
            <Button
                title={"Click here to purchase pharmaceutical  HGH"}
                containerClass={"text-sm px-6"}
              />
          </Link>
            <div className="mt-5">
              <p className="mb-2 text-center">Follow us on</p>
              <Link href={"https://www.instagram.com/fedya_nasosovich/"}>
                <IoLogoInstagram size={34} className="text-darkPurple mx-auto" />
              </Link>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
