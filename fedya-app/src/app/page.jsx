import Hero from "@/components/fedyanasosovich/hero";

import Link from "next/link";
import Button from "@/components/global/button";
import { IoLogoInstagram } from "react-icons/io5";

export default function Home() {
  return (
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
            unparalleled honesty about the use of steroids and HGH, Fedya has
            dismantled the myths that shroud the fitness industry, giving you
            the raw, unfiltered truth you need to succeed.
          </p>

          <p>
            From a young age, Fedya's curiosity about the human potential was
            insatiable. He journeyed across the globe, learning from the world's
            most elite martial arts masters, life coaches and Gurus making him a
            polymath in the art of self-improvement. His quest for knowledge led
            him to not just understand, but master the secrets of physical and
            mental peak performance.
          </p>

          <p>
            Over the years Fedya has worked with Multiple time Mr Olympia
            competitors, Muay thai legends, ufc fighters, boxers aswell as
            millionaires who want to refind their youth. However no task was too
            small as he was open to consulting anyone who contacted him.
          </p>

          <p>
            However, in recent times, this maestro of muscle and mind has
            shifted his unparalleled focus to unveiling the masquerade of
            counterfeit HGH, ensuring that only the purest essence of
            performance enhancement reaches those who seek true growth. His
            mission? To arm you with the secrets of discernment, safeguarding
            your journey from the deceit of fakes to the triumph of genuine
            transformation.
          </p>

          <p>A word from Fedya himself. Please watch the video below.</p>
        </div>

        <div className="flex flex-col items-center mt-12">
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
    </>
  );
}
