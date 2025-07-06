"use client";

import Hero from "@/components/fedyanasosovich/hero";

import Link from "next/link";
import Button from "@/components/global/button";
import { IoLogoInstagram } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500); // 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black transition-opacity duration-700">
          <div className="flex flex-col items-center justify-center w-full h-full animate-fade-in-out">
            <h1 className="text-5xl md:text-7xl font-normal tracking-widest text-center drop-shadow-lg mb-4">
              <span
                style={{ color: '#8d7e63', textShadow: '0 2px 16px rgba(141,126,99,0.25)' }}
                className="block mb-2"
              >
                {"F E D Y A".split("").map((char, i) => (
                  <span
                    key={i}
                    className="inline-block opacity-0 animate-fade-in-char"
                    style={{ animationDelay: `${i * 0.07}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
              <span
                style={{ color: '#800080', textShadow: '0 2px 16px rgba(128,0,128,0.25)' }}
                className="block mt-2"
              >
                {"N A S O S O V I C H".split("").map((char, i) => (
                  <span
                    key={i}
                    className="inline-block opacity-0 animate-fade-in-char"
                    style={{ animationDelay: `${(i + 7) * 0.07}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#8d7e63] via-[#800080] to-[#8d7e63] rounded-full mt-2 mb-2 opacity-80 animate-fade-in" style={{ animationDelay: '1.2s' }} />
          </div>
        </div>
      )}
      {!showSplash && (
        <>
          <Hero
            title={"Welcome to the World of Fedya Nasosovich"}
            removeText={true}
          />

          <div className="container">
            {/* First Section */}

            <div className="  pt-12 lg:pt-24 flex flex-col gap-5 text-md lg:text-2xl  ">
              <p>
                Fedya Nasosovich a legend in the realms of Boxing, MMA,
                bodybuilding, and traditional martial arts. Known for his
                unparalleled honesty about the use of steroids and HGH, Fedya
                has dismantled the myths that shroud the fitness industry,
                giving you the raw, unfiltered truth you need to succeed.
              </p>

              <p>
                From a young age, Fedya's curiosity about the human potential
                was insatiable. He journeyed across the globe, learning from the
                world's most elite martial arts masters, life coaches and Gurus
                making him a polymath in the art of self-improvement. His quest
                for knowledge led him to not just understand, but master the
                secrets of physical and mental peak performance.
              </p>

              <p>
                Over the years Fedya has worked with Multiple time Mr Olympia
                competitors, Muay thai legends, ufc fighters, boxers aswell as
                millionaires who want to refind their youth. However no task was
                too small as he was open to consulting anyone who contacted him.
              </p>

              <p>
                However, in recent times, this maestro of muscle and mind has
                shifted his unparalleled focus to unveiling the masquerade of
                counterfeit HGH, ensuring that only the purest essence of
                performance enhancement reaches those who seek true growth. His
                mission? To arm you with the secrets of discernment,
                safeguarding your journey from the deceit of fakes to the
                triumph of genuine transformation.
              </p>

              {/* <p>A word from Fedya himself. Please watch the video below.</p> */}
            </div>

            <div className="flex flex-col items-center mt-12">
              <Link href={"https://www.sandozomnitrope.com"} target="_blank">
                <Button
                  title={"Click here to purchase pharmaceutical  HGH"}
                  containerClass={"text-sm px-6"}
                />
              </Link>
              <div className="mt-5">
                <p className="mb-2 text-center">Follow us on</p>
                <Link href={"https://www.instagram.com/fedya_nasosovich/"}>
                  <IoLogoInstagram
                    size={34}
                    className="text-darkPurple mx-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
