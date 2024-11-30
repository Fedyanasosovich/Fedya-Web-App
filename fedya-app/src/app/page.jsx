"use client";
import Hero from "@/components/home/hero";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const sliderItems = [
    { src: "/images/slider-img-1.webp", altText: "slider image 1" },
    { src: "/images/slider-img-2.webp", altText: "slider image 2" },
    { src: "/images/slider-img-3.webp", altText: "slider image 3" },
    { src: "/images/slider-img-4.webp", altText: "slider image 4" },
    { src: "/images/slider-img-5.webp", altText: "slider image 5" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".scroll-section");

    sections.forEach((section, i) => {
      const nextSection = sections[i + 1];

      if (nextSection) {
        // Define timeline for fading out the current section and fading in the next section
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "center center", // Trigger when the current section starts to scroll into view
            end: "bottom top", // End when the section leaves the screen
            scrub: true,
            pin: true, // Pin the section in place while it's fading out
            pinSpacing: false,
          },
        });

        tl.to(section, { opacity: 0, y: -50 }, 0) // Fade out the current section
          .fromTo(
            nextSection,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0 },
            "<"
          ); // Fade in the next section
      }
    });
  }, []);

  return (
    <>
      <Hero />

      <div className="container">
        {/* First Section */}
        <div className="scroll-section  pt-28 lg:pt-48 text-md lg:text-2xl font-tavirajItalic text-center">
          <p>
            Personally having used Genotropin it is a Very High quality HGH.
            People ask me the general difference between the pharmaceutical
            brands. Genotropin has more water retention and is more suitable for
            bulking omnitrope a little less and thus more suitable for cutting.
            However these are minor differences as all pharmaceutical hgh is the
            best in the world.
          </p>
        </div>

        {/* Second Section */}
        <div className="scroll-section ">
          <div className="pb-10">
            <h2 className="text-3xl lg:text-5xl font-taviraj">
              LATEST PACKAGING
            </h2>
            <p className="py-4">
              It is nothing short of a miracle substance, it is known as the
              master hormone. For this reason, it builds muscle, burns fat,
              repairs old injuries and makes you look younger.
            </p>
            <p className="italic">Each Pack contains 36iu as pictured below.</p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={3}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            navigation={true}
            className="mySwiper px-20"
            breakpoints={{
              480: { slidesPerView: 1 },
              768: { slidesPerView: 1},
              1024: { slidesPerView: 3 },
            }}
          >
            {sliderItems.map((items, i) => (
              <SwiperSlide key={i} className="px-14">
                <Image
                  src={items.src}
                  width={300}
                  height={300}
                  className="h-64 w-full object-cover rounded"
                  alt={items.altText}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Third Section */}
        <div className="scroll-section pt-12">
          <div className="pb-10">
            <h2 className="text-3xl lg:text-5xl text-center font-taviraj">
              Why You Should Trust Me
            </h2>
          </div>
          <div className="flex flex-col mx-auto gap-3 max-w-4xl text-center">
            <iframe
              className="video_frame max-w-[900px] w-full md:h-[500px] h-[200px]"
              src="https://player.vimeo.com/video/361158553?autoplay=1"
            ></iframe>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              alias velit corporis facere in quaerat incidunt temporibus ducimus
              esse, nostrum, magni quia.
            </p>
          </div>
        </div>
        {/* Third Section */}
        <div className="scroll-section pt-12">
          <div className="pb-10">
            <h2 className="text-3xl lg:text-5xl text-center font-taviraj">
              Why You Should Trust Me
            </h2>
          </div>
          <div className="flex flex-col mx-auto gap-3 max-w-4xl text-center">
            <iframe
              className="video_frame max-w-[900px] w-full md:h-[500px] h-[200px]"
              src="https://player.vimeo.com/video/361158553?autoplay=1"
            ></iframe>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              alias velit corporis facere in quaerat incidunt temporibus ducimus
              esse, nostrum, magni quia.
            </p>
          </div>
        </div>
        {/* Third Section */}
        <div className="scroll-section pt-12">
          <div className="pb-10">
            <h2 className="text-3xl lg:text-5xl text-center font-taviraj">
              Why You Should Trust Me
            </h2>
          </div>
          <div className="flex flex-col mx-auto gap-3 max-w-4xl text-center">
            <iframe
              className="video_frame max-w-[900px] w-full md:h-[500px] h-[200px]"
              src="https://player.vimeo.com/video/361158553?autoplay=1"
            ></iframe>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              alias velit corporis facere in quaerat incidunt temporibus ducimus
              esse, nostrum, magni quia.
            </p>
          </div>
        </div>
        {/* Third Section */}
        <div className="scroll-section pt-12">
          <div className="pb-10">
            <h2 className="text-3xl lg:text-5xl text-center font-taviraj">
              Why You Should Trust Me
            </h2>
          </div>
          <div className="flex flex-col mx-auto gap-3 max-w-4xl text-center">
            <iframe
              className="video_frame max-w-[900px] w-full md:h-[500px] h-[200px]"
              src="https://player.vimeo.com/video/361158553?autoplay=1"
            ></iframe>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              alias velit corporis facere in quaerat incidunt temporibus ducimus
              esse, nostrum, magni quia.
            </p>
          </div>
        </div>
      </div>

      {/* form */}

      <section className="pt-12 lg:pt-48 ">
        <div className="container px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <h2 className="text-2xl lg:text-5xl pb-6 lg:pb-12 font-taviraj">
                Buy Now
              </h2>
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div className="mt-8">
                <a href="#" className="text-lg font-bold text-white">
                  {" "}
                  0151 475 4450{" "}
                </a>

                <address className="mt-2 not-italic">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white text-black p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-600 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-600 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-600 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="sr-only" htmlFor="product">
                      Product
                    </label>
                    <select
                      id="product"
                      className="w-full rounded-lg text-black border border-gray-600 p-3 text-sm"
                    >
                      <option value="">Select Quantity</option>
                      <option value="product1">
                        2 x 36 iu total 72iu . Price is 760 euro (380 euro per
                        pack)
                      </option>
                      <option value="product2">
                        4 x 36 iu total 144 iu Price is 1480 euro (370 euro per
                        pack)
                      </option>
                      <option value="product3">
                        6 x 36 iu total 216 iu Price is 2160 euro (360 euro per
                        pack )
                      </option>
                      <option value="product4">
                        10 x 36 iu total 360iu Price is 3500 euro (350 euro per
                        pack)
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="product">
                      Product
                    </label>
                    <select
                      id="product"
                      className="w-full rounded-lg text-black border border-gray-600 p-3 text-sm"
                    >
                      <option value="">Select Payment Method</option>
                      <option value="Paypal">Paypal</option>
                      <option value="Bank-Wire">Bank Wire</option>
                      <option value="Western-Union">
                        Western Union / Money Gram
                      </option>
                      <option value="Crypto">Crypto</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border border-gray-600 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Order Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
