import React from "react";


const Hero = ({title, vidUrl }) => {
  return (
    <div className=" bg-grid-lines hero-sec relative overflow-hidden  ">
      <div className="flex items-center  min-h-svh container   ">
        <div className="flex lg:flex-row flex-col  lg:my-0 mt-32 mb-12   justify-between items-center w-full gap-12">
          <div className="max-w-2xl lg:text-start text-center flex flex-col gap-3">
            <h1 className="text-4xl  lg:text-8xl font-taviraj ">
             {title}
            </h1>
            <span className="h-1 round block w-full bg-darkPurple"></span>
          
          </div>
       { vidUrl &&  <video
            src={vidUrl}
            width={400}
            controls
            className="rounded-xl w-full lg:w-[400px]   shadow-2xl"
            height={400}
            alt="Pfizer Genotropin"
          />}
         
        </div>
      </div>
    </div>
  );
};

export default Hero;
