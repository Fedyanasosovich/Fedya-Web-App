import React from "react";
import Image from "next/image";

const Hero = ({ vidUrl }) => {
  return (
    <div className=" bg-grid-lines hero-sec relative overflow-hidden  ">
      <div className="flex items-center  min-h-svh container   ">
        <div className="flex lg:flex-row flex-col  lg:my-0 mt-32 mb-12   justify-between items-center w-full gap-12">
          <div className="max-w-2xl lg:text-start text-center flex flex-col gap-3">
            <h1 className="text-5xl  lg:text-8xl font-taviraj ">
              PFIZER <br /> GENOTROPIN
            </h1>
            <span className="h-1 round block w-full bg-darkPurple"></span>
            {/* <p className="italic">
              &quot;Proof of buying hgh in the pharmacy&quot;
            </p> */}
            {/* <p>
              Human Growth Hormone – Somatropin is the wonder substance of the
              last few decades. It is used by everyone from models to
              bodybuilders, athletes to actors from singers to celebrities. It
              is nothing short of a miracle substance, it is know as the master
              hormone. For this reason it builds muscle, burns fat, repairs old
              injuries and makes you look younger.
            </p> */}
          </div>
          <video
            src={vidUrl}
            width={400}
            controls
            className="rounded-xl w-full lg:w-[400px]   shadow-2xl"
            height={400}
            alt="Pfizer Genotropin"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
