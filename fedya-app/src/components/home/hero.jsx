import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" bg-grid-lines  ">
      <div className="flex items-center  min-h-svh container   ">
        <div className="flex lg:flex-row flex-col     justify-between items-center w-full gap-12">
          <div className="max-w-2xl lg:text-start text-center flex flex-col gap-6">
            <h1 className="text-5xl  lg:text-8xl font-taviraj">
              PFIZER <br /> GENOTROPIN
            </h1>
            <p className="italic">
            &quot;Each order is handled by me personally purchased through the
              pharmacy with a valid prescription via doctors supervision.&quot;
            </p>
            <p>
              Human Growth Hormone – Somatropin is the wonder substance of the
              last few decades. It is used by everyone from models to
              bodybuilders, athletes to actors from singers to celebrities.
            </p>
          </div>
          <Image
            src="/images/hero-1.jpeg"
            width={400}
            className="rounded-xl w-full lg:w-[400]   shadow-2xl"
            height={400}
            alt="Pfizer Genotropin"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
