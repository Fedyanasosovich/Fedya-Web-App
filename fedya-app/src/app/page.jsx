"use client";
import Hero from "@/components/home/hero";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import Image from "next/image";
export default function Home() {
  const sliderItems = [
    {
      src: "/images/slider-img-1.webp",
      altText: "slider image 1",
    },
    {
      src: "/images/slider-img-2.webp",

      altText: "slider image 2",
    },
    {
      src: "/images/slider-img-3.webp",

      altText: "slider image 3",
    },
    {
      src: "/images/slider-img-4.webp",

      altText: "slider image 4",
    },
    {
      src: "/images/slider-img-5.webp",

      altText: "slider image 5",
    },
  ];

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      smooth: true,
      direction: 'vertical', // Can be 'vertical' or 'horizontal'
      gestureDirection: 'vertical', 
    });

    // Animation function
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation loop
    requestAnimationFrame(raf);

    // Cleanup on component unmount
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Hero />

      <div className="container">
        <div className=" py-48 text-2xl font-tavirajItalic text-center ">
          <p>
            Personally having used Genotropin it is a Very High quality HGH.
            People ask me the general difference between the pharmaceutical
            brands. Genotropin has more water retention and is more suitable for
            bulking omnitrope a little less and thus more suitable for cutting.
            However these are minor differences as all pharmaceutical hgh is the
            best in the world.
          </p>
        </div>

        <div className="pb-48 ">
          <h2 className="text-4xl pb-10">LATEST PACKAGING</h2>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={3}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            navigation={true}
            className="mySwiper px-20"
          >
            {sliderItems.map((items, i) => {
              return (
                <SwiperSlide key={i} className="px-14">
                  <Image
                    src={items.src}
                    width={300}
                    height={300}
                    className="h-64 w-full object-cover rounded"
                    alt={items.altText}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
